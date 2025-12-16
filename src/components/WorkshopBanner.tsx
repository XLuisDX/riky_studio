import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Container component
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
    transition: { duration: 0.8, ease: easeOut },
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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/10 via-transparent to-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm px-5 py-4 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/5">
        <div className="text-lg font-semibold text-white tracking-tight">
          {title}
        </div>
        <div className="mt-1 text-xs text-white/50 uppercase tracking-wider">
          {subtitle}
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkshopBanner() {
  return (
    <section id="workshop" className="relative py-20 md:py-28 overflow-hidden">
      {/* Refined gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-300px] top-[-100px] h-[700px] w-[700px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute right-[-300px] bottom-[-150px] h-[700px] w-[700px] rounded-full bg-sky-400/8 blur-[120px]" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
      </div>

      <Container>
        <motion.div
          variants={cardIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl"
        >
          {/* Top accent line */}
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

          {/* Background Image & Overlays */}
          <div className="absolute inset-0">
            {/* Animated gradient overlay */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50"
              animate={{
                x: [0, 20, 0],
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background:
                  "radial-gradient(450px 350px at 20% 25%, rgba(56,189,248,0.15), transparent 70%), radial-gradient(550px 400px at 85% 80%, rgba(37,99,235,0.12), transparent 70%)",
              }}
            />

            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=600&fit=crop"
              alt="Video editing workshop"
              className="h-full w-full object-cover opacity-20"
            />

            {/* Sophisticated overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50" />
          </div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative grid gap-10 p-10 md:grid-cols-12 md:p-14 lg:gap-16"
          >
            {/* Left Content */}
            <div className="md:col-span-7">
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-4 py-1.5"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span className="text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase">
                  Workshop
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl"
              >
                Video Editing Basics — from{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    zero to confident
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
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
              >
                Learn a clean, beginner-friendly workflow: editing fundamentals,
                pacing, captions, exports, and how to create ads that look
                premium for social media.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 grid gap-4 sm:grid-cols-3"
              >
                <MiniStat
                  title="Beginner"
                  subtitle="No experience"
                  delay={0.1}
                />
                <MiniStat title="Practical" subtitle="Hands-on" delay={0.15} />
                <MiniStat title="Fast wins" subtitle="Templates" delay={0.2} />
              </motion.div>
            </div>

            {/* Right CTA */}
            <motion.div
              variants={fadeUp}
              className="md:col-span-5 flex items-center"
            >
              <div className="flex w-full flex-col gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="group/btn relative overflow-hidden rounded-2xl bg-sky-400 px-8 py-5 text-center text-base font-semibold text-slate-950 shadow-lg shadow-sky-400/30"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Reserve a Spot
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
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-400"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-5 text-center text-base font-semibold text-white hover:border-white/20 hover:bg-white/10 transition-all"
                >
                  Ask for Details
                </motion.a>

                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                  <p className="text-sm text-white/60 text-center">
                    💡 Add dates & pricing when ready
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating glow accents */}
          <motion.div
            className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Bottom accent line */}
          <motion.div
            aria-hidden
            className="absolute bottom-0 left-0 right-0 mx-auto h-px w-0 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: easeOut, delay: 0.5 }}
          />
        </motion.div>
      </Container>
    </section>
  );
}
