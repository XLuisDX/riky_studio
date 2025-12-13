import { useEffect, useMemo, useState } from "react"
import { Container } from "./Container"
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          className={i < rating ? "text-sky" : "text-white/20"}
        >
          <path
            d="M12 17.27l5.18 3.03-1.64-5.81L20 9.24l-5.9-.5L12 3.5 9.9 8.74 4 9.24l4.46 5.25-1.64 5.81L12 17.27z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
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
    }, 6500);
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
    <section id="testimonials" className="relative py-14 md:py-18">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-260px] top-[-80px] h-[620px] w-[620px] rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute right-[-260px] bottom-[-140px] h-[620px] w-[620px] rounded-full bg-tech/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-prussian/25" />
      </div>

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Header */}
          <motion.div
            variants={fadeUp}
            className="mb-8 grid gap-4 md:grid-cols-12 md:items-end"
          >
            <div className="md:col-span-7">
              <p className="text-xs tracking-[0.22em] text-white/60">
                TESTIMONIALS
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                Trusted by businesses that want a premium look.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                A few words from clients who needed better visuals and reliable
                screen setups.
              </p>
            </div>

            <div className="md:col-span-5 md:flex md:justify-end">
              <motion.div
                variants={fadeUp}
                className="flex w-full gap-3 md:w-auto"
              >
                <motion.button
                  type="button"
                  onClick={prev}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="w-1/2 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/8 transition md:w-auto"
                  aria-label="Previous testimonial"
                >
                  ←
                </motion.button>
                <motion.button
                  type="button"
                  onClick={next}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                  className="w-1/2 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/8 transition md:w-auto"
                  aria-label="Next testimonial"
                >
                  →
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft"
          >
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(420px 260px at 20% 20%, rgba(34,181,255,0.14), transparent 60%), radial-gradient(520px 320px at 85% 85%, rgba(21,93,181,0.12), transparent 60%)",
              }}
            />

            <div className="relative min-h-[280px] p-7 md:p-10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, x: 28 * dir, filter: "blur(2px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -28 * dir, filter: "blur(2px)" }}
                  transition={{ duration: 0.45, ease: easeOut }}
                >
                  <StarRow rating={active.rating} />

                  <p className="mt-5 text-lg leading-relaxed text-white md:text-xl">
                    “{active.quote}”
                  </p>

                  <div className="mt-6 h-px bg-white/10" />

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {active.name}
                      </div>
                      <div className="text-xs tracking-wide text-white/60">
                        {active.role}
                      </div>
                    </div>

                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: easeOut }}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70"
                    >
                      VERIFIED
                    </motion.span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2">
              {items.map((_, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  whileTap={{ scale: 0.98 }}
                  className={[
                    "h-2.5 rounded-full transition",
                    i === index
                      ? "w-7 bg-sky"
                      : "w-2.5 bg-white/25 hover:bg-white/40",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-sky/18 blur-3xl" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
