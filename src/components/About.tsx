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
      initial={{ opacity: 0, y: 10, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay, ease: easeOut }}
      whileHover={{ y: -2 }}
      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
    >
      <div className="text-lg font-semibold text-white">{value}</div>
      <div className="text-xs tracking-wide text-white/60">{label}</div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-14 md:py-18 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[40px] h-[560px] w-[560px] rounded-full bg-sky/10 blur-3xl md:left-[-260px]" />
        <div className="absolute right-[-120px] top-[-80px] h-[620px] w-[620px] rounded-full bg-tech/10 blur-3xl md:right-[-260px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-prussian/25" />
      </div>

      <Container>
        <div className="grid items-center gap-8 md:grid-cols-12">
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: easeOut }}
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft"
            >
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />

              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src="/home.png"
                  alt="Riky Studio behind the scenes"
                  className="h-full w-full object-cover opacity-90"
                  initial={{ scale: 1.03, y: 10 }}
                  whileInView={{ y: 0 }}
                  whileHover={{ scale: 1.06 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.85, ease: easeOut }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0" />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-prussian/75 via-prussian/15 to-transparent" />

                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-40 group-hover:opacity-55"
                  transition={{ duration: 0.25, ease: easeOut }}
                  style={{
                    background:
                      "radial-gradient(280px 200px at 25% 20%, rgba(34,181,255,0.18), transparent 60%), radial-gradient(360px 240px at 85% 85%, rgba(21,93,181,0.14), transparent 60%)",
                  }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70">
                    ABOUT
                  </div>
                  <div className="mt-3 text-sm text-white/70">
                    Clean visuals + reliable screens for modern advertising.
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-14 -left-14 h-44 w-44 rounded-full bg-sky/18 blur-3xl" />
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs tracking-[0.22em] text-white/60"
            >
              WHO WE ARE
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-2 text-2xl font-semibold text-white md:text-3xl"
            >
              A studio built for restaurants and local businesses.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm leading-relaxed text-white/70"
            >
              Riky Studio helps you promote smarter—online and in-store. We
              produce video ads, commercial photography, and build digital
              signage systems that are simple to run and designed to look
              premium.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm leading-relaxed text-white/70"
            >
              Our approach is minimal and modern: clear storytelling, clean
              design, and a consistent brand look across every screen.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3"
            >
              <Stat value="48–72h" label="Typical turnaround" delay={0.05} />
              <Stat value="4K" label="Export ready" delay={0.1} />
              <Stat
                value="End-to-end"
                label="Production → install"
                delay={0.15}
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
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
                href="#portfolio"
                className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/8 transition"
              >
                See Our Work
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
