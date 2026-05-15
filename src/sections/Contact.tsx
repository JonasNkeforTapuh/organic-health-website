"use client";

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center">
          <p className="uppercase tracking-widest text-[#166534] font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">
            Get In Touch With Us
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            We are here to support you. Reach out for partnerships,
            inquiries, or wellness consultations.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* LEFT INFO */}
          <div className="space-y-8">

            <div className="flex items-center gap-4">
              <Phone className="text-[#166534]" />
              <span>+234 0707 2353 176</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-[#166534]" />
              <span>organicstemcellhealthandwealth@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#166534]" />
              <span>Cameroon / Nigeria Operations Center</span>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/237653774362"
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#16a34a] text-white px-6 py-3 rounded-full hover:bg-[#166534] transition"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

          </div>

          {/* RIGHT SIDE (OPTIONAL FORM) */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-xl"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-xl"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 border rounded-xl"
              ></textarea>

              <button
                type="button"
                className="w-full bg-[#166534] text-white py-3 rounded-xl hover:bg-[#14532d] transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}