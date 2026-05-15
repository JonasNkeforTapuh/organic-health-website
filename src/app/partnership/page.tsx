"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function PartnershipPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#166534] to-[#0f172a] py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          className="text-center text-white"
        >

          <Users
            size={60}
            className="mx-auto mb-6"
          />

          <h1 className="
          text-4xl
          md:text-6xl
          font-bold
          ">
            Become A Strategic Partner
          </h1>

          <p className="
          mt-6
          text-lg
          text-green-100
          max-w-2xl
          mx-auto
          ">
            Join our mission of transforming lives through
            wellness, empowerment and sustainable prosperity.
          </p>

        </motion.div>


        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.3}}
          className="
          bg-white
          rounded-[35px]
          p-10
          mt-16
          shadow-2xl
          "
        >

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="border p-4 rounded-2xl"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border p-4 rounded-2xl"
              />

            </div>


            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="tel"
                placeholder="Phone / WhatsApp"
                className="border p-4 rounded-2xl"
              />

              <input
                type="text"
                placeholder="Country"
                className="border p-4 rounded-2xl"
              />

            </div>


            <input
              type="text"
              placeholder="Occupation"
              className="
              w-full
              border
              p-4
              rounded-2xl
              "
            />

            <select
              className="
              w-full
              border
              p-4
              rounded-2xl
              "
            >

              <option>
                Partnership Interest Level
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


            <textarea
              rows={5}
              placeholder="Why would you like to partner with us?"
              className="
              w-full
              border
              p-4
              rounded-2xl
              "
            />

            <button
              className="
              w-full
              bg-[#166534]
              text-white
              py-5
              rounded-full
              hover:scale-[1.02]
              transition
              font-bold
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