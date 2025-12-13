import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Container } from "./Container";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

function Stat({
  value,
  label,
  delay = 0,
}: {
  value: string;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
      whileHover={{ y: -2 }}
      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
    >
      <div className="text-lg font-semibold text-white">{value}</div>
      <div className="text-xs tracking-wide text-white/60">{label}</div>
    </motion.div>
  );
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-160px] h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-sky/12 blur-3xl" />
        <div className="absolute right-[-220px] top-[40px] h-[520px] w-[680px] rounded-full bg-tech/14 blur-3xl" />
        <div className="absolute left-[-220px] top-[160px] h-[520px] w-[680px] rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-prussian/10 via-transparent to-prussian/35" />
      </div>

      <Container>
        <div className="relative grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70"
            >
              RIKY STUDIO • VIDEO EDITING & DIGITAL SIGNAGE
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl"
            >
              Ads that look premium.
              <span className="block text-sky">Content that sells.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 max-w-xl text-base leading-relaxed text-white/70"
            >
              We create high-impact promotional videos, commercial photography,
              and digital signage setups for restaurants and local
              businesses—built to look clean, modern, and effective.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easeOut }}
                href="#contact"
                className="rounded-2xl bg-sky px-6 py-3 text-center text-sm font-semibold text-prussian hover:brightness-110 transition"
              >
                Get a Quote
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easeOut }}
                href="tel:+18036790904"
                className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/8 transition"
              >
                Book a Call
              </motion.a>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Stat value="48–72h" label="Typical turnaround" delay={0.05} />
              <Stat value="4K" label="Delivery available" delay={0.1} />
              <Stat
                value="End-to-end"
                label="Video + photo + screens"
                delay={0.15}
              />
            </div>

            <motion.p variants={item} className="mt-5 text-xs text-white/50">
              Want the numbers to be real? We can replace these with your actual
              stats.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: easeOut }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-3 shadow-soft"
            >
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />

              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0">
                <div className="absolute inset-0 bg-gradient-to-t from-prussian/55 via-transparent to-transparent" />

                <div className="flex h-full items-center justify-center p-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: easeOut }}
                    className="rounded-2xl border border-white/10 bg-prussian/40 px-5 py-4 text-center"
                  >
                    <img
                      src="/home.png"
                      alt="Showreel Preview"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="mt-3 grid grid-cols-3 gap-2"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: easeOut },
                      },
                    }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="h-14 rounded-2xl border border-white/10 bg-white/5"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(135deg, rgba(34,181,255,0.10), rgba(255,255,255,0.02))"
                          : i === 1
                          ? "linear-gradient(135deg, rgba(21,93,181,0.12), rgba(255,255,255,0.02))"
                          : "linear-gradient(135deg, rgba(34,181,255,0.08), rgba(21,93,181,0.08))",
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-sky/18 blur-3xl" />
            <div className="pointer-events-none absolute -top-12 -right-10 h-44 w-44 rounded-full bg-tech/16 blur-3xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
