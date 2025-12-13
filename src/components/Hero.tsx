import { Container } from "./Container"

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-lg font-semibold text-white">{value}</div>
      <div className="text-xs tracking-wide text-white/60">{label}</div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-sky/15 blur-3xl" />
        <div className="absolute right-[-120px] top-[120px] h-[380px] w-[520px] rounded-full bg-tech/15 blur-3xl" />
      </div>

      <Container>
        <div className="relative grid items-center gap-10 py-12 md:grid-cols-2 md:py-16">
          {/* Copy */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.22em] text-white/70">
              RIKY STUDIO • VIDEO EDITING
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
              Ads that look premium.
              <span className="block text-sky">Content that sells.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              We create high-impact promotional videos, commercial photography, and digital signage
              setups for restaurants and local businesses—built to look clean, modern, and effective.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-sky px-6 py-3 text-center text-sm font-semibold text-prussian hover:brightness-110 transition"
              >
                Get a Quote
              </a>

              {/* Option A: scroll to contact */}
              <a
                href="#contact"
                className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/8 transition"
              >
                Book a Call
              </a>

              {/* Option B (later): replace href with Calendly link */}
              {/* <a href="https://calendly.com/your-link" target="_blank" rel="noreferrer" ...>Book a Call</a> */}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Stat value="48–72h" label="Typical turnaround" />
              <Stat value="4K" label="Delivery available" />
              <Stat value="1 stop" label="Video + photo + screens" />
            </div>

            <p className="mt-5 text-xs text-white/50">
              Want the “numbers” to be real? We can replace these with your actual stats.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-soft">
              <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/0">
                <div className="flex h-full items-center justify-center">
                  <div className="rounded-2xl border border-white/10 bg-prussian/40 px-5 py-4 text-center">
                    <div className="text-sm font-semibold text-white">Showreel Preview</div>
                    <div className="mt-1 text-xs text-white/60">
                      Replace with a video or a featured project image
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-14 rounded-2xl border border-white/10 bg-white/5" />
                <div className="h-14 rounded-2xl border border-white/10 bg-white/5" />
                <div className="h-14 rounded-2xl border border-white/10 bg-white/5" />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-sky/20 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  )
}
