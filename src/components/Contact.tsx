import { useState } from "react";
import { Container } from "./Container";
import { AnimatePresence, motion } from "framer-motion";

import type { Variants } from "framer-motion";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

function InfoCard({
  label,
  value,
  hint,
  href,
}: {
  label: string;
  value: string;
  hint?: string;
  href?: string;
}) {
  const Inner = (
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(280px 200px at 25% 20%, rgba(34,181,255,0.12), transparent 60%), radial-gradient(360px 240px at 85% 85%, rgba(21,93,181,0.10), transparent 60%)",
        }}
      />

      <div className="relative">
        <p className="text-xs tracking-[0.22em] text-white/60">{label}</p>
        <p className="mt-2 text-base font-semibold text-white">{value}</p>
        {hint ? <p className="mt-2 text-sm text-white/70">{hint}</p> : null}
      </div>
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.22, ease: easeOut }}
        className="block"
      >
        {Inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: easeOut }}
    >
      {Inner}
    </motion.div>
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
    <section id="contact" className="relative py-14 md:py-18">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-260px] top-[-80px] h-[620px] w-[620px] rounded-full bg-tech/10 blur-3xl" />
        <div className="absolute right-[-260px] bottom-[-140px] h-[620px] w-[620px] rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-prussian/25" />
      </div>

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-8 grid gap-4 md:grid-cols-12 md:items-end"
          >
            <div className="md:col-span-7">
              <p className="text-xs tracking-[0.22em] text-white/60">CONTACT</p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                Let’s build something that looks premium.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                Tell us what you need—video ads, food photography, or a complete
                digital signage setup. We’ll reply with next steps, timeline,
                and pricing.
              </p>
            </div>

            <div className="md:col-span-5 md:flex md:justify-end">
              <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="rounded-2xl bg-sky px-5 py-3 text-center text-sm font-semibold text-prussian hover:brightness-110 transition"
                >
                  Get a Quote
                </motion.a>

                <motion.a
                  href="tel:+18036790904"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/8 transition"
                >
                  Book a Call
                </motion.a>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-12">
            <motion.div variants={fadeUp} className="md:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft md:p-8">
                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{
                    background:
                      "radial-gradient(360px 240px at 20% 20%, rgba(34,181,255,0.12), transparent 60%), radial-gradient(420px 280px at 90% 85%, rgba(21,93,181,0.10), transparent 60%)",
                  }}
                />

                <form onSubmit={onSubmit} className="relative space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs tracking-[0.22em] text-white/60">
                        NAME
                      </label>
                      <input
                        required
                        name="name"
                        placeholder="Your name"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-prussian/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-sky/40 focus:ring-4 focus:ring-sky/10"
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
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-prussian/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-sky/40 focus:ring-4 focus:ring-sky/10"
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
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-prussian/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-sky/40 focus:ring-4 focus:ring-sky/10"
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
                      className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-prussian/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-sky/40 focus:ring-4 focus:ring-sky/10"
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2, ease: easeOut }}
                      className="rounded-2xl bg-sky px-6 py-3 text-sm font-semibold text-prussian hover:brightness-110 transition disabled:opacity-60"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {status === "sent" ? (
                          <motion.span
                            key="sent"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25, ease: easeOut }}
                          >
                            Message sent ✓
                          </motion.span>
                        ) : status === "sending" ? (
                          <motion.span
                            key="sending"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25, ease: easeOut }}
                          >
                            Sending...
                          </motion.span>
                        ) : (
                          <motion.span
                            key="idle"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.25, ease: easeOut }}
                          >
                            Send message
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>

                    <p className="text-xs text-white/50">
                      Typical reply time: within 24 hours.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>

            <motion.div variants={stagger} className="grid gap-4 md:col-span-5">
              <motion.div variants={fadeUp}>
                <InfoCard
                  label="EMAIL"
                  value="rikistudy85@gmail.com"
                  hint="We typically reply within 24 hours."
                  href="mailto:rikistudy85@gmail.com"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                  <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      background:
                        "radial-gradient(280px 200px at 25% 20%, rgba(34,181,255,0.12), transparent 60%), radial-gradient(360px 240px at 85% 85%, rgba(21,93,181,0.10), transparent 60%)",
                    }}
                  />

                  <div className="relative">
                    <p className="text-xs tracking-[0.22em] text-white/60">
                      PHONES
                    </p>
                    <div className="mt-2 space-y-2 text-sm font-semibold">
                      <a
                        className="block text-white hover:text-sky transition"
                        href="tel:+18036790904"
                      >
                        +1 (803) 679-0904
                      </a>
                      <a
                        className="block text-white hover:text-sky transition"
                        href="tel:+18033410956"
                      >
                        +1 (803) 341-0956
                      </a>
                    </div>
                    <p className="mt-2 text-sm text-white/70">
                      Call or text to book a shoot or installation.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                  <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      background:
                        "radial-gradient(280px 200px at 20% 25%, rgba(21,93,181,0.12), transparent 60%), radial-gradient(360px 240px at 85% 80%, rgba(34,181,255,0.10), transparent 60%)",
                    }}
                  />

                  <div className="relative">
                    <p className="text-xs tracking-[0.22em] text-white/60">
                      SOCIAL
                    </p>
                    <div className="mt-2 space-y-2 text-sm font-semibold">
                      <a
                        className="block text-white hover:text-sky transition"
                        href="https://www.instagram.com/rik_istudy?igsh=MWwxNzh4ZG95aWl0eQ%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                      <a
                        className="block text-white hover:text-sky transition"
                        href="https://www.facebook.com/share/1BYiDFmw85/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facebook
                      </a>
                    </div>
                    <p className="mt-2 text-sm text-white/70">
                      Follow for recent work and updates.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
