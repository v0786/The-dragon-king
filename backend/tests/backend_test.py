"""Dragon King Restaurant - Backend API tests."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://legacy-dragon-king.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root_welcome(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Dragon King" in data["message"]


# ---------- Reservations ----------
class TestReservations:
    def test_create_reservation_success(self, client):
        payload = {
            "name": "TEST_Reserve User",
            "phone": "+91 8108851993",
            "date": "2030-12-31",
            "time": "19:30",
            "guests": 4,
            "notes": "Window seat please",
        }
        r = client.post(f"{API}/reservations", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["name"] == payload["name"]
        assert data["phone"] == payload["phone"]
        assert data["guests"] == 4
        assert data["status"] == "pending"
        assert "_id" not in data

    def test_create_reservation_with_email(self, client):
        payload = {
            "name": "TEST_With Email",
            "phone": "9999999999",
            "email": "test_dragonking@example.com",
            "date": "2030-12-31",
            "time": "20:00",
            "guests": 2,
        }
        r = client.post(f"{API}/reservations", json=payload)
        assert r.status_code == 200
        assert r.json()["email"] == "test_dragonking@example.com"

    def test_reject_too_many_guests(self, client):
        payload = {
            "name": "TEST_Big Group",
            "phone": "9999999999",
            "date": "2030-12-31",
            "time": "19:00",
            "guests": 31,
        }
        r = client.post(f"{API}/reservations", json=payload)
        assert r.status_code == 422

    def test_reject_missing_required_fields(self, client):
        # missing time
        r = client.post(f"{API}/reservations", json={
            "name": "TEST_No Time",
            "phone": "9999999999",
            "date": "2030-12-31",
            "guests": 2,
        })
        assert r.status_code == 422

    def test_reject_invalid_email(self, client):
        r = client.post(f"{API}/reservations", json={
            "name": "TEST_Bad Email",
            "phone": "9999999999",
            "email": "not-an-email",
            "date": "2030-12-31",
            "time": "19:00",
            "guests": 2,
        })
        assert r.status_code == 422

    def test_list_reservations_sorted(self, client):
        r = client.get(f"{API}/reservations")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        # No _id leak
        for it in items:
            assert "_id" not in it
            assert "id" in it
        # Sorted desc by created_at
        timestamps = [it["created_at"] for it in items]
        assert timestamps == sorted(timestamps, reverse=True)


# ---------- Contact ----------
class TestContact:
    def test_create_contact_success(self, client):
        payload = {
            "name": "TEST_Contact",
            "email": "test_contact@example.com",
            "phone": "+91 9999999999",
            "message": "This is a test message for the heritage restaurant.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and len(data["id"]) > 0
        assert data["email"] == payload["email"]
        assert data["name"] == payload["name"]
        assert "_id" not in data

    def test_reject_invalid_email_contact(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "TEST_Bad",
            "email": "bademail",
            "message": "Hello there from test",
        })
        assert r.status_code == 422

    def test_reject_missing_message(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "TEST_NoMsg",
            "email": "ok@example.com",
        })
        assert r.status_code == 422

    def test_list_contact(self, client):
        r = client.get(f"{API}/contact")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        assert len(items) >= 1
        for it in items:
            assert "_id" not in it
            assert "id" in it
