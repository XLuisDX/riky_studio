import { Container } from "./Container";
import { BrandLogo } from "./BrandLogo";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.18, ease: easeOut }}
      className="text-white/75 hover:text-white transition"
    >
      {children}
    </motion.a>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-prussian/40">
      {/* background wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-260px] bottom-[-220px] h-[640px] w-[640px] rounded-full bg-tech/10 blur-3xl" />
        <div className="absolute right-[-260px] top-[-220px] h-[640px] w-[640px] rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-prussian/35" />
      </div>

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid gap-10 py-12 md:grid-cols-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="md:col-span-4">
            <motion.a
              href="#top"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="flex items-center gap-3"
            >
              <div className="h-11 w-11 rounded-xl border border-white/10 bg-white/5 p-0">
                <BrandLogo className="h-full w-full object-contain" />
              </div>

              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide text-white">
                  Riky Studio
                </div>
                <div className="text-[11px] tracking-[0.22em] text-white/60">
                  VIDEO EDITING
                </div>
              </div>
            </motion.a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Premium ad videos, commercial photography, and digital signage
              setups for restaurants and local businesses.
            </p>

            {/* subtle divider */}
            <div className="mt-6 h-px w-28 bg-gradient-to-r from-sky/40 via-white/10 to-transparent" />
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeUp} className="md:col-span-5">
            <p className="text-xs tracking-[0.22em] text-white/60">
              NEWSLETTER
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">
              Get occasional tips & offers.
            </h3>
            <p className="mt-2 text-sm text-white/70">
              No spam. Just practical content and updates.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="w-full flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-sky/40 focus:ring-4 focus:ring-sky/10"
              />
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="rounded-2xl bg-sky px-6 py-3 text-sm font-semibold text-prussian hover:brightness-110 transition"
              >
                Subscribe
              </motion.button>
            </form>

            <p className="mt-3 text-xs text-white/50">
              *Newsletter form can be wired later (Mailchimp/ConvertKit/etc.).
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={fadeUp}
            className="grid gap-8 sm:grid-cols-2 md:col-span-3"
          >
            <div>
              <p className="text-xs tracking-[0.22em] text-white/60">PAGES</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <FooterLink href="#services">Services</FooterLink>
                </li>
                <li>
                  <FooterLink href="#portfolio">Portfolio</FooterLink>
                </li>
                <li>
                  <FooterLink href="#pricing">Pricing</FooterLink>
                </li>
                <li>
                  <FooterLink href="#workshop">Workshop</FooterLink>
                </li>
                <li>
                  <FooterLink href="#contact">Contact</FooterLink>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-[0.22em] text-white/60">SOCIAL</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <motion.a
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.18, ease: easeOut }}
                    className="text-white/75 hover:text-white transition"
                    href="https://www.instagram.com/rik_istudy?igsh=MWwxNzh4ZG95aWl0eQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.18, ease: easeOut }}
                    className="text-white/75 hover:text-white transition"
                    href="https://www.facebook.com/share/1BYiDFmw85/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </motion.a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="relative flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between"
        >
          <span>
            © {new Date().getFullYear()} Riky Studio. All rights reserved.
          </span>
          <span className="text-white/45">Built with React + Tailwind.</span>
        </motion.div>
      </Container>
    </footer>
  );
}
