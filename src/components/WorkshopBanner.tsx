import { Container } from "./Container"

export function WorkshopBanner() {
  return (
    <section id="workshop" className="py-14 md:py-18">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft">
          {/* Background image (optional) */}
          <div className="absolute inset-0">
            <img
              src="/images/workshop.jpg"
              alt="Video editing workshop"
              className="h-full w-full object-cover opacity-25"
              onError={(e) => {
                ;(e.currentTarget as HTMLImageElement).style.display = "none"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-prussian via-prussian/80 to-transparent" />
          </div>

          <div className="relative grid gap-8 p-8 md:grid-cols-12 md:p-10">
            <div className="md:col-span-7">
              <p className="text-xs tracking-[0.22em] text-white/60">WORKSHOP</p>
              <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                Video Editing Basics — from zero to confident.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70">
                Learn a clean, beginner-friendly workflow: editing fundamentals, pacing, captions,
                exports, and how to create ads that look premium for social media.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-sm font-semibold text-white">Beginner</div>
                  <div className="text-xs text-white/60">No experience needed</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-sm font-semibold text-white">Practical</div>
                  <div className="text-xs text-white/60">Hands-on exercises</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-sm font-semibold text-white">Fast wins</div>
                  <div className="text-xs text-white/60">Templates + tips</div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 md:flex md:items-center md:justify-end">
              <div className="flex w-full flex-col gap-3 sm:flex-row md:flex-col md:w-auto">
                <a
                  href="#contact"
                  className="rounded-2xl bg-sky px-6 py-3 text-center text-sm font-semibold text-prussian hover:brightness-110 transition"
                >
                  Reserve a Spot
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white/90 hover:bg-white/8 transition"
                >
                  Ask for Details
                </a>

                <p className="text-center text-xs text-white/50 md:text-left">
                  Add dates & pricing when ready.
                </p>
              </div>
            </div>
          </div>

          {/* glow */}
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-sky/20 blur-3xl" />
        </div>
      </Container>
    </section>
  )
}
