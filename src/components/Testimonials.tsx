import { useEffect, useMemo, useState } from "react"
import { Container } from "./Container"

type Testimonial = {
  name: string
  role: string
  quote: string
  rating: number
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < rating ? "currentColor" : "none"}
          className={i < rating ? "text-sky" : "text-white/20"}
        >
          <path
            d="M12 17.27l5.18 3.03-1.64-5.81L20 9.24l-5.9-.5L12 3.5 9.9 8.74 4 9.24l4.46 5.25-1.64 5.81L12 17.27z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const items: Testimonial[] = useMemo(
    () => [
      {
        name: "Sarah M.",
        role: "Restaurant Owner",
        quote:
          "The videos look premium and the turnaround was fast. Our promos finally feel consistent across Instagram and in-store.",
        rating: 5,
      },
      {
        name: "Carlos R.",
        role: "Local Business",
        quote:
          "They installed our screen and set up the media player so it just works. Clean cables, clean look, no headaches.",
        rating: 5,
      },
      {
        name: "Amanda L.",
        role: "Cafe Manager",
        quote:
          "The food photos are insanely good—our menu looks elevated. We also got templates for weekly specials that save us time.",
        rating: 5,
      },
    ],
    []
  )

  const [index, setIndex] = useState(0)

  // auto-advance
  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length)
    }, 6500)
    return () => window.clearInterval(id)
  }, [items.length])

  function prev() {
    setIndex((i) => (i - 1 + items.length) % items.length)
  }
  function next() {
    setIndex((i) => (i + 1) % items.length)
  }

  return (
    <section id="testimonials" className="py-14 md:py-18">
      <Container>
        <div className="mb-8 grid gap-4 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.22em] text-white/60">TESTIMONIALS</p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Trusted by businesses that want a premium look.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">
              A few words from clients who needed better visuals and reliable screen setups.
            </p>
          </div>

          <div className="md:col-span-5 md:flex md:justify-end">
            <div className="flex w-full gap-3 md:w-auto">
              <button
                type="button"
                onClick={prev}
                className="w-1/2 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/8 transition md:w-auto"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                className="w-1/2 rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/8 transition md:w-auto"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((t) => (
              <div key={t.name} className="w-full shrink-0 p-7 md:p-10">
                <StarRow rating={t.rating} />

                <p className="mt-5 text-lg leading-relaxed text-white md:text-xl">
                  “{t.quote}”
                </p>

                <div className="mt-6 h-px bg-white/10" />

                <div className="mt-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs tracking-wide text-white/60">{t.role}</div>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70">
                    VERIFIED
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={[
                  "h-2.5 rounded-full transition",
                  i === index ? "w-7 bg-sky" : "w-2.5 bg-white/25 hover:bg-white/40",
                ].join(" ")}
              />
            ))}
          </div>

          {/* subtle glow */}
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-sky/20 blur-3xl" />
        </div>
      </Container>
    </section>
  )
}
