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

function StepCard({
  n,
  title,
  desc,
}: {
  n: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div variants={cardIn} className="group relative h-full">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: easeOut }}
        className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-2xl"
      >
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.4, ease: easeOut }}
          style={{
            background:
              "radial-gradient(300px 250px at 30% 30%, rgba(56,189,248,0.12), transparent 70%), radial-gradient(350px 280px at 75% 75%, rgba(37,99,235,0.1), transparent 70%)",
          }}
        />

        <div className="relative flex items-start gap-5">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-2xl font-bold text-sky-400">
              {n}
            </span>
          </motion.div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-3 text-base leading-relaxed text-white/60">
              {desc}
            </p>
          </div>
        </div>

        <motion.div
          className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HowWeWork() {
  const steps = [
    {
      n: "01",
      title: "Discover",
      desc: "We learn your goals, audience, brand style, and where your content will run (social, web, in-store screens).",
    },
    {
      n: "02",
      title: "Plan",
      desc: "We define the shot list, script, formats, and deliverables. You get clear timelines and a simple approval flow.",
    },
    {
      n: "03",
      title: "Produce",
      desc: "We capture or edit the assets, design screen-ready layouts, and deliver polished content in the right formats.",
    },
    {
      n: "04",
      title: "Launch",
      desc: "We install screens and media players (if needed), schedule your content, and ensure everything runs reliably.",
    },
  ];

  return (
    <section
      id="how-we-work"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-300px] top-[-100px] h-[700px] w-[700px] rounded-full bg-sky-400/8 blur-[120px]" />
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
                How We Work
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              A simple process.{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Great results
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
              Everything is designed to be fast, clear, and dependable—from
              first message to final delivery and installation.
            </p>

            <motion.a
              href="tel:+18036790904"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="group relative overflow-hidden inline-flex items-center gap-2 mt-8 rounded-2xl bg-sky-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/25"
            >
              <span className="relative z-10">Book a Call</span>
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

          <div className="relative">
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: easeOut }}
              className="pointer-events-none absolute left-1/2 top-8 hidden h-[calc(100%-64px)] w-px -translate-x-1/2 bg-gradient-to-b from-sky-400/40 via-blue-500/40 to-sky-400/40 md:block"
            />

            <motion.div
              variants={stagger}
              className="grid gap-8 md:grid-cols-2"
            >
              {steps.map((step, idx) => (
                <motion.div
                  key={step.n}
                  variants={fadeUp}
                  className={
                    "relative " + (idx % 2 === 0 ? "md:pr-10" : "md:pl-10")
                  }
                >
                  <motion.div
                    aria-hidden
                    className={
                      "pointer-events-none absolute top-10 z-10 hidden md:block " +
                      (idx % 2 === 0 ? "right-[-8px]" : "left-[-8px]")
                    }
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      delay: idx * 0.1,
                      duration: 0.5,
                      ease: easeOut,
                    }}
                  >
                    <div className="relative">
                      <motion.div
                        className="absolute inset-0 h-4 w-4 rounded-full bg-sky-400/30"
                        animate={{
                          scale: [1, 1.8, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: idx * 0.3,
                        }}
                      />
                      <div className="relative h-4 w-4 rounded-full border-2 border-white/20 bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg shadow-sky-400/50" />
                    </div>
                  </motion.div>

                  <StepCard n={step.n} title={step.title} desc={step.desc} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-4">
              <span className="text-sm text-white/70">
                Join{" "}
                <span className="font-semibold text-white">
                  50+ local businesses
                </span>{" "}
                working with us
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
