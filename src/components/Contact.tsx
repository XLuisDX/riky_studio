import { useState } from "react";
import { Container } from "./Container";

function InfoCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
      <p className="text-xs tracking-[0.22em] text-white/60">{label}</p>
      <p className="mt-2 text-base font-semibold text-white">{value}</p>
      {hint ? <p className="mt-2 text-sm text-white/70">{hint}</p> : null}
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 700);
  }

  return (
    <section id="contact" className="py-14 md:py-18">
      <Container>
        <div className="mb-8 grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.22em] text-white/60">CONTACT</p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Let’s build something that looks premium.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
              Tell us what you need—video ads, food photography, or a complete
              digital signage setup. We’ll reply with next steps, timeline, and
              pricing.
            </p>
          </div>

          <div className="md:col-span-5 md:flex md:justify-end">
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <a
                href="#contact"
                className="rounded-2xl bg-sky px-5 py-3 text-center text-sm font-semibold text-prussian hover:brightness-110 transition"
              >
                Get a Quote
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/8 transition"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft md:p-8">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs tracking-[0.22em] text-white/60">
                      NAME
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="Your name"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-prussian/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-sky/40"
                    />
                  </div>

                  <div>
                    <label className="text-xs tracking-[0.22em] text-white/60">
                      EMAIL
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-prussian/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-sky/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs tracking-[0.22em] text-white/60">
                    BUSINESS (OPTIONAL)
                  </label>
                  <input
                    name="business"
                    placeholder="Restaurant / business name"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-prussian/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-sky/40"
                  />
                </div>

                <div>
                  <label className="text-xs tracking-[0.22em] text-white/60">
                    WHAT DO YOU NEED?
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project (video ads, photography, screens, media player, etc.)"
                    className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-prussian/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-sky/40"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-2xl bg-sky px-6 py-3 text-sm font-semibold text-prussian hover:brightness-110 transition disabled:opacity-60"
                  >
                    {status === "sent"
                      ? "Message sent ✓"
                      : status === "sending"
                      ? "Sending..."
                      : "Send message"}
                  </button>

                  <p className="text-xs text-white/50">
                    Typical reply time: within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="grid gap-4 md:col-span-5">
            <InfoCard
              label="EMAIL"
              value="rikistudy85@gmail.com"
              hint="We typically reply within 24 hours."
            />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
              <p className="text-xs tracking-[0.22em] text-white/60">PHONES</p>
              <div className="mt-2 space-y-2 text-sm font-semibold">
                <a
                  className="text-white hover:text-sky transition"
                  href="tel:+18036790904"
                >
                  +1 (803) 679-0904
                </a>
                <div className="text-white/30">•</div>
                <a
                  className="text-white hover:text-sky transition"
                  href="tel:+18033410956"
                >
                  +1 (803) 341-0956
                </a>
              </div>
              <p className="mt-2 text-sm text-white/70">
                Call or text to book a shoot or installation.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
              <p className="text-xs tracking-[0.22em] text-white/60">EMAIL</p>
              <a
                className="mt-2 block text-base font-semibold text-white hover:text-sky transition"
                href="mailto:rikistudy85@gmail.com"
              >
                rikistudy85@gmail.com
              </a>
              <p className="mt-2 text-sm text-white/70">
                We typically reply within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
