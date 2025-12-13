import { useMemo, useState } from "react"
import { Container } from "./Container"

type Project = {
  title: string
  category: "Video Ads" | "Food Photo" | "Digital Signage" | "Screen Content"
  tag: string
  img?: string
}

function Chip({
  active,
  children,
  onClick,
}: {
  active?: boolean
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition",
        active
          ? "border-sky/40 bg-sky/15 text-white"
          : "border-white/10 bg-white/5 text-white/75 hover:bg-white/8 hover:text-white",
      ].join(" ")}
      type="button"
    >
      {children}
    </button>
  )
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
  )

  const filters = ["All", "Video Ads", "Food Photo", "Digital Signage", "Screen Content"] as const
  const [active, setActive] = useState<(typeof filters)[number]>("All")

  const filtered = projects.filter((p) => (active === "All" ? true : p.category === active))

  return (
    <section id="portfolio" className="py-14 md:py-18">
      <Container>
        <div className="mb-7 grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.22em] text-white/60">PORTFOLIO</p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              A few recent highlights.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
              Clean visuals, strong messaging, and content built to look premium on every screen.
            </p>
          </div>

          <div className="md:col-span-5 md:flex md:justify-end">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-sky px-5 py-3 text-sm font-semibold text-prussian hover:brightness-110 transition md:w-auto"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <Chip key={f} active={active === f} onClick={() => setActive(f)}>
              {f}
            </Chip>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <a
              key={`${p.title}-${p.category}`}
              href="#contact"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft"
              aria-label={`Project: ${p.title}`}
            >
              <div className="aspect-[4/3]">
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                    onError={(e) => {
                      ;(e.currentTarget as HTMLImageElement).style.display = "none"
                    }}
                  />
                ) : null}

                {/* placeholder */}
                <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/0" />
              </div>

              {/* overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-prussian/85 via-prussian/25 to-transparent opacity-90 transition group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70">
                    {p.category}
                  </span>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                    {p.tag}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">
                  Tap to discuss a similar project →
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-xs text-white/50">
          Replace images by adding files in <span className="text-white/70">public/images/</span> named{" "}
          <span className="text-white/70">portfolio-1.jpg</span> …{" "}
          <span className="text-white/70">portfolio-6.jpg</span>.
        </div>
      </Container>
    </section>
  )
}
