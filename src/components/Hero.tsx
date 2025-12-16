import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Lottie from "lottie-react";

// Container component
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/10 via-transparent to-blue-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm px-5 py-4 transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/5">
        <div className="text-2xl font-semibold text-white tracking-tight">
          {value}
        </div>
        <div className="mt-1 text-xs text-white/50 uppercase tracking-wider">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

export default function Hero() {
  const [anim, setAnim] = useState<unknown | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/lottie/hero.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (mounted) setAnim(data);
      })
      .catch(() => setAnim(null));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Refined gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-sky-400/8 blur-[120px]" />
        <div className="absolute right-[-100px] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/6 blur-[100px]" />
        <div className="absolute left-[-100px] bottom-[20%] h-[500px] w-[500px] rounded-full bg-cyan-400/6 blur-[100px]" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/40" />
      </div>

      <Container>
        <div className="relative grid items-center gap-16 py-20 md:grid-cols-2 md:py-24 lg:gap-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[10px] font-medium tracking-[0.2em] text-white/70 uppercase">
                Riky Studio
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-8 text-5xl font-bold leading-[1.1] text-white md:text-6xl lg:text-7xl"
            >
              Ads that look{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  premium
                </span>
                <motion.span
                  className="absolute inset-0 bg-sky-400/20 blur-2xl"
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
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
            >
              High-impact video, photography, and digital signage for
              restaurants and local businesses. Clean, modern, effective.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easeOut }}
                href="#contact"
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
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easeOut }}
                href="tel:+18036790904"
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/10 transition-all"
              >
                Book a Call
              </motion.a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 grid grid-cols-3 gap-4"
            >
              <Stat value="48–72h" label="Turnaround" delay={0.1} />
              <Stat value="4K" label="Delivery" delay={0.15} />
              <Stat value="Full" label="Service" delay={0.2} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-[600px] mx-auto">
              {/* Animated glow rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-white/5"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-white/5"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Main content area */}
              <div className="relative z-10 h-full w-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-8">
                {anim ? (
                  <Lottie
                    animationData={anim}
                    loop
                    autoplay
                    className="h-full w-full"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto h-20 w-20 rounded-2xl border-2 border-dashed border-white/20 flex items-center justify-center">
                        <svg
                          className="h-10 w-10 text-white/40"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                          />
                        </svg>
                      </div>
                      <div className="mt-4 text-sm font-medium text-white/70">
                        Animated Showcase
                      </div>
                      <div className="mt-1 text-xs text-white/40">
                        /public/lottie/hero.json
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl"
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
