import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Values from "../sections/Values";
import Organization from "../sections/Organization";
import Partnership from "../sections/Partnership";
import Services from "../sections/Services";
import Stats from "../sections/Stats";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import Testimonials from "../sections/Testimonials";
import Videos from "../sections/Videos";
import VideoTestimonials from "../sections/VideoTestimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Organization />
      <Partnership />
      <Services />
      <Stats />
      <Gallery />
      <Testimonials />
      <VideoTestimonials />
      <Videos />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}