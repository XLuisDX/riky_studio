import { Container } from "./Container";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-prussian/40">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <a href="#top" className="flex items-center gap-3">
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
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Premium ad videos, commercial photography, and digital signage
              setups for restaurants and local businesses.
            </p>
          </div>

          <div className="md:col-span-5">
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
                className="w-full flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-sky/40"
              />
              <button
                type="submit"
                className="rounded-2xl bg-sky px-6 py-3 text-sm font-semibold text-prussian hover:brightness-110 transition"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-3 text-xs text-white/50">
              *Newsletter form can be wired later (Mailchimp/ConvertKit/etc.).
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-3">
            <div>
              <p className="text-xs tracking-[0.22em] text-white/60">PAGES</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-white/75 hover:text-white"
                    href="#services"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/75 hover:text-white"
                    href="#portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="text-white/75 hover:text-white" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/75 hover:text-white"
                    href="#workshop"
                  >
                    Workshop
                  </a>
                </li>
                <li>
                  <a className="text-white/75 hover:text-white" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-[0.22em] text-white/60">SOCIAL</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-white/75 hover:text-white"
                    href="https://www.instagram.com/rik_istudy?igsh=MWwxNzh4ZG95aWl0eQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="text-white/75 hover:text-white"
                    href="https://www.facebook.com/share/1BYiDFmw85/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Riky Studio. All rights reserved.
          </span>
          <span className="text-white/45">Built with React + Tailwind.</span>
        </div>
      </Container>
    </footer>
  );
}
