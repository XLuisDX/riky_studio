import { Container } from "./Container"

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-lg font-semibold text-white">{value}</div>
      <div className="text-xs tracking-wide text-white/60">{label}</div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="py-14 md:py-18">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft">
              <div className="aspect-[4/3]">
                <img
                  src="/images/about.jpg"
                  alt="Riky Studio behind the scenes"
                  className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.display = "none"
                  }}
                />
                <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/0" />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-prussian/70 via-prussian/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70">
                  ABOUT
                </div>
                <div className="mt-3 text-sm text-white/70">
                  Clean visuals + reliable screens for modern advertising.
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-6">
            <p className="text-xs tracking-[0.22em] text-white/60">WHO WE ARE</p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              A studio built for restaurants and local businesses.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Riky Studio helps you promote smarter—online and in-store. We produce video ads,
              commercial photography, and build digital signage systems that are simple to run and
              designed to look premium.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Our approach is minimal and modern: clear storytelling, clean design, and a consistent
              brand look across every screen.
            </p>

            {/* Stats */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Stat value="48–72h" label="Typical turnaround" />
              <Stat value="4K" label="Export ready" />
              <Stat value="End-to-end" label="Production → install" />
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-sky px-6 py-3 text-center text-sm font-semibold text-prussian hover:brightness-110 transition"
              >
                Get a Quote
              </a>
              <a
                href="#portfolio"
                className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/8 transition"
              >
                See Our Work
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
