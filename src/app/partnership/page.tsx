"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function PartnershipPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#166534] via-[#14532d] to-[#0f172a] py-20 px-6">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-white"
        >

          <Users
            size={60}
            className="mx-auto mb-6"
          />

          <h1 className="
          text-4xl
          md:text-6xl
          font-extrabold
          ">
            Become A Strategic Partner
          </h1>

          <p className="
          mt-6
          text-lg
          text-green-100
          max-w-2xl
          mx-auto
          leading-relaxed
          ">
            Join our mission of transforming lives through
            wellness, empowerment and sustainable prosperity.
          </p>

        </motion.div>


        {/* FORM CARD */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="
          bg-white
          rounded-[35px]
          p-6
          md:p-10
          mt-16
          shadow-2xl
          "
        >

          <div className="mb-8">

            <h2 className="
            text-3xl
            font-bold
            text-[#14532d]
            ">
              Partnership Application Form
            </h2>

            <p className="
            text-gray-600
            mt-3
            ">
              Complete the information below and our team
              will contact you shortly.
            </p>

          </div>

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter full name"
                  className="
                  w-full
                  border
                  border-gray-300
                  p-4
                  rounded-2xl
                  text-gray-900
                  bg-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#166534]
                  transition
                  "
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="
                  w-full
                  border
                  border-gray-300
                  p-4
                  rounded-2xl
                  text-gray-900
                  bg-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#166534]
                  "
                />
              </div>

            </div>


            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Phone / WhatsApp
                </label>

                <input
                  type="tel"
                  placeholder="+234..."
                  className="
                  w-full
                  border
                  border-gray-300
                  p-4
                  rounded-2xl
                  text-gray-900
                  bg-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#166534]
                  "
                />
              </div>


              <div>

                <label className="block mb-2 font-semibold text-gray-700">
                  Country
                </label>

                <input
                  type="text"
                  placeholder="Country"
                  className="
                  w-full
                  border
                  border-gray-300
                  p-4
                  rounded-2xl
                  text-gray-900
                  bg-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#166534]
                  "
                />
              </div>

            </div>


            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Occupation
              </label>

              <input
                type="text"
                placeholder="Your occupation"
                className="
                w-full
                border
                border-gray-300
                p-4
                rounded-2xl
                text-gray-900
                bg-white
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-[#166534]
                "
              />

            </div>


            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Partnership Interest Level
              </label>

              <select
                className="
                w-full
                border
                border-gray-300
                p-4
                rounded-2xl
                text-gray-900
                bg-white
                focus:outline-none
                focus:ring-2
                focus:ring-[#166534]
                "
              >

                <option>
                  Select option
                </option>

                <option>
                  Starter
                </option>

                <option>
                  Serious Investor
                </option>

                <option>
                  Business Expansion
                </option>

              </select>

            </div>


            <div>

              <label className="block mb-2 font-semibold text-gray-700">
                Why would you like to partner with us?
              </label>

              <textarea
                rows={5}
                placeholder="Tell us why..."
                className="
                w-full
                border
                border-gray-300
                p-4
                rounded-2xl
                text-gray-900
                bg-white
                placeholder:text-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-[#166534]
                "
              />

            </div>


            <button
              type="submit"
              className="
              w-full
              bg-[#166534]
              text-white
              py-5
              rounded-full
              hover:bg-[#14532d]
              hover:scale-[1.02]
              transition-all
              duration-300
              font-bold
              shadow-lg
              "
            >
              Submit Partnership Request
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}