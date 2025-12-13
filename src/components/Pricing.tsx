import { Container } from "./Container"
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Plan = {
  name: string;
  price: string;
  note: string;
  featured?: boolean;
  bullets: string[];
};

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: easeOut },
  },
};

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-sky"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Pricing() {
  const plans: Plan[] = [
    {
      name: "Starter",
      price: "From $299",
      note: "Best for one-off promos",
      bullets: [
        "1 short ad edit (15–30s)",
        "Format for Instagram / TikTok / Reels",
        "Basic captions + cleanup",
        "48–72h delivery",
      ],
    },
    {
      name: "Growth",
      price: "From $699",
      note: "Most popular for restaurants",
      featured: true,
      bullets: [
        "2–3 video ads (15–30s)",
        "Photo session (menu-ready selects)",
        "Brand-consistent titles & motion",
        "Delivery in all needed formats",
      ],
    },
    {
      name: "Premium",
      price: "From $1,499",
      note: "End-to-end signage + content",
      bullets: [
        "Video ads + commercial photography",
        "Digital signage screen installation",
        "Media player setup + auto-run content",
        "Screen content design templates",
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-14 md:py-18">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-260px] top-[-80px] h-[620px] w-[620px] rounded-full bg-tech/10 blur-3xl" />
        <div className="absolute right-[-260px] bottom-[-120px] h-[620px] w-[620px] rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-prussian/25" />
      </div>

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-8 grid gap-4 md:grid-cols-12 md:items-end"
          >
            <div className="md:col-span-7">
              <p className="text-xs tracking-[0.22em] text-white/60">PRICING</p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                Simple packages. Flexible scope.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                Every project is a little different. These packages are starting
                points—final pricing depends on assets, shoot needs, number of
                deliverables, and installation requirements.
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

          <motion.div variants={stagger} className="grid gap-4 lg:grid-cols-3">
            {plans.map((p, idx) => (
              <motion.div
                key={p.name}
                variants={cardIn}
                whileHover={{ y: p.featured ? -8 : -6 }}
                transition={{ duration: 0.25, ease: easeOut }}
                className={[
                  "group relative overflow-hidden rounded-3xl border bg-white/5 p-6 shadow-soft",
                  p.featured ? "border-sky/30" : "border-white/10",
                ].join(" ")}
              >
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.25, ease: easeOut }}
                  style={{
                    background: p.featured
                      ? "radial-gradient(340px 240px at 25% 20%, rgba(34,181,255,0.18), transparent 60%), radial-gradient(380px 260px at 85% 85%, rgba(21,93,181,0.14), transparent 60%)"
                      : idx % 2 === 0
                      ? "radial-gradient(320px 220px at 20% 20%, rgba(21,93,181,0.16), transparent 60%), radial-gradient(360px 240px at 85% 85%, rgba(34,181,255,0.10), transparent 60%)"
                      : "radial-gradient(320px 220px at 25% 20%, rgba(34,181,255,0.14), transparent 60%), radial-gradient(360px 240px at 85% 85%, rgba(21,93,181,0.12), transparent 60%)",
                  }}
                />

                <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />

                {p.featured && (
                  <motion.div
                    className="absolute -right-16 top-6 rotate-12"
                    initial={{ opacity: 0, y: -6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: easeOut }}
                  >
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="rounded-full bg-sky px-5 py-2 text-xs font-semibold text-prussian shadow-soft"
                    >
                      Most Popular
                    </motion.div>
                  </motion.div>
                )}

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/60">{p.note}</p>
                  </div>

                  <div className="text-right">
                    <div className="text-xl font-semibold text-white">
                      {p.price}
                    </div>
                    <div className="text-xs text-white/50">starting</div>
                  </div>
                </div>

                <div className="mt-5 h-px bg-white/10" />

                <motion.ul
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  className="mt-5 space-y-3"
                >
                  {p.bullets.map((b) => (
                    <motion.li
                      key={b}
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.45, ease: easeOut },
                        },
                      }}
                      className="flex items-start gap-3 text-sm text-white/75"
                    >
                      <span className="mt-0.5">
                        <CheckIcon />
                      </span>
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="mt-6 flex flex-col gap-3">
                  <motion.a
                    href="#contact"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className={[
                      "rounded-2xl px-5 py-3 text-center text-sm font-semibold transition",
                      p.featured
                        ? "bg-sky text-prussian hover:brightness-110"
                        : "border border-white/12 bg-white/5 text-white/90 hover:bg-white/8",
                    ].join(" ")}
                  >
                    Choose {p.name}
                  </motion.a>

                  <a
                    href="#contact"
                    className="text-center text-sm font-semibold text-white/75 hover:text-white transition"
                  >
                    Ask for a custom package{" "}
                    <span className="text-sky/90 group-hover:text-sky transition">
                      →
                    </span>
                  </a>
                </div>

                {p.featured && (
                  <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-sky/18 blur-3xl" />
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 text-xs text-white/50">
            *Prices shown are starting points. We’ll confirm scope and timeline
            after a quick call.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
