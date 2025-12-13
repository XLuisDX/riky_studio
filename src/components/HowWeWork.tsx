import { Container } from "./Container"

function StepCard({
  n,
  title,
  desc,
}: {
  n: string
  title: string
  desc: string
}) {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-sky">
          {n}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export function HowWeWork() {
  const steps = [
    {
      n: "01",
      title: "Discover",
      desc: "We learn your goals, audience, brand style, and where your content will run (social, web, in-store screens).",
    },
    {
      n: "02",
      title: "Plan",
      desc: "We define the shot list, script, formats, and deliverables. You get clear timelines and a simple approval flow.",
    },
    {
      n: "03",
      title: "Produce",
      desc: "We capture or edit the assets, design screen-ready layouts, and deliver polished content in the right formats.",
    },
    {
      n: "04",
      title: "Launch",
      desc: "We install screens and media players (if needed), schedule your content, and ensure everything runs reliably.",
    },
  ]

  return (
    <section id="how-we-work" className="py-14 md:py-18">
      <Container>
        <div className="mb-8 grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.22em] text-white/60">HOW WE WORK</p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              A simple process. Premium results.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
              Everything is designed to be fast, clear, and dependable—from first message to final
              delivery and installation.
            </p>
          </div>

          <div className="md:col-span-5 md:flex md:justify-end">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85 hover:bg-white/8 transition md:w-auto"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-6 hidden h-[calc(100%-48px)] w-px -translate-x-1/2 bg-white/10 md:block" />

          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((s, idx) => (
              <div
                key={s.n}
                className={
                  "relative " +
                  (idx % 2 === 0 ? "md:pr-8" : "md:pl-8")
                }
              >
                <div
                  className={
                    "pointer-events-none absolute top-8 hidden h-3 w-3 rounded-full border border-white/20 bg-sky/80 md:block " +
                    (idx % 2 === 0 ? "right-[-6px]" : "left-[-6px]")
                  }
                />
                <StepCard n={s.n} title={s.title} desc={s.desc} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
