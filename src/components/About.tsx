import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Container component
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
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
        <div className="text-xl font-semibold text-white tracking-tight">{value}</div>
        <div className="mt-1 text-xs text-white/50 uppercase tracking-wider">{label}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      {/* Refined gradient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-200px] top-[100px] h-[600px] w-[600px] rounded-full bg-sky-400/8 blur-[120px] md:left-[-300px]" />
        <div className="absolute right-[-200px] top-[-100px] h-[700px] w-[700px] rounded-full bg-blue-600/6 blur-[120px] md:right-[-300px]" />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/30" />
      </div>

      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl"
            >
              {/* Top accent line */}
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop"
                  alt="Riky Studio behind the scenes"
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.08 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: easeOut }}
                />

                {/* Sophisticated overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent" />
                
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent" />

                {/* Animated gradient overlay on hover */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-40"
                  transition={{ duration: 0.4, ease: easeOut }}
                  style={{
                    background:
                      "radial-gradient(300px 250px at 30% 30%, rgba(56,189,248,0.15), transparent 65%), radial-gradient(400px 300px at 80% 80%, rgba(37,99,235,0.12), transparent 65%)",
                  }}
                />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-4 py-1.5"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <span className="text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase">
                      About Us
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-3 text-base text-white/80 font-light"
                  >
                    Clean visuals + reliable screens for modern advertising.
                  </motion.div>
                </div>
              </div>

              {/* Floating glow accent */}
              <motion.div
                className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sky-400/15 blur-3xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span className="text-[10px] font-medium tracking-[0.2em] text-white/70 uppercase">
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl"
            >
              A studio built for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  restaurants
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
              </span>{" "}
              and local businesses.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-white/60"
            >
              Riky Studio helps you promote smarter—online and in-store. We
              produce video ads, commercial photography, and build digital
              signage systems that are simple to run and designed to look
              premium.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed text-white/60"
            >
              Our approach is minimal and modern: clear storytelling, clean
              design, and a consistent brand look across every screen.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              <Stat value="48–72h" label="Turnaround" delay={0.1} />
              <Stat value="4K" label="Ready" delay={0.15} />
              <Stat value="Full" label="Service" delay={0.2} />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4"
            >
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
                href="#portfolio"
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/10 transition-all"
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