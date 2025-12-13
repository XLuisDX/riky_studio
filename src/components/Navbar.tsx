import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "./Container";

type NavItem = { label: string; href: string };

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "How We Work", href: "#how-we-work" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Pricing", href: "#pricing" },
      { label: "Workshop", href: "#workshop" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const services = useMemo(
    () => [
      "Ad Video Production",
      "Commercial & Food Photography",
      "Digital Signage Screen Installation",
      "Media Player Setup for Advertising",
      "Content Design for Digital Screens",
    ],
    []
  );

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!servicesRef.current) return;
      if (!servicesRef.current.contains(e.target as Node))
        setServicesOpen(false);
    }
    window.addEventListener("mousedown", onClickOutside);
    return () => window.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-prussian/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="group flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/5 ring-1 ring-white/10 grid place-items-center">
              <span className="text-sky font-semibold">R</span>
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide text-white">
                Riky Studio
              </div>
              <div className="text-[11px] tracking-[0.22em] text-white/60">
                VIDEO EDITING
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="text-sm text-white/80 hover:text-white transition"
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
              >
                Servicios <span className="text-white/40">▾</span>
              </button>

              {servicesOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-3 w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-[#071a35] shadow-soft"
                >
                  <div className="p-2">
                    {services.map((s) => (
                      <a
                        key={s}
                        href="#services"
                        role="menuitem"
                        className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white transition"
                        onClick={() => setServicesOpen(false)}
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-xl bg-sky px-4 py-2 text-sm font-semibold text-prussian hover:brightness-110 transition"
            >
              Cotizar
            </a>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-3">
              <a
                href="#services"
                className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                Servicios
              </a>

              <div className="ml-2 mt-1 space-y-1">
                {services.map((s) => (
                  <a
                    key={s}
                    href="#services"
                    className="block rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s}
                  </a>
                ))}
              </div>

              <div className="mt-2 h-px bg-white/10" />

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                className="mt-2 block rounded-xl bg-sky px-4 py-2 text-center text-sm font-semibold text-prussian hover:brightness-110 transition"
                onClick={() => setMobileOpen(false)}
              >
                Cotizar
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
