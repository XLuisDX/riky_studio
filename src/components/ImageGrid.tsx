import { Container } from "./Container"

type Tile = {
  title: string
  subtitle: string
  img?: string
}

export function ImageGrid() {
  const tiles: Tile[] = [
    {
      title: "Ad Video Production",
      subtitle: "Short-form ads built to convert",
      img: "/images/sample-1.jpg",
    },
    {
      title: "Food & Commercial Photography",
      subtitle: "Clean, premium product shots",
      img: "/images/sample-2.jpg",
    },
    {
      title: "Digital Signage Installations",
      subtitle: "Screens + media players, ready to run",
      img: "/images/sample-3.jpg",
    },
  ]

  return (
    <section className="py-14 md:py-18">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.22em] text-white/60">FEATURED WORK</p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Visuals designed to stand out.
            </h2>
          </div>

          <a
            href="#portfolio"
            className="hidden rounded-2xl border border-white/12 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 hover:bg-white/8 transition md:inline-flex"
          >
            View Portfolio
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-12">
          <a
            href="#portfolio"
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft md:col-span-7"
          >
            <div className="aspect-[16/10]">
              {tiles[0].img ? (
                <img
                  src={tiles[0].img}
                  alt={tiles[0].title}
                  className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/0" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-prussian/80 via-prussian/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-white/70">
                  FEATURE
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {tiles[0].title}
                </h3>
                <p className="mt-1 text-sm text-white/70">{tiles[0].subtitle}</p>
              </div>
            </div>
          </a>

          <div className="grid gap-4 md:col-span-5">
            {[tiles[1], tiles[2]].map((t) => (
              <a
                key={t.title}
                href="#portfolio"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-soft"
              >
                <div className="aspect-[16/10]">
                  {t.img ? (
                    <img
                      src={t.img}
                      alt={t.title}
                      className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/0" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-prussian/80 via-prussian/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-semibold text-white">{t.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{t.subtitle}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 md:hidden">
          <a
            href="#portfolio"
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/8 transition"
          >
            View Portfolio
          </a>
        </div>
      </Container>
    </section>
  )
}
