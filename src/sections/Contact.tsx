"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_klka50j",
        "template_5kr7u7q",
        form.current!,
        "1HMQBKi2Acbxd_N15"
      )
      .then(() => {
        alert("Message sent successfully ✅");
        form.current?.reset();
      })
      .catch(() => {
        alert("Failed to send message. Try again.");
      });
  };

  return (
    <section id="contact" className="py-28 px-6 bg-gray-50">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center">
          <p className="uppercase tracking-widest text-[#166534] font-semibold">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">
            Get In Touch With Us
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            We are here to support you. Reach out for inquiries,
            partnerships or consultations.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* LEFT INFO */}
          <div className="space-y-8">

            <div className="flex items-center gap-4 text-gray-700">
              <Phone className="text-[#166534]" />
              <span>+234 0707 2353 176</span>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <Mail className="text-[#166534]" />
              <span>organicstemcellhealthandwealth@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <MapPin className="text-[#166534]" />
              <span>Cameroon / Nigeria Operations</span>
            </div>

            <a
              href="https://wa.me/237653774362"
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#16a34a] text-white px-6 py-3 rounded-full hover:bg-[#14532d] transition"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >

            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              <input
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-4 rounded-xl text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#166534]"
              />

              <input
                name="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-4 rounded-xl text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#166534]"
              />

              <input
                name="phone"
                placeholder="Phone (optional)"
                className="w-full border border-gray-300 p-4 rounded-xl text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#166534]"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 p-4 rounded-xl text-black placeholder:text-gray-400 focus:ring-2 focus:ring-[#166534]"
              />

              <button
                type="submit"
                className="w-full bg-[#166534] text-white py-3 rounded-xl font-bold hover:bg-[#14532d] transition"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
}