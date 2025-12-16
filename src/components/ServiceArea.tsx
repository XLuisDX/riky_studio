import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Container component
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

type AreaGroup = { state: string; cities: string[] };

type ServiceAreaProps = {
  kicker?: string;
  title?: string;
  subtitle?: string;
  areas?: AreaGroup[];
  body?: string;
  bullets?: string[];
  note?: string;
  mapTitle?: string;
  mapSubtitle?: string;
  mapSrc?: string;
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

// Map Pin Icon Component
function MapPinIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function ServiceArea({
  kicker = "WHERE WE WORK",
  title = "Serving Georgia & South Carolina",
  subtitle = "We're available for local businesses across the CSRA for on-site shoots and digital signage installations.",
  areas = [
    {
      state: "South Carolina",
      cities: ["North Augusta", "Aiken", "Columbia", "Charleston"],
    },
    { state: "Georgia", cities: ["Augusta", "Evans", "Martinez"] },
  ],
  body = "Most of our work is around Augusta and nearby communities. For larger projects, we can travel farther based on scope and schedule.",
  bullets = [
    "On-site digital signage screen installation",
    "Media player setup + content scheduling",
    "Food & commercial photography sessions",
    "Promo video production for social + in-store screens",
  ],
  note = "Not sure if you're within our service area? Send your address and we'll confirm availability.",
  mapTitle = "Coverage map",
  mapSubtitle = "Approximate area for regular service",
  mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425874.7797696186!2d-82.22!3d33.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9c8c7a4e4a6a7%3A0x5e5c3e7c8d1e2f3a!2sAugusta%2C%20GA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
}: ServiceAreaProps) {
  return (
    <section
      id="service-area"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Refined gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-300px] top-[100px] h-[600px] w-[600px] rounded-full bg-sky-400/8 blur-[120px]" />
        <div className="absolute right-[-300px] bottom-[-100px] h-[700px] w-[700px] rounded-full bg-blue-600/6 blur-[120px]" />

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
                {kicker}
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              {title.split(" ").slice(0, -3).join(" ")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  {title.split(" ").slice(-3).join(" ")}
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
              {subtitle}
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Content Side */}
            <motion.div
              variants={fadeUp}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="relative"
            >
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-2xl">
                {/* Top accent line */}
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

                {/* Location Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-4 py-2">
                  <div className="text-sky-400">
                    <MapPinIcon />
                  </div>
                  <span className="text-sm font-semibold text-white/90">
                    CSRA + Surrounding Cities
                  </span>
                </div>

                {/* Areas Cards */}
                <div className="mt-6 space-y-4">
                  {areas.map((area, i) => (
                    <motion.div
                      key={area.state}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      className="group/card relative"
                    >
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/10 via-transparent to-blue-600/10 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
                      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 transition-all duration-300 group-hover/card:border-white/20 group-hover/card:bg-white/8">
                        <p className="text-xs font-medium tracking-[0.2em] text-sky-400 uppercase">
                          {area.state}
                        </p>
                        <p className="mt-2 text-base text-white/80 font-light">
                          {area.cities.join(" • ")}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="mt-6 text-base leading-relaxed text-white/60">
                  {body}
                </p>

                {/* Services List */}
                <ul className="mt-6 space-y-3">
                  {bullets.map((bullet, i) => (
                    <motion.li
                      key={bullet}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3 text-base text-white/70"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400 flex-shrink-0" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                  <p className="text-sm leading-relaxed text-white/60">
                    💡 {note}
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2, ease: easeOut }}
                    className="group/btn relative overflow-hidden rounded-2xl bg-sky-400 px-8 py-4 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/25"
                  >
                    <span className="relative z-10">Send Your Address</span>
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
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-8 py-4 text-center text-sm font-semibold text-white hover:border-white/20 hover:bg-white/10 transition-all"
                  >
                    Book a Call
                  </motion.a>
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
              </div>
            </motion.div>

            {/* Map Side */}
            <motion.div
              variants={fadeUp}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: easeOut }}
              className="relative"
            >
              <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
                {/* Top accent line */}
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

                {/* Map Header */}
                <div className="border-b border-white/10 p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-sky-400">
                      <MapPinIcon />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">
                        {mapTitle}
                      </div>
                      <div className="mt-0.5 text-sm text-white/60">
                        {mapSubtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Container */}
                <div className="p-4 md:p-6">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/30">
                    <div className="relative w-full pb-[75%]">
                      <iframe
                        title="Service area map"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src={mapSrc}
                        allowFullScreen
                        className="absolute inset-0 h-full w-full"
                        style={{ filter: "grayscale(0.2) contrast(1.1)" }}
                      />
                    </div>

                    {/* Map overlay gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating glow accent */}
                <motion.div
                  className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
