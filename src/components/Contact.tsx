import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

function InfoCard({
  label,
  value,
  hint,
  href,
  icon,
}: {
  label: string;
  value: string | React.ReactNode;
  hint?: string;
  href?: string;
  icon?: React.ReactNode;
}) {
  const Inner = (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-2xl">
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.4, ease: easeOut }}
        style={{
          background:
            "radial-gradient(300px 250px at 30% 30%, rgba(56,189,248,0.12), transparent 70%), radial-gradient(350px 280px at 75% 75%, rgba(37,99,235,0.1), transparent 70%)",
        }}
      />

      <div className="relative">
        {icon && (
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-sky-400">
            {icon}
          </div>
        )}
        <p className="text-xs font-medium tracking-[0.2em] text-sky-400 uppercase">
          {label}
        </p>
        <div className="mt-3 text-lg font-semibold text-white">{value}</div>
        {hint && <p className="mt-3 text-sm text-white/60">{hint}</p>}
      </div>

      <motion.div
        className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.4 }}
      />
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: easeOut }}
        className="block h-full"
      >
        {Inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: easeOut }}
      className="h-full"
    >
      {Inner}
    </motion.div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formElement = e.currentTarget.querySelector(
      "[data-form]"
    ) as HTMLDivElement;
    const inputs = formElement.querySelectorAll("input, textarea");

    const formData = new FormData();
    let isValid = true;

    inputs.forEach((input) => {
      const element = input as HTMLInputElement | HTMLTextAreaElement;
      if (element.required && !element.value) {
        isValid = false;
      }
      formData.append(element.name, element.value);
    });

    if (!isValid) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 3000);
      return;
    }

    formData.append("access_key", "0837c98c-027a-4a68-9959-dfa3b04d7ade");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("sent");
        inputs.forEach((input) => {
          const element = input as HTMLInputElement | HTMLTextAreaElement;
          element.value = "";
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(data.message || "Error sending message");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Error sending message. Please try again."
      );
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-300px] top-[-100px] h-[700px] w-[700px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute right-[-300px] bottom-[-150px] h-[700px] w-[700px] rounded-full bg-sky-400/8 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/30" />
      </div>

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[10px] font-medium tracking-[0.2em] text-white/70 uppercase">
                Contact
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Let's build something that looks{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  amazing
                </span>
                <motion.span
                  className="absolute inset-0 bg-sky-400/20 blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </h2>

            <p className="mt-6 mx-auto max-w-2xl text-lg text-white/60">
              Tell us what you need—video ads, food photography, or a complete
              digital signage setup. We'll reply with next steps, timeline, and
              pricing.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            <motion.div variants={fadeUp} className="lg:col-span-2">
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10 shadow-2xl">
                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{
                    background:
                      "radial-gradient(400px 300px at 25% 25%, rgba(56,189,248,0.1), transparent 70%), radial-gradient(450px 350px at 80% 80%, rgba(37,99,235,0.08), transparent 70%)",
                  }}
                />

                <div onSubmit={handleSubmit} className="relative space-y-6">
                  <div data-form className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase">
                          Name *
                        </label>
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="Your name"
                          className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-sm px-5 py-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-sky-400/50 focus:ring-4 focus:ring-sky-400/10"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase">
                          Email *
                        </label>
                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="you@company.com"
                          className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-sm px-5 py-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-sky-400/50 focus:ring-4 focus:ring-sky-400/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase">
                        Business (Optional)
                      </label>
                      <input
                        name="business"
                        type="text"
                        placeholder="Restaurant / business name"
                        className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-sm px-5 py-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-sky-400/50 focus:ring-4 focus:ring-sky-400/10"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium tracking-[0.2em] text-white/70 uppercase">
                        What do you need? *
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={6}
                        placeholder="Tell us about your project (video ads, photography, screens, media player, etc.)"
                        className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-sm px-5 py-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-sky-400/50 focus:ring-4 focus:ring-sky-400/10"
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-2xl border border-red-500/20 bg-red-500/10 backdrop-blur-sm px-5 py-4"
                    >
                      <p className="text-sm text-red-400">{errorMessage}</p>
                    </motion.div>
                  )}

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-2">
                    <motion.button
                      onClick={(e) => {
                        const parent = e.currentTarget.closest(
                          ".space-y-6"
                        ) as HTMLDivElement | null;
                        if (parent) {
                          const fakeEvent = {
                            preventDefault: () => {},
                            currentTarget: parent,
                          } as React.FormEvent<HTMLDivElement>;
                          handleSubmit(fakeEvent);
                        }
                      }}
                      disabled={status === "sending"}
                      whileHover={{
                        scale: status === "sending" ? 1 : 1.02,
                        y: status === "sending" ? 0 : -2,
                      }}
                      whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                      transition={{ duration: 0.2, ease: easeOut }}
                      className="group/btn relative overflow-hidden rounded-2xl bg-sky-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-sky-400/30 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {status === "sent" ? (
                          <motion.span
                            key="sent"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: easeOut }}
                            className="relative z-10 flex items-center justify-center gap-2"
                          >
                            Message sent
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          </motion.span>
                        ) : status === "sending" ? (
                          <motion.span
                            key="sending"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: easeOut }}
                            className="relative z-10"
                          >
                            Sending...
                          </motion.span>
                        ) : (
                          <motion.span
                            key="idle"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: easeOut }}
                            className="relative z-10 flex items-center justify-center gap-2"
                          >
                            Send Message
                            <motion.span
                              animate={{ x: [0, 3, 0] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              →
                            </motion.span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-400"
                        initial={{ x: "100%" }}
                        whileHover={{ x: status === "sending" ? "100%" : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>

                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-3">
                      <p className="text-sm text-white/60">
                        ⚡ Reply within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={stagger} className="space-y-6">
              <motion.div variants={fadeUp}>
                <InfoCard
                  label="Email"
                  value="rikistudy85@gmail.com"
                  hint="Best for detailed requests"
                  href="mailto:rikistudy85@gmail.com"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  }
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <InfoCard
                  label="Phones"
                  value={
                    <div className="space-y-2">
                      <a
                        className="block hover:text-sky-400 transition"
                        href="tel:+18036790904"
                      >
                        +1 (803) 679-0904
                      </a>
                      <a
                        className="block hover:text-sky-400 transition"
                        href="tel:+18033410956"
                      >
                        +1 (803) 341-0956
                      </a>
                    </div>
                  }
                  hint="Call or text anytime"
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  }
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}