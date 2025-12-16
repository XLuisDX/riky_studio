import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Container component
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

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
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

const cardIn: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className="text-sky-400"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Pricing() {
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
    <section id="pricing" className="relative py-20 md:py-28 overflow-hidden">
      {/* Refined gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-300px] top-[-100px] h-[700px] w-[700px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute right-[-300px] bottom-[-150px] h-[700px] w-[700px] rounded-full bg-sky-400/8 blur-[120px]" />

        {/* Subtle grid overlay */}
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
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[10px] font-medium tracking-[0.2em] text-white/70 uppercase">
                Pricing
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Simple packages.{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Flexible scope
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
              Every project is a little different. These packages are starting
              points—final pricing depends on assets, shoot needs, and
              deliverables.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="group relative overflow-hidden rounded-2xl bg-sky-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/25"
              >
                <span className="relative z-10">Get a Quote</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="tel:+18036790904"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/10 transition-all"
              >
                Book a Call
              </motion.a>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div variants={stagger} className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={cardIn}
                className="group relative"
              >
                <motion.div
                  whileHover={{
                    y: plan.featured ? -10 : -8,
                    scale: plan.featured ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className={[
                    "relative h-full overflow-hidden rounded-3xl border backdrop-blur-sm p-8 shadow-2xl",
                    plan.featured
                      ? "border-sky-400/40 bg-white/8"
                      : "border-white/10 bg-white/5",
                  ].join(" ")}
                >
                  {/* Top accent line */}
                  <div
                    className={[
                      "pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
                      plan.featured ? "via-sky-400/60" : "via-sky-400/40",
                    ].join(" ")}
                  />

                  {/* Hover gradient overlay */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4, ease: easeOut }}
                    style={{
                      background: plan.featured
                        ? "radial-gradient(350px 280px at 30% 30%, rgba(56,189,248,0.15), transparent 70%), radial-gradient(400px 320px at 75% 75%, rgba(37,99,235,0.12), transparent 70%)"
                        : "radial-gradient(300px 250px at 30% 30%, rgba(56,189,248,0.1), transparent 70%), radial-gradient(350px 280px at 75% 75%, rgba(37,99,235,0.08), transparent 70%)",
                    }}
                  />

                  {/* Featured Badge */}
                  {plan.featured && (
                    <motion.div
                      className="absolute -right-12 top-8 rotate-12"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: easeOut }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -4, 0],
                          rotate: [12, 15, 12],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-6 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-sky-400/50"
                      >
                        POPULAR
                      </motion.div>
                    </motion.div>
                  )}

                  <div className="relative">
                    {/* Plan Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {plan.name}
                        </h3>
                        <p className="mt-2 text-sm text-white/60">
                          {plan.note}
                        </p>
                      </div>

                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">
                          {plan.price.split(" ")[1]}
                        </div>
                        <div className="text-xs text-sky-400 font-medium uppercase tracking-wider">
                          {plan.price.split(" ")[0]}
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mt-6 h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />

                    {/* Features List */}
                    <motion.ul variants={stagger} className="mt-6 space-y-4">
                      {plan.bullets.map((bullet, i) => (
                        <motion.li
                          key={bullet}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="flex items-start gap-3 text-base text-white/80"
                        >
                          <span className="mt-0.5 flex-shrink-0">
                            <CheckIcon />
                          </span>
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col gap-3">
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2, ease: easeOut }}
                        className={[
                          "rounded-2xl px-6 py-4 text-center text-sm font-semibold transition-all shadow-lg",
                          plan.featured
                            ? "bg-sky-400 text-slate-950 shadow-sky-400/30 hover:shadow-sky-400/50"
                            : "border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 shadow-black/10",
                        ].join(" ")}
                      >
                        Choose {plan.name}
                      </motion.a>

                      <motion.a
                        href="#contact"
                        className="flex items-center justify-center gap-2 text-center text-sm font-semibold text-white/70 hover:text-sky-400 transition-colors"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>Custom package</span>
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
                      </motion.a>
                    </div>
                  </div>

                  {/* Bottom glow accent */}
                  {plan.featured && (
                    <motion.div
                      className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl"
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Note */}
          <motion.div variants={fadeUp} className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-3">
              <span className="text-2xl">💡</span>
              <span className="text-sm text-white/70">
                Prices shown are starting points. We'll confirm scope and
                timeline after a quick call.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
