import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Container } from "./Container";

type Project = {
  title: string;
  category: "Video Ads" | "Food Photo" | "Digital Signage" | "Screen Content";
  tag: string;
  img?: string;
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

const cardIn: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: easeOut },
  },
};

function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      transition={{ duration: 0.18, ease: easeOut }}
      className={[
        "relative rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition",
        active
          ? "border-sky/40 bg-sky/15 text-white"
          : "border-white/10 bg-white/5 text-white/75 hover:bg-white/8 hover:text-white",
      ].join(" ")}
      type="button"
    >
      {children}

      <motion.span
        aria-hidden
        className="pointer-events-none absolute -bottom-1 left-1/2 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-sky/70 to-transparent"
        initial={false}
        animate={{ width: active ? "70%" : "0%" }}
        transition={{ duration: 0.25, ease: easeOut }}
      />
    </motion.button>
  );
}

export function Portfolio() {
  const projects: Project[] = useMemo(
    () => [
      {
        title: "Restaurant Promo Reel",
        category: "Video Ads",
        tag: "Short-form",
        img: "/images/portfolio-1.jpg",
      },
      {
        title: "Signature Dish Set",
        category: "Food Photo",
        tag: "Menu-ready",
        img: "/images/portfolio-2.jpg",
      },
      {
        title: "Lobby Screen Setup",
        category: "Digital Signage",
        tag: "Installation",
        img: "/images/portfolio-3.jpg",
      },
      {
        title: "Weekly Specials Pack",
        category: "Screen Content",
        tag: "Templates",
        img: "/images/portfolio-4.jpg",
      },
      {
        title: "Product Ad Cutdown",
        category: "Video Ads",
        tag: "15s / 30s",
        img: "/images/portfolio-5.jpg",
      },
      {
        title: "Dessert Spotlight",
        category: "Food Photo",
        tag: "Lighting",
        img: "/images/portfolio-6.jpg",
      },
    ],
    []
  );

  const filters = [
    "All",
    "Video Ads",
    "Food Photo",
    "Digital Signage",
    "Screen Content",
  ] as const;
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = projects.filter((p) =>
    active === "All" ? true : p.category === active
  );

  return (
    <section id="portfolio" className="relative py-14 md:py-18">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-260px] top-10 h-[560px] w-[560px] rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute left-[-260px] bottom-[-140px] h-[620px] w-[620px] rounded-full bg-tech/10 blur-3xl" />
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
            className="mb-7 grid gap-4 md:grid-cols-12 md:items-end"
          >
            <div className="md:col-span-7">
              <p className="text-xs tracking-[0.22em] text-white/60">
                PORTFOLIO
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                A few recent highlights.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
                Clean visuals, strong messaging, and content built to look
                premium on every screen.
              </p>
            </div>

            <div className="md:col-span-5 md:flex md:justify-end">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-sky px-5 py-3 text-sm font-semibold text-prussian hover:brightness-110 transition md:w-auto"
              >
                Get a Quote
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mb-6 flex flex-wrap gap-2">
            {filters.map((f) => (
              <Chip key={f} active={active === f} onClick={() => setActive(f)}>
                {f}
              </Chip>
            ))}
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.a
                  key={`${p.title}-${p.category}`}
                  href="#contact"
                  aria-label={`Project: ${p.title}`}
                  variants={cardIn}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: easeOut }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft"
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />

                  <div className="relative aspect-[4/3]">
                    {p.img ? (
                      <motion.img
                        src={p.img}
                        alt={p.title}
                        className="h-full w-full object-cover opacity-90"
                        initial={{ scale: 1.02 }}
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.7, ease: easeOut }}
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display =
                            "none";
                        }}
                      />
                    ) : null}

                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 to-white/0" />
                  </div>

                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-90 group-hover:opacity-100"
                    transition={{ duration: 0.3, ease: easeOut }}
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,18,43,0.88) 0%, rgba(0,18,43,0.28) 55%, rgba(0,18,43,0) 100%)",
                    }}
                  />

                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.35, ease: easeOut }}
                    style={{
                      background:
                        "radial-gradient(260px 180px at 20% 20%, rgba(34,181,255,0.18), transparent 60%), radial-gradient(340px 240px at 85% 85%, rgba(21,93,181,0.14), transparent 60%)",
                    }}
                  />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70">
                        {p.category}
                      </span>
                      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="mt-3 text-lg font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      Tap to discuss a similar project{" "}
                      <span className="text-sky/90 group-hover:text-sky transition">
                        →
                      </span>
                    </p>
                  </div>

                  <motion.div
                    aria-hidden
                    className="absolute bottom-0 left-0 right-0 mx-auto h-px w-0 bg-gradient-to-r from-transparent via-sky/60 to-transparent"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.35, ease: easeOut }}
                  />
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 text-xs text-white/50">
            Replace images by adding files in{" "}
            <span className="text-white/70">public/images/</span> named{" "}
            <span className="text-white/70">portfolio-1.jpg</span> …{" "}
            <span className="text-white/70">portfolio-6.jpg</span>.
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
