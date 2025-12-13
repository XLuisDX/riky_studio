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

export default function App() {
  return (
    <div id="top" className="min-h-screen text-white">
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
    </div>
  );
}
