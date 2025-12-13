import { Container } from "./Container"
import { motion } from "framer-motion";
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

const cardIn: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

function MiniStat({
  title,
  subtitle,
  delay = 0,
}: {
  title: string;
  subtitle: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.55, delay, ease: easeOut }}
      whileHover={{ y: -2 }}
      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
    >
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="text-xs text-white/60">{subtitle}</div>
    </motion.div>
  );
}

export function WorkshopBanner() {
  return (
    <section id="workshop" className="relative py-14 md:py-18">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-260px] top-[-100px] h-[640px] w-[640px] rounded-full bg-tech/10 blur-3xl" />
        <div className="absolute right-[-260px] bottom-[-140px] h-[640px] w-[640px] rounded-full bg-sky/10 blur-3xl" />
      </div>

      <Container>
        <motion.div
          variants={cardIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />

          <div className="absolute inset-0">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              animate={{ x: [0, 10, 0], y: [0, -6, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(420px 280px at 18% 20%, rgba(34,181,255,0.16), transparent 65%), radial-gradient(520px 320px at 88% 85%, rgba(21,93,181,0.14), transparent 65%)",
              }}
            />

            <img
              src="/images/workshop.jpg"
              alt="Video editing workshop"
              className="h-full w-full object-cover opacity-25"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-prussian via-prussian/85 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-prussian/35" />
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="relative grid gap-8 p-8 md:grid-cols-12 md:p-10"
          >
            <div className="md:col-span-7">
              <motion.p
                variants={fadeUp}
                className="text-xs tracking-[0.22em] text-white/60"
              >
                WORKSHOP
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-2 text-2xl font-semibold text-white md:text-3xl"
              >
                Video Editing Basics — from zero to confident.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-3 max-w-xl text-sm leading-relaxed text-white/70"
              >
                Learn a clean, beginner-friendly workflow: editing fundamentals,
                pacing, captions, exports, and how to create ads that look
                premium for social media.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-6 grid gap-3 sm:grid-cols-3"
              >
                <MiniStat
                  title="Beginner"
                  subtitle="No experience needed"
                  delay={0.05}
                />
                <MiniStat
                  title="Practical"
                  subtitle="Hands-on exercises"
                  delay={0.1}
                />
                <MiniStat
                  title="Fast wins"
                  subtitle="Templates + tips"
                  delay={0.15}
                />
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="md:col-span-5 md:flex md:items-center md:justify-end"
            >
              <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto md:flex-col">
                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="rounded-2xl bg-sky px-6 py-3 text-center text-sm font-semibold text-prussian hover:brightness-110 transition"
                >
                  Reserve a Spot
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/8 transition"
                >
                  Ask for Details
                </motion.a>

                <p className="text-center text-xs text-white/50 md:text-left">
                  Add dates & pricing when ready.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-sky/18 blur-3xl" />
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-tech/14 blur-3xl" />
        </motion.div>
      </Container>
    </section>
  );
}
