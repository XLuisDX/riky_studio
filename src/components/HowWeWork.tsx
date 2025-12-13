import { Container } from "./Container"
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
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
    <motion.div
      variants={cardIn}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: easeOut }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft"
    >
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.25, ease: easeOut }}
        style={{
          background:
            "radial-gradient(280px 190px at 20% 20%, rgba(34,181,255,0.16), transparent 60%), radial-gradient(360px 240px at 85% 85%, rgba(21,93,181,0.14), transparent 60%)",
        }}
      />

      <div className="relative flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.2, ease: easeOut }}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-sky"
        >
          {n}
        </motion.div>

        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function HowWeWork() {
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
    <section id="how-we-work" className="relative py-14 md:py-18">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-260px] top-[-80px] h-[620px] w-[620px] rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute right-[-260px] bottom-[-120px] h-[640px] w-[640px] rounded-full bg-tech/10 blur-3xl" />
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
                HOW WE WORK
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                A simple process. Premium results.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                Everything is designed to be fast, clear, and dependable—from
                first message to final delivery and installation.
              </p>
            </div>

            <div className="md:col-span-5 md:flex md:justify-end">
              <motion.a
                href="tel:+18036790904"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/8 transition md:w-auto"
              >
                Book a Call
              </motion.a>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scaleY: 0.9 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="pointer-events-none absolute left-1/2 top-6 hidden h-[calc(100%-48px)] w-px -translate-x-1/2 bg-white/10 md:block"
            />

            <motion.div
              variants={stagger}
              className="grid gap-4 md:grid-cols-2"
            >
              {steps.map((s, idx) => (
                <motion.div
                  key={s.n}
                  variants={fadeUp}
                  className={
                    "relative " + (idx % 2 === 0 ? "md:pr-8" : "md:pl-8")
                  }
                >
                  <motion.div
                    aria-hidden
                    className={
                      "pointer-events-none absolute top-8 hidden h-3 w-3 rounded-full border border-white/20 bg-sky/80 md:block " +
                      (idx % 2 === 0 ? "right-[-6px]" : "left-[-6px]")
                    }
                    initial={{ opacity: 0.7, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease: easeOut }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(34,181,255,0.0)",
                        "0 0 0 10px rgba(34,181,255,0.0)",
                      ],
                    }}
                  />

                  <StepCard n={s.n} title={s.title} desc={s.desc} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
