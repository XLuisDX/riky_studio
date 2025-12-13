import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "./Container";
import { BrandLogo } from "./BrandLogo";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = { label: string; href: string };

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Pricing", href: "#pricing" },
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
    const ids = [
      "services",
      "about",
      "service-area",
      "how-we-work",
      "portfolio",
      "pricing",
      "workshop",
      "testimonials",
      "contact",
    ];

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        root: null,
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5, 0.65],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!servicesRef.current) return;
      if (!servicesRef.current.contains(e.target as Node))
        setServicesOpen(false);
    }
    window.addEventListener("mousedown", onClickOutside);
    return () => window.removeEventListener("mousedown", onClickOutside);
  }, []);

  function closeAllMenus() {
    setServicesOpen(false);
    setMobileOpen(false);
  }

  function navLinkClass(href: string) {
    const id = href.startsWith("#") ? href.slice(1) : "";
    const isActive = id && id === activeSection;

    return [
      "relative text-sm transition",
      isActive ? "text-white" : "text-white/80 hover:text-white",
    ].join(" ");
  }

  const dropdownAnim = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22 } },
    exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.18 } },
  };

  const mobileAnim = {
    hidden: { opacity: 0, height: 0 },
    show: { opacity: 1, height: "auto", transition: { duration: 0.25 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-prussian/70 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky/40 to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-16 items-center justify-between"
        >
          <a href="#top" className="group flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="relative h-12 w-12 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-0"
            >
              <BrandLogo className="h-full w-full object-contain" />

              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{}}
                transition={{ duration: 0.2 }}
                style={{
                  background:
                    "radial-gradient(120px 80px at 20% 15%, rgba(34,181,255,0.22), transparent 60%), radial-gradient(160px 120px at 80% 90%, rgba(21,93,181,0.18), transparent 60%)",
                }}
              />
            </motion.div>

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
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setServicesOpen((v) => !v)}
                className="text-sm text-white/80 hover:text-white transition"
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                type="button"
              >
                Services <span className="text-white/40">▾</span>
              </motion.button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    role="menu"
                    variants={dropdownAnim}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="absolute left-0 mt-3 w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-[#071a35] shadow-soft"
                  >
                    <div className="h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />
                    <div className="p-2">
                      {services.map((s) => (
                        <motion.a
                          key={s}
                          href="#services"
                          role="menuitem"
                          onClick={closeAllMenus}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.12 }}
                          className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white transition"
                        >
                          {s}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.map((item) => {
              const id = item.href.startsWith("#") ? item.href.slice(1) : "";
              const isActive = id && id === activeSection;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(item.href)}
                >
                  {item.label}
                  <motion.span
                    aria-hidden
                    className="absolute -bottom-2 left-0 right-0 mx-auto h-px w-0 bg-gradient-to-r from-tech/0 via-sky to-tech/0"
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.25 }}
                  />
                </a>
              );
            })}

            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="rounded-2xl bg-sky px-4 py-2 text-sm font-semibold text-prussian hover:brightness-110 transition"
              >
                Get a Quote
              </motion.a>
            </div>
          </nav>

          <motion.button
            whileTap={{ scale: 0.96 }}
            className="md:hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Open menu"
            type="button"
          >
            ☰
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              variants={mobileAnim}
              initial="hidden"
              animate="show"
              exit="exit"
              className="md:hidden pb-4"
            >
              <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="h-px bg-gradient-to-r from-transparent via-sky/35 to-transparent" />

                <div className="p-3">
                  <a
                    href="#services"
                    className="block rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                    onClick={closeAllMenus}
                  >
                    Services
                  </a>

                  <div className="ml-2 mt-1 space-y-1">
                    {services.map((s) => (
                      <a
                        key={s}
                        href="#services"
                        className="block rounded-xl px-3 py-2 text-sm text-white/60 hover:bg-white/5 hover:text-white"
                        onClick={closeAllMenus}
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
                      onClick={closeAllMenus}
                    >
                      {item.label}
                    </a>
                  ))}

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <a
                      href="#contact"
                      className="block rounded-xl bg-sky px-4 py-2 text-center text-sm font-semibold text-prussian hover:brightness-110 transition"
                      onClick={closeAllMenus}
                    >
                      Get a Quote
                    </a>

                    <a
                      href="tel:+18036790904"
                      className="block rounded-xl border border-white/12 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white/90 hover:bg-white/8 transition"
                      onClick={closeAllMenus}
                    >
                      Book a Call
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
