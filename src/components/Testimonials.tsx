import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Container component
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
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

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          className={i < rating ? "text-sky-400" : "text-white/20"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.3 }}
        >
          <path
            d="M12 17.27l5.18 3.03-1.64-5.81L20 9.24l-5.9-.5L12 3.5 9.9 8.74 4 9.24l4.46 5.25-1.64 5.81L12 17.27z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </motion.svg>
      ))}
    </div>
  );
}

// Quote Icon
function QuoteIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-sky-400/20"
    >
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  );
}

export default function Testimonials() {
  const items: Testimonial[] = useMemo(
    () => [
      {
        name: "Sarah M.",
        role: "Restaurant Owner",
        quote:
          "The videos look premium and the turnaround was fast. Our promos finally feel consistent across Instagram and in-store.",
        rating: 5,
      },
      {
        name: "Carlos R.",
        role: "Local Business",
        quote:
          "They installed our screen and set up the media player so it just works. Clean cables, clean look, no headaches.",
        rating: 5,
      },
      {
        name: "Amanda L.",
        role: "Cafe Manager",
        quote:
          "The food photos are insanely good—our menu looks elevated. We also got templates for weekly specials that save us time.",
        rating: 5,
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  useEffect(() => {
    const id = window.setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % items.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [items.length]);

  function prev() {
    setDir(-1);
    setIndex((i) => (i - 1 + items.length) % items.length);
  }

  function next() {
    setDir(1);
    setIndex((i) => (i + 1) % items.length);
  }

  const active = items[index];

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Refined gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-300px] top-[-100px] h-[700px] w-[700px] rounded-full bg-sky-400/8 blur-[120px]" />
        <div className="absolute right-[-300px] bottom-[-150px] h-[700px] w-[700px] rounded-full bg-blue-600/6 blur-[120px]" />

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
                Testimonials
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Trusted by businesses that want a{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  premium look
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
              A few words from clients who needed better visuals and reliable
              screen setups.
            </p>

            {/* Navigation Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex justify-center gap-3"
            >
              <motion.button
                type="button"
                onClick={prev}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-white hover:border-white/20 hover:bg-white/10 transition-all"
                aria-label="Previous testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </motion.button>
              <motion.button
                type="button"
                onClick={next}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-white hover:border-white/20 hover:bg-white/10 transition-all"
                aria-label="Next testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl"
          >
            {/* Top accent line */}
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

            {/* Hover gradient overlay */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-50 group-hover:opacity-70"
              transition={{ duration: 0.4, ease: easeOut }}
              style={{
                background:
                  "radial-gradient(450px 350px at 25% 25%, rgba(56,189,248,0.12), transparent 70%), radial-gradient(550px 400px at 80% 80%, rgba(37,99,235,0.1), transparent 70%)",
              }}
            />

            <div className="relative min-h-[400px] p-10 md:p-14">
              {/* Quote Icon Background */}
              <div className="absolute top-8 right-8 opacity-50">
                <QuoteIcon />
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, x: 40 * dir, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -40 * dir, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: easeOut }}
                  className="relative z-10"
                >
                  <StarRow rating={active.rating} />

                  <p className="mt-8 text-2xl leading-relaxed text-white md:text-3xl font-light">
                    "{active.quote}"
                  </p>

                  <div className="mt-10 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" />

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/10 bg-gradient-to-br from-sky-400/20 to-blue-600/20 text-xl font-bold text-white backdrop-blur-sm">
                        {active.name[0]}
                      </div>

                      <div>
                        <div className="text-lg font-semibold text-white">
                          {active.name}
                        </div>
                        <div className="text-sm text-white/60">
                          {active.role}
                        </div>
                      </div>
                    </div>

                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: easeOut }}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-4 py-2"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-sky-400"
                      >
                        <path
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-xs font-medium tracking-wider text-white/80 uppercase">
                        Verified
                      </span>
                    </motion.span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-2">
              {items.map((_, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={[
                    "rounded-full transition-all duration-300",
                    i === index
                      ? "h-2.5 w-8 bg-gradient-to-r from-sky-400 to-blue-500"
                      : "h-2.5 w-2.5 bg-white/25 hover:bg-white/40",
                  ].join(" ")}
                />
              ))}
            </div>

            {/* Floating glow accent */}
            <motion.div
              className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-sky-400/15 blur-3xl"
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
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
