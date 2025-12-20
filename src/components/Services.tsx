import { motion } from "framer-motion";
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

const cardIn: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative text-sky-400">{children}</div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Ad Video Production",
      desc: "Short-form ads and promos optimized for social, web, and in-store screens.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3"
            y="7"
            width="12"
            height="10"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: "Commercial & Food Photography",
      desc: "Clean, premium shots that make your menu and products look irresistible.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 20H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l2-2h6l2 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: "Digital Signage Installation",
      desc: "Professional mounting, cable management, and clean placement for visibility.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="4"
            width="18"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 20h8M12 16v4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Media Player Setup",
      desc: "We configure players to auto-run content reliably—no tech headaches.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="6"
            width="16"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M11 10l4 2-4 2v-4Z" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Content Design for Screens",
      desc: "Layouts built for readability, brand consistency, and quick attention.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6h16M4 10h10M4 14h16M4 18h8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "End-to-End Solutions",
      desc: "Complete packages from concept to installation—one partner, zero stress.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7l10 5 10-5-10-5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-300px] top-[-100px] h-[600px] w-[600px] rounded-full bg-sky-400/8 blur-[120px]" />
        <div className="absolute right-[-300px] bottom-[-150px] h-[700px] w-[700px] rounded-full bg-blue-600/6 blur-[120px]" />

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
                Services
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Everything you need for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  modern advertising
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
              From production to installation, we deliver a polished system that
              looks premium and runs smoothly—online and in-store.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="group relative overflow-hidden inline-flex items-center gap-2 mt-8 rounded-2xl bg-sky-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/25"
            >
              <span className="relative z-10">Get a Quote</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-400"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={cardIn}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: easeOut }}
                  className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8"
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

                  <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4, ease: easeOut }}
                    style={{
                      background:
                        "radial-gradient(300px 250px at 30% 30%, rgba(56,189,248,0.12), transparent 70%), radial-gradient(350px 280px at 75% 75%, rgba(37,99,235,0.1), transparent 70%)",
                    }}
                  />

                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3, ease: easeOut }}
                    >
                      <Icon>{service.icon}</Icon>
                    </motion.div>

                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-base leading-relaxed text-white/60">
                      {service.desc}
                    </p>

                    <div className="mt-6 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

                    <motion.a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-sky-400 transition-colors"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      Request pricing
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

                  <motion.div
                    className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}