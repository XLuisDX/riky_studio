import { motion } from "framer-motion"
import { FaMapMarkerAlt } from "react-icons/fa"
import { Container } from "./Container"

type AreaGroup = { state: string; cities: string[] }

type ServiceAreaProps = {
  kicker?: string
  title?: string
  subtitle?: string
  areas?: AreaGroup[]
  body?: string
  bullets?: string[]
  note?: string
  mapTitle?: string
  mapSubtitle?: string
  mapSrc?: string
}

export function ServiceArea({
  kicker = "WHERE WE WORK",
  title = "Serving Georgia & South Carolina",
  subtitle = "We’re available for local businesses across the CSRA for on-site shoots and digital signage installations.",
  areas = [
    { state: "South Carolina", cities: ["North Augusta", "Aiken", "Columbia", "Charleston"] },
    { state: "Georgia", cities: ["Augusta", "Evans", "Martinez"] },
  ],
  body = "Most of our work is around Augusta and nearby communities. For larger projects, we can travel farther based on scope and schedule.",
  bullets = [
    "On-site digital signage screen installation",
    "Media player setup + content scheduling",
    "Food & commercial photography sessions",
    "Promo video production for social + in-store screens",
  ],
  note = "Not sure if you’re within our service area? Send your address and we’ll confirm availability.",
  mapTitle = "Coverage map",
  mapSubtitle = "Approximate area for regular service",
  mapSrc = "https://www.google.com/maps?q=Augusta%2C%20GA&output=embed",
}: ServiceAreaProps) {
  return (
    <motion.section
      id="service-area"
      className="py-14 md:py-18"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <Container>
        {/* Header */}
        <motion.div
          className="mb-8 grid gap-3 md:grid-cols-12 md:items-end"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:col-span-8">
            <p className="text-xs tracking-[0.22em] text-white/60">{kicker}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
              {subtitle}
            </p>
          </div>

          <div className="md:col-span-4 md:flex md:justify-end">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-sky px-5 py-3 text-sm font-semibold text-prussian hover:brightness-110 transition md:w-auto"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-12">
          {/* Text */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft md:col-span-6 md:p-8"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80">
              <FaMapMarkerAlt className="text-sky" />
              <span>CSRA + surrounding cities</span>
            </div>

            {/* Areas list */}
            <div className="mt-4 space-y-3">
              {areas.map((a) => (
                <div
                  key={a.state}
                  className="rounded-2xl border border-white/10 bg-prussian/25 p-4"
                >
                  <p className="text-xs tracking-[0.22em] text-white/60">{a.state}</p>
                  <p className="mt-2 text-sm text-white/75">
                    {a.cities.join(" • ")}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/70">{body}</p>

            <ul className="mt-5 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-white/75">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-xs leading-relaxed text-white/55">{note}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/8 transition"
              >
                Book a Call
              </a>
              <a
                href="#contact"
                className="rounded-2xl bg-sky px-6 py-3 text-center text-sm font-semibold text-prussian hover:brightness-110 transition"
              >
                Send your address
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="rounded-3xl border border-white/10 bg-white/5 shadow-soft md:col-span-6"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-b border-white/10 p-6 md:p-8">
              <div className="text-sm font-semibold text-white">{mapTitle}</div>
              <div className="mt-1 text-xs tracking-wide text-white/60">{mapSubtitle}</div>
            </div>

            <div className="p-3 md:p-4">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-prussian/30">
                <div className="relative w-full pb-[62%]">
                  <iframe
                    title="Service area map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={mapSrc}
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-prussian/35 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}
