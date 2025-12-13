import { Container } from "./Container"

type Plan = {
  name: string
  price: string
  note: string
  featured?: boolean
  bullets: string[]
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-sky">
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Pricing() {
  const plans: Plan[] = [
    {
      name: "Starter",
      price: "From $299",
      note: "Best for one-off promos",
      bullets: [
        "1 short ad edit (15–30s)",
        "Format for Instagram / TikTok / Reels",
        "Basic captions + cleanup",
        "48–72h delivery",
      ],
    },
    {
      name: "Growth",
      price: "From $699",
      note: "Most popular for restaurants",
      featured: true,
      bullets: [
        "2–3 video ads (15–30s)",
        "Photo session (menu-ready selects)",
        "Brand-consistent titles & motion",
        "Delivery in all needed formats",
      ],
    },
    {
      name: "Premium",
      price: "From $1,499",
      note: "End-to-end signage + content",
      bullets: [
        "Video ads + commercial photography",
        "Digital signage screen installation",
        "Media player setup + auto-run content",
        "Screen content design templates",
      ],
    },
  ]

  return (
    <section id="pricing" className="py-14 md:py-18">
      <Container>
        <div className="mb-8 grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.22em] text-white/60">PRICING</p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Simple packages. Flexible scope.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
              Every project is a little different. These packages are starting points—final pricing
              depends on assets, shoot needs, number of deliverables, and installation requirements.
            </p>
          </div>

          <div className="md:col-span-5 md:flex md:justify-end">
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
              <a
                href="#contact"
                className="rounded-2xl bg-sky px-5 py-3 text-center text-sm font-semibold text-prussian hover:brightness-110 transition"
              >
                Get a Quote
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/8 transition"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={[
                "relative overflow-hidden rounded-3xl border bg-white/5 p-6 shadow-soft",
                p.featured ? "border-sky/30" : "border-white/10",
              ].join(" ")}
            >
              {p.featured && (
                <div className="absolute -right-16 top-6 rotate-12">
                  <div className="rounded-full bg-sky px-5 py-2 text-xs font-semibold text-prussian shadow-soft">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{p.note}</p>
                </div>

                <div className="text-right">
                  <div className="text-xl font-semibold text-white">{p.price}</div>
                  <div className="text-xs text-white/50">starting</div>
                </div>
              </div>

              <div className="mt-5 h-px bg-white/10" />

              <ul className="mt-5 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-white/75">
                    <span className="mt-0.5">
                      <CheckIcon />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="#contact"
                  className={[
                    "rounded-2xl px-5 py-3 text-center text-sm font-semibold transition",
                    p.featured
                      ? "bg-sky text-prussian hover:brightness-110"
                      : "border border-white/12 bg-white/5 text-white/90 hover:bg-white/8",
                  ].join(" ")}
                >
                  Choose {p.name}
                </a>

                <a
                  href="#contact"
                  className="text-center text-sm font-semibold text-white/75 hover:text-white transition"
                >
                  Ask for a custom package →
                </a>
              </div>

              {p.featured && (
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-sky/20 blur-3xl" />
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/50">
          *Prices shown are starting points. We’ll confirm scope and timeline after a quick call.
        </p>
      </Container>
    </section>
  )
}
