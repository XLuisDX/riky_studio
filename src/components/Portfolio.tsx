import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

type Project = {
  title: string;
  category: "Video Ads" | "Food Photo" | "Digital Signage" | "Screen Content";
  tag: string;
  img: string;
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

const cardIn: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3 },
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
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: easeOut }}
      className={[
        "relative rounded-full border px-5 py-2.5 text-sm font-semibold transition-all",
        active
          ? "border-sky-400/40 bg-sky-400/15 text-white shadow-lg shadow-sky-400/20"
          : "border-white/10 bg-white/5 backdrop-blur-sm text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20",
      ].join(" ")}
      type="button"
    >
      {children}

      <motion.span
        aria-hidden
        className="pointer-events-none absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-sky-400 to-transparent"
        initial={false}
        animate={{ width: active ? "80%" : "0%" }}
        transition={{ duration: 0.3, ease: easeOut }}
      />
    </motion.button>
  );
}

export default function Portfolio() {
  const projects: Project[] = useMemo(
    () => [
      {
        title: "Restaurant Promo Reel",
        category: "Video Ads",
        tag: "Short-form",
        img: "/service1.jpg",
      },
      {
        title: "Signature Dish Set",
        category: "Food Photo",
        tag: "Menu-ready",
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
      },
      {
        title: "Lobby Screen Setup",
        category: "Digital Signage",
        tag: "Installation",
        img: "/service3.jpg",
      },
      {
        title: "Weekly Specials Pack",
        category: "Screen Content",
        tag: "Templates",
        img: "/service4.jpg",
      },
      {
        title: "Product Ad Cutdown",
        category: "Video Ads",
        tag: "15s / 30s",
        img: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop",
      },
      {
        title: "Dessert Spotlight",
        category: "Food Photo",
        tag: "Lighting",
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop",
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
    <section id="portfolio" className="relative py-20 md:py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-300px] top-[100px] h-[600px] w-[600px] rounded-full bg-sky-400/8 blur-[120px]" />
        <div className="absolute left-[-300px] bottom-[-150px] h-[700px] w-[700px] rounded-full bg-blue-600/6 blur-[120px]" />

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
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[10px] font-medium tracking-[0.2em] text-white/70 uppercase">
                Portfolio
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              A few recent{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  highlights
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
              Clean visuals, strong messaging, and content built to look premium
              on every screen.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mb-10 flex flex-wrap justify-center gap-3"
          >
            {filters.map((f) => (
              <Chip key={f} active={active === f} onClick={() => setActive(f)}>
                {f}
              </Chip>
            ))}
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.a
                  key={`${p.title}-${p.category}`}
                  href="#contact"
                  aria-label={`Project: ${p.title}`}
                  variants={cardIn}
                  layout
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: easeOut }}
                    className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl"
                  >
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

                    <div className="relative aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={p.img}
                        alt={p.title}
                        className="h-full w-full object-cover"
                        initial={{ scale: 1.05 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7, ease: easeOut }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

                      <motion.div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-50"
                        transition={{ duration: 0.4, ease: easeOut }}
                        style={{
                          background:
                            "radial-gradient(300px 250px at 30% 30%, rgba(56,189,248,0.15), transparent 65%), radial-gradient(400px 300px at 75% 75%, rgba(37,99,235,0.12), transparent 65%)",
                        }}
                      />
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-3 py-1">
                          <div className="h-1 w-1 rounded-full bg-sky-400" />
                          <span className="text-[10px] font-medium tracking-wider text-white/80 uppercase">
                            {p.category}
                          </span>
                        </span>
                        <span className="inline-flex rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1 text-xs text-white/70">
                          {p.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-2">
                        {p.title}
                      </h3>

                      <motion.div
                        className="flex items-center gap-2 text-sm text-white/60 group-hover:text-sky-400 transition-colors"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span>View project</span>
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
                      </motion.div>
                    </div>

                    <motion.div
                      aria-hidden
                      className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-0 rounded-full bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.4, ease: easeOut }}
                    />

                    <motion.div
                      className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-sky-400/15 blur-2xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 text-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-2xl bg-sky-400 px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/25"
            >
              <span className="relative z-10">Start Your Project</span>
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
        </motion.div>
      </Container>
    </section>
  );
}