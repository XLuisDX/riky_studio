import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "./BrandLogo";

// Container component
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

type NavItem = { label: string; href: string };

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["services", "about", "portfolio", "testimonials", "contact"];
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
        threshold: [0.1, 0.3, 0.5],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className={[
        "fixed top-4 left-4 right-4 z-[100] rounded-3xl border transition-all duration-500",
        // ✅ Más “cristal”: menos opaco + blur + saturate
        scrolled
          ? "border-white/12 bg-slate-950/55 backdrop-blur-2xl shadow-2xl shadow-black/25 backdrop-saturate-150"
          : "border-white/8 bg-slate-950/35 backdrop-blur-xl backdrop-saturate-150",
      ].join(" ")}
    >
      {/* Top glow line */}
      <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

      {/* ✅ Glass highlight (shine) */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent opacity-60" />

      {/* Animated background orbs */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-30"
        animate={{
          background: [
            "radial-gradient(600px 200px at 20% 50%, rgba(56,189,248,0.10), transparent 55%)",
            "radial-gradient(600px 200px at 80% 50%, rgba(37,99,235,0.10), transparent 55%)",
            "radial-gradient(600px 200px at 20% 50%, rgba(56,189,248,0.10), transparent 55%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container>
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#top"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-3 z-10"
          >
            <div className="relative">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: easeOut }}
                className="h-11 w-11 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-0 overflow-hidden"
              >
                <BrandLogo className="h-full w-full object-contain" />
              </motion.div>

              {/* Spinning ring on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-sky-400/40"
                initial={{ rotate: 0, scale: 1, opacity: 0 }}
                whileHover={{ rotate: 360, scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.6, ease: easeOut }}
              />
            </div>

            {/* ✅ Desktop text (igual que antes) */}
            <div className="hidden sm:block leading-tight">
              <div className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                Riky Studio
              </div>
              <div className="text-[9px] font-semibold tracking-[0.3em] text-white/50 uppercase">
                Video • Photo • Screens
              </div>
            </div>

            {/* ✅ Mobile name next to icon */}
            <div className="sm:hidden flex items-center">
              <span className="text-sm font-bold text-white/95 group-hover:text-sky-400 transition-colors">
                Riky Studio
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = id === activeSection;

              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={[
                    "relative px-4 py-2 rounded-xl text-sm font-medium transition-all",
                    isActive
                      ? "text-white"
                      : "text-white/70 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                >
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-sm font-bold text-white shadow-lg shadow-sky-400/25"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-400"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden relative h-10 w-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              animate={mobileOpen ? "open" : "closed"}
              className="flex flex-col gap-1.5"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                className="w-5 h-0.5 bg-white rounded-full"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-5 h-0.5 bg-white rounded-full"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                className="w-5 h-0.5 bg-white rounded-full"
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-white/10">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-3 px-3 grid gap-3">
                  <a
                    href="#contact"
                    className="block px-5 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 text-center text-sm font-bold text-white shadow-lg shadow-sky-400/25"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}
