import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Calendar, Users, Clock, Phone, User, Mail, MessageSquare } from "lucide-react";
import { useReveal } from "../lib/useReveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Reservation() {
  const ref = useReveal();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      toast.error("Please fill name, phone, date and time.");
      return;
    }
    setLoading(true);
    try {
      const payload = { ...form, guests: Number(form.guests) };
      if (!payload.email) delete payload.email;
      const res = await axios.post(`${API}/reservations`, payload);
      toast.success("Table requested!", {
        description: `Thank you ${res.data.name}. We will call ${form.phone} to confirm shortly.`,
      });
      setForm({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        guests: 2,
        notes: "",
      });
    } catch (err) {
      const msg =
        err?.response?.data?.detail?.[0]?.msg ||
        err?.response?.data?.detail ||
        "Something went wrong. Please try calling us.";
      toast.error("Could not submit", { description: String(msg) });
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="reservation"
      ref={ref}
      data-testid="reservation-section"
      className="reveal relative py-28 md:py-40 bg-ink heritage-grain"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
        {/* Left intro */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <span className="text-gold text-xs uppercase tracking-[0.4em] mb-6">
            Reservations
          </span>
          <h2 className="font-serif text-bone text-4xl md:text-6xl leading-[1.05] mb-6">
            Save your <span className="italic text-gold">stool</span>
          </h2>
          <p className="text-bone-muted text-base md:text-lg leading-relaxed mb-8">
            We are a tiny roadside spot — only 8 to 10 seats, open-air, kitchen
            right next to you. Drop us your details and we'll hold a stool for
            you. For groups larger than four, please call ahead so we can
            arrange.
          </p>
          <div className="border border-gold/20 p-6 bg-ink-card">
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
              Direct Line
            </p>
            <a
              href="tel:+918108851993"
              className="font-serif text-bone text-2xl block hover:text-gold"
              data-testid="reservation-direct-phone"
            >
              +91 81088 51993
            </a>
            <a
              href="tel:+917977952708"
              className="font-serif text-bone text-2xl block hover:text-gold"
            >
              +91 79779 52708
            </a>
          </div>
        </div>

        {/* Right form */}
        <form
          onSubmit={submit}
          data-testid="reservation-form"
          className="lg:col-span-7 bg-ink-surface border border-gold/15 p-6 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full Name" icon={User}>
              <input
                data-testid="res-name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className="field-input"
                placeholder="Your name"
                required
              />
            </Field>
            <Field label="Phone" icon={Phone}>
              <input
                data-testid="res-phone"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="field-input"
                placeholder="+91 ..."
                required
              />
            </Field>
            <Field label="Email (optional)" icon={Mail}>
              <input
                data-testid="res-email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="field-input"
                placeholder="you@example.com"
                type="email"
              />
            </Field>
            <Field label="Guests (max 10)" icon={Users}>
              <input
                data-testid="res-guests"
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
                className="field-input"
                type="number"
                min={1}
                max={10}
                required
              />
            </Field>
            <Field label="Date" icon={Calendar}>
              <input
                data-testid="res-date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="field-input"
                type="date"
                min={today}
                required
              />
            </Field>
            <Field label="Time" icon={Clock}>
              <input
                data-testid="res-time"
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                className="field-input"
                type="time"
                required
              />
            </Field>
            <Field label="Special Requests" icon={MessageSquare} className="md:col-span-2">
              <textarea
                data-testid="res-notes"
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                className="field-input min-h-[110px] resize-none"
                placeholder="Birthday, anniversary, dietary needs..."
              />
            </Field>
          </div>

          <button
            type="submit"
            data-testid="res-submit"
            disabled={loading}
            className="mt-7 w-full md:w-auto px-10 py-4 bg-imperial text-bone text-xs uppercase tracking-[0.3em] hover:bg-imperial-dark transition-colors disabled:opacity-60"
          >
            {loading ? "Sending..." : "Request Reservation"}
          </button>
          <p className="text-bone-dim text-[11px] mt-4">
            We'll confirm your reservation by phone within 30 minutes during
            opening hours.
          </p>
        </form>
      </div>

      <style>{`
        .field-input {
          width: 100%;
          background: #120B0B;
          border: 1px solid rgba(212,175,55,0.18);
          color: #FDF5E6;
          padding: 0.85rem 0.95rem;
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .field-input::placeholder { color: #7A7165; }
        .field-input:focus {
          border-color: #D4AF37;
          background: #181010;
        }
        input[type="date"].field-input,
        input[type="time"].field-input {
          color-scheme: dark;
        }
      `}</style>
    </section>
  );
}

function Field({ label, icon: Icon, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold/90 mb-2">
        <Icon className="w-3.5 h-3.5" /> {label}
      </span>
      {children}
    </label>
  );
}
