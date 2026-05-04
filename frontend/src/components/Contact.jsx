import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { RESTAURANT } from "../lib/data";
import { useReveal } from "../lib/useReveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Name, email and message are required.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message received", {
        description: "We will get back to you within a day.",
      });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      const msg =
        err?.response?.data?.detail?.[0]?.msg ||
        err?.response?.data?.detail ||
        "Could not send. Please call us instead.";
      toast.error("Failed", { description: String(msg) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      data-testid="contact-section"
      className="reveal relative py-28 md:py-40 bg-ink"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-gold text-xs uppercase tracking-[0.4em]">
            Visit Us
          </span>
          <h2 className="font-serif text-bone text-4xl md:text-6xl mt-4">
            Find your way to <span className="italic text-gold">Dragon King</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Info + Map */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard icon={MapPin} title="Address">
                {RESTAURANT.address}
              </InfoCard>
              <InfoCard icon={Phone} title="Telephone">
                {RESTAURANT.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="block hover:text-gold"
                    data-testid={`contact-phone-${p.replace(/\D/g, "")}`}
                  >
                    {p}
                  </a>
                ))}
              </InfoCard>
              <InfoCard icon={Clock} title="Hours">
                {RESTAURANT.hours.map((h) => (
                  <p key={h.day} className="text-sm">
                    <span className="text-gold">{h.day}</span> · {h.time}
                  </p>
                ))}
              </InfoCard>
              <InfoCard icon={Mail} title="Email">
                <a
                  href="mailto:hello@dragonking.in"
                  className="hover:text-gold"
                >
                  hello@dragonking.in
                </a>
              </InfoCard>
            </div>

            <div className="relative aspect-[16/10] border border-gold/20 overflow-hidden">
              <iframe
                title="Dragon King Location"
                src={RESTAURANT.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.4) invert(0.92) hue-rotate(180deg)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="contact-map"
              />
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={submit}
            data-testid="contact-form"
            className="lg:col-span-5 bg-ink-surface border border-gold/15 p-6 md:p-8 self-start"
          >
            <h3 className="font-serif text-bone text-2xl mb-2">
              Send us a note
            </h3>
            <p className="text-bone-muted text-sm mb-6">
              Questions, feedback, large bookings — we read every message.
            </p>
            <div className="grid gap-4">
              <input
                data-testid="contact-name"
                placeholder="Your name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="contact-field"
                required
              />
              <input
                data-testid="contact-email"
                placeholder="Email *"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="contact-field"
                required
              />
              <input
                data-testid="contact-phone-input"
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="contact-field"
              />
              <textarea
                data-testid="contact-message"
                placeholder="Your message *"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="contact-field min-h-[140px] resize-none"
                required
              />
              <button
                type="submit"
                data-testid="contact-submit"
                disabled={loading}
                className="px-8 py-4 bg-imperial text-bone text-xs uppercase tracking-[0.3em] hover:bg-imperial-dark transition-colors disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        .contact-field {
          width: 100%;
          background: #120B0B;
          border: 1px solid rgba(212,175,55,0.18);
          color: #FDF5E6;
          padding: 0.85rem 1rem;
          font-family: 'Manrope', sans-serif;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .contact-field::placeholder { color: #7A7165; }
        .contact-field:focus { border-color: #D4AF37; background: #181010; }
      `}</style>
    </section>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="border border-gold/15 bg-ink-surface p-5">
      <div className="flex items-center gap-2 mb-3 text-gold">
        <Icon className="w-4 h-4" />
        <span className="text-[10px] uppercase tracking-[0.3em]">{title}</span>
      </div>
      <div className="text-bone text-sm leading-relaxed">{children}</div>
    </div>
  );
}
