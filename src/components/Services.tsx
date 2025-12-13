import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Container } from "./Container";

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

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-70"
        style={{
          background:
            "radial-gradient(18px 18px at 30% 25%, rgba(34,181,255,0.18), transparent 70%), radial-gradient(22px 22px at 70% 75%, rgba(21,93,181,0.14), transparent 70%)",
        }}
      />
      <div className="relative text-sky">{children}</div>
    </div>
  );
}

export function Services() {
  const services = [
    {
      title: "Ad Video Production",
      desc: "Short-form ads and promos optimized for social, web, and in-store screens.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
      title: "Digital Signage Screen Installation",
      desc: "Professional mounting, cable management, and clean placement for visibility.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
      title: "Media Player Setup for Advertising",
      desc: "We configure players to auto-run content reliably—no tech headaches.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
      title: "Content Design for Digital Screens",
      desc: "Layouts built for readability, brand consistency, and quick attention.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6h16M4 10h10M4 14h16M4 18h8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative py-14 md:py-18">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-240px] top-[-60px] h-[520px] w-[520px] rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute right-[-260px] bottom-[-120px] h-[620px] w-[620px] rounded-full bg-tech/10 blur-3xl" />
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
              <p className="text-xs tracking-[0.22em] text-white/60">
                SERVICES
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                Everything you need for modern advertising.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                From production to installation, we deliver a polished system
                that looks premium and runs smoothly—online and in-store.
              </p>
            </div>

            <div className="md:col-span-5 md:flex md:justify-end">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/8 transition md:w-auto"
              >
                Get a Quote
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={cardIn}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft"
              >
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.25, ease: easeOut }}
                  style={{
                    background:
                      i % 3 === 0
                        ? "radial-gradient(260px 180px at 20% 15%, rgba(34,181,255,0.18), transparent 60%), radial-gradient(320px 220px at 85% 90%, rgba(21,93,181,0.14), transparent 60%)"
                        : i % 3 === 1
                        ? "radial-gradient(280px 200px at 30% 20%, rgba(21,93,181,0.18), transparent 60%), radial-gradient(320px 220px at 80% 85%, rgba(34,181,255,0.12), transparent 60%)"
                        : "radial-gradient(280px 200px at 40% 20%, rgba(34,181,255,0.14), transparent 60%), radial-gradient(320px 220px at 75% 85%, rgba(21,93,181,0.16), transparent 60%)",
                  }}
                />

                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.22, ease: easeOut }}
                  className="inline-block"
                >
                  <Icon>{s.icon}</Icon>
                </motion.div>

                <h3 className="mt-4 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {s.desc}
                </p>

                <div className="mt-5 h-px bg-white/10" />

                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition"
                >
                  Request pricing
                  <motion.span
                    className="text-sky"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                  >
                    →
                  </motion.span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
