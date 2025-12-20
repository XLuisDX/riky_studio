import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Container } from "./Container";

type Tile = {
  title: string;
  subtitle: string;
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
  hidden: { opacity: 0, y: 18, scale: 0.99 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: easeOut },
  },
};

function TileCard({
  tile,
  size = "small",
}: {
  tile: Tile;
  size?: "big" | "small";
}) {
  const isBig = size === "big";

  return (
    <motion.a
      href="#portfolio"
      variants={cardIn}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.25, ease: easeOut }}
      className={[
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft",
        isBig ? "md:col-span-7" : "",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />

      <div className="relative aspect-[16/10] overflow-hidden">
        {tile.img ? (
          <motion.img
            src={tile.img}
            alt={tile.title}
            className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
            initial={{ scale: 1.02 }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.7, ease: easeOut }}
            draggable={false}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0" />
        )}

        <motion.div
          aria-hidden
          className="absolute inset-0"
          initial={{ opacity: 0.85 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: easeOut }}
          style={{
            background:
              "linear-gradient(to top, rgba(0,18,43,0.86) 0%, rgba(0,18,43,0.30) 55%, rgba(0,18,43,0) 100%)",
          }}
        />

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0.35 }}
          whileHover={{ opacity: 0.5 }}
          transition={{ duration: 0.35, ease: easeOut }}
          style={{
            background:
              "radial-gradient(260px 180px at 20% 20%, rgba(34,181,255,0.22), transparent 60%), radial-gradient(320px 220px at 80% 80%, rgba(21,93,181,0.18), transparent 60%)",
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          {isBig && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70"
            >
              FEATURE
            </motion.div>
          )}

          <h3
            className={
              isBig
                ? "mt-3 text-xl font-semibold text-white"
                : "text-lg font-semibold text-white"
            }
          >
            {tile.title}
          </h3>

          <p className="mt-1 text-sm text-white/70">{tile.subtitle}</p>

          <motion.div
            aria-hidden
            className="mt-4 h-px w-0 bg-gradient-to-r from-transparent via-sky/70 to-transparent"
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.35, ease: easeOut }}
          />
        </div>
      </div>
    </motion.a>
  );
}

export function ImageGrid() {
  const tiles: Tile[] = [
    {
      title: "Ad Video Production",
      subtitle: "Short-form ads built to convert",
      img: "/img1.png",
    },
    {
      title: "Food & Commercial Photography",
      subtitle: "Clean, amazing product shots",
      img: "/img1.png",
    },
    {
      title: "Digital Signage Installations",
      subtitle: "Screens + media players, ready to run",
      img: "/img1.png",
    },
  ];

  return (
    <section className="relative py-14 md:py-18">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-220px] top-12 h-[520px] w-[520px] rounded-full bg-tech/10 blur-3xl" />
        <div className="absolute right-[-220px] bottom-0 h-[520px] w-[520px] rounded-full bg-sky/10 blur-3xl" />
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
            className="mb-8 flex items-end justify-between gap-6"
          >
            <div>
              <p className="text-xs tracking-[0.22em] text-white/60">
                FEATURED WORK
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                Visuals designed to stand out.
              </h2>
            </div>

            <motion.a
              href="#portfolio"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="hidden rounded-2xl border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/8 md:inline-flex"
            >
              View Portfolio
            </motion.a>
          </motion.div>

          <motion.div variants={stagger} className="grid gap-4 md:grid-cols-12">
            <TileCard tile={tiles[0]} size="big" />

            <div className="grid gap-4 md:col-span-5">
              <TileCard tile={tiles[1]} />
              <TileCard tile={tiles[2]} />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 md:hidden">
            <motion.a
              href="#portfolio"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/8"
            >
              View Portfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
