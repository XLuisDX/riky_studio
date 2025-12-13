import { Container } from "./Container"

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5">
      <div className="text-sky">{children}</div>
    </div>
  )
}

export function Services() {
  const services = [
    {
      title: "Ad Video Production",
      desc: "Short-form ads and promos optimized for social, web, and in-store screens.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3"
            y="7"
            width="12"
            height="10"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: "Commercial & Food Photography",
      desc: "Clean, premium shots that make your menu and products look irresistible.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 20H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l2-2h6l2 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
    {
      title: "Digital Signage Screen Installation",
      desc: "Professional mounting, cable management, and clean placement for visibility.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="4"
            width="18"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 20h8M12 16v4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Media Player Setup for Advertising",
      desc: "We configure players to auto-run content reliably—no tech headaches.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect
            x="4"
            y="6"
            width="16"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M11 10l4 2-4 2v-4Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Content Design for Digital Screens",
      desc: "Layouts built for readability, brand consistency, and quick attention.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6h16M4 10h10M4 14h16M4 18h8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-14 md:py-18">
      <Container>
        <div className="mb-8 grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.22em] text-white/60">SERVICES</p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Everything you need for modern advertising.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
              From production to installation, we deliver a polished system that looks premium and
              runs smoothly—online and in-store.
            </p>
          </div>

          <div className="md:col-span-5 md:flex md:justify-end">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/8 transition md:w-auto"
            >
              Get a Quote
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft transition hover:bg-white/[0.07]"
            >
              <Icon>{s.icon}</Icon>

              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>

              <div className="mt-5 h-px bg-white/10" />

              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition"
              >
                Request pricing
                <span className="text-sky transition group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
