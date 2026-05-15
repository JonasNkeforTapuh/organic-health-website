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
<section className="py-24 text-center bg-white">

  <h2 className="text-4xl font-bold text-gray-900">
    Our Products
  </h2>

  <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
    Explore our complete collection of powerful healing and
    wellness products carefully designed to restore lives.
  </p>

  <a
    href="/products"
    className="
    inline-block
    mt-8
    bg-[#166534]
    text-white
    px-8
    py-4
    rounded-full
    hover:scale-105
    transition
    "
  >
    View Products
  </a>

</section>
      <Testimonials />
      <VideoTestimonials />
      <Videos />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}