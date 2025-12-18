import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Container component
function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
};

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      whileHover={{ x: 3 }}
      transition={{ duration: 0.2, ease: easeOut }}
      className="flex items-center gap-2 text-white/70 hover:text-sky-400 transition"
    >
      {children}
      {external && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
    </motion.a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe() {
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  }

  return (
    <footer className="relative border-t border-white/10 overflow-hidden">
      {/* Refined gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-300px] bottom-[-250px] h-[700px] w-[700px] rounded-full bg-blue-600/6 blur-[120px]" />
        <div className="absolute right-[-300px] top-[-250px] h-[700px] w-[700px] rounded-full bg-sky-400/6 blur-[120px]" />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_90%)]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/50" />
      </div>

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-16"
        >
          {/* Brand & Description */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <motion.a
              href="#top"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: easeOut }}
              className="group inline-flex items-center gap-4"
            >
              <div className="relative h-14 w-14 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-0 flex-shrink-0">
                <BrandLogo className="h-full w-full object-contain" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="leading-tight">
                <div className="text-xl font-bold text-white">Riky Studio</div>
                <div className="text-[10px] font-medium tracking-[0.25em] text-sky-400 uppercase">
                  Video Editing
                </div>
              </div>
            </motion.a>

            <p className="mt-6 text-base leading-relaxed text-white/60">
              Premium ad videos, commercial photography, and digital signage
              setups for restaurants and local businesses.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <motion.a
                href="https://www.instagram.com/rik_istudy?igsh=MWwxNzh4ZG95aWl0eQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-white/70 hover:text-sky-400 hover:border-sky-400/30 transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </motion.a>

              <motion.a
                href="https://www.facebook.com/share/1BYiDFmw85/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-white/70 hover:text-sky-400 hover:border-sky-400/30 transition-all"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </motion.a>
            </div>

            {/* Subtle divider */}
            <div className="mt-8 h-px w-32 bg-gradient-to-r from-sky-400/40 via-white/10 to-transparent" />
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 mb-4">
              <div className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[10px] font-medium tracking-[0.2em] text-white/70 uppercase">
                Newsletter
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Get occasional tips{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  & offers
                </span>
              </span>
            </h3>

            <p className="mt-3 text-base text-white/60">
              No spam. Just practical content and updates.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 rounded-2xl border border-white/10 bg-slate-950/50 backdrop-blur-sm px-5 py-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-sky-400/50 focus:ring-4 focus:ring-sky-400/10"
              />
              <motion.button
                onClick={handleSubscribe}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="group relative overflow-hidden rounded-2xl bg-sky-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-sky-400/25 sm:w-auto"
              >
                <span className="relative z-10">
                  {subscribed ? "Subscribed! ✓" : "Subscribe"}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>

            <p className="mt-4 text-sm text-white/50">
              💡 Newsletter form can be wired later (Mailchimp/ConvertKit/etc.)
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 gap-10 lg:col-span-3"
          >
            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-sky-400 uppercase mb-4">
                Pages
              </p>
              <ul className="space-y-3 text-base">
                <li>
                  <FooterLink href="#about">About</FooterLink>
                </li>
                <li>
                  <FooterLink href="#services">Services</FooterLink>
                </li>
                <li>
                  <FooterLink href="#portfolio">Portfolio</FooterLink>
                </li>
                <li>
                  <FooterLink href="#contact">Contact</FooterLink>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-sky-400 uppercase mb-4">
                Contact
              </p>
              <ul className="space-y-3 text-base">
                <li>
                  <FooterLink href="tel:+18036790904">
                    (803) 679-0904
                  </FooterLink>
                </li>
                <li>
                  <FooterLink href="tel:+18033410956">
                    (803) 341-0956
                  </FooterLink>
                </li>
                <li>
                  <FooterLink
                    href="https://www.instagram.com/rik_istudy?igsh=MWwxNzh4ZG95aWl0eQ%3D%3D&utm_source=qr"
                    external
                  >
                    Instagram
                  </FooterLink>
                </li>
                <li>
                  <FooterLink
                    href="https://www.facebook.com/share/1BYiDFmw85/?mibextid=wwXIfr"
                    external
                  >
                    Facebook
                  </FooterLink>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="relative flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/50 sm:flex-row sm:items-center justify-center"
        >
          <span>
            © {new Date().getFullYear()} Riky Studio. All rights reserved.
          </span>
        </motion.div>
      </Container>
    </footer>
  );
}

// Don't forget useState import
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";

