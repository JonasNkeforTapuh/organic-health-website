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

          <p className="uppercase tracking-widest text-[#166534] font-bold text-lg">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">
            Get In Touch With Us
          </h2>

          <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
            We are here to support you. Reach out for partnerships,
            inquiries, wellness consultations and collaborations.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <div className="flex items-center gap-4 text-gray-800 text-lg">

              <div className="bg-green-100 p-3 rounded-full">
                <Phone
                  className="text-[#166534]"
                  size={22}
                />
              </div>

              <span className="font-medium">
                +234 0707 2353 176
              </span>

            </div>


            <div className="flex items-center gap-4 text-gray-800 text-lg">

              <div className="bg-green-100 p-3 rounded-full">
                <Mail
                  className="text-[#166534]"
                  size={22}
                />
              </div>

              <span className="font-medium break-all">
                organicstemcellhealthandwealth@gmail.com
              </span>

            </div>


            <div className="flex items-center gap-4 text-gray-800 text-lg">

              <div className="bg-green-100 p-3 rounded-full">
                <MapPin
                  className="text-[#166534]"
                  size={22}
                />
              </div>

              <span className="font-medium">
                Cameroon / Nigeria Operations Center
              </span>

            </div>


            {/* WhatsApp */}

            <a
              href="https://wa.me/237653774362"
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              items-center
              gap-3
              bg-[#16a34a]
              text-white
              px-8
              py-4
              rounded-full
              hover:bg-[#166534]
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              "
            >

              <MessageCircle size={20} />

              Chat on WhatsApp

            </a>

          </div>


          {/* RIGHT FORM */}

          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-5
                py-4
                text-gray-900
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-[#16a34a]
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-5
                py-4
                text-gray-900
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-[#16a34a]
                "
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="
                w-full
                border
                border-gray-300
                rounded-xl
                px-5
                py-4
                text-gray-900
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-[#16a34a]
                "
              ></textarea>

              <button
                type="button"
                className="
                w-full
                bg-[#166534]
                text-white
                py-4
                rounded-xl
                hover:bg-[#14532d]
                hover:scale-[1.02]
                transition-all
                duration-300
                font-semibold
                "
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