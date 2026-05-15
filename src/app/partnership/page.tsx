"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PartnershipPage() {
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
        alert("Application submitted successfully");
        form.current?.reset();
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gradient-to-b from-[#166534] via-[#14532d] to-[#0f172a] py-20 px-6">

        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <Users size={60} className="mx-auto mb-6" />

            <h1 className="text-4xl md:text-6xl font-extrabold">
              Become A Strategic Partner
            </h1>

            <p className="mt-6 text-lg text-green-100 max-w-2xl mx-auto leading-relaxed">
              Join our mission of transforming lives through wellness,
              empowerment and sustainable prosperity.
            </p>
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[35px] p-6 md:p-10 mt-16 shadow-2xl"
          >

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#14532d]">
                Partnership Application Form
              </h2>

              <p className="text-gray-600 mt-3">
                Complete the form below and our team will contact you shortly.
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              {/* ROW 1 */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 p-4 rounded-2xl text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#166534]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    name="email"
                    placeholder="example@email.com"
                    className="w-full border border-gray-300 p-4 rounded-2xl text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#166534]"
                  />
                </div>

              </div>

              {/* ROW 2 */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Phone / WhatsApp
                  </label>
                  <input
                    name="phone"
                    placeholder="+237 / +234..."
                    className="w-full border border-gray-300 p-4 rounded-2xl text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#166534]"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Country
                  </label>
                  <input
                    name="country"
                    placeholder="Your country"
                    className="w-full border border-gray-300 p-4 rounded-2xl text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#166534]"
                  />
                </div>

              </div>

              {/* OCCUPATION */}
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Occupation
                </label>
                <input
                  name="occupation"
                  placeholder="Your occupation"
                  className="w-full border border-gray-300 p-4 rounded-2xl text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#166534]"
                />
              </div>

              {/* SELECT */}
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Partnership Interest Level
                </label>
                <select
                  name="interest"
                  className="w-full border border-gray-300 p-4 rounded-2xl text-black focus:outline-none focus:ring-2 focus:ring-[#166534]"
                >
                  <option>Starter</option>
                  <option>Serious Investor</option>
                  <option>Business Expansion</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Why would you like to partner with us?
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us your motivation..."
                  className="w-full border border-gray-300 p-4 rounded-2xl text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#166534]"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#166534] text-white py-5 rounded-full hover:bg-[#14532d] hover:scale-[1.02] transition-all duration-300 font-bold shadow-lg"
              >
                Submit Partnership Request
              </button>

            </form>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
}