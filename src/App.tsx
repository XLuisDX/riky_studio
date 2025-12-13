import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { ImageGrid } from "./components/ImageGrid"
import { Services } from "./components/Services"
import { About } from "./components/About"
import { HowWeWork } from "./components/HowWeWork"
import { Portfolio } from "./components/Portfolio"
import { Pricing } from "./components/Pricing"
import { WorkshopBanner } from "./components/WorkshopBanner"
import { Testimonials } from "./components/Testimonials"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { ServiceArea } from "./components/ServiceArea";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <div
      id="top"
      className="min-h-screen text-white bg-prussian overflow-x-hidden"
    >
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute left-1/2 top-[-220px] h-[680px] w-[980px] -translate-x-1/2 rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute right-[-260px] top-[240px] h-[640px] w-[640px] rounded-full bg-tech/10 blur-3xl" />
        <div className="absolute left-[-260px] bottom-[-260px] h-[720px] w-[720px] rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-prussian via-prussian to-[#050f22]" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <ImageGrid />
        <About />
        <Services />
        <Portfolio />
        <ServiceArea />
        <HowWeWork />
        <Pricing />
        <WorkshopBanner />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}
