"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../images/hero.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#166534] via-[#16a34a] to-[#0f172a] text-white px-6 py-24"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

        {/* LEFT CONTENT */}
        <div className="text-left">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Restoring Health,
            <br />
            Creating Wealth,
            <br />
            Transforming Lives.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-2xl text-gray-200"
          >
            Organic wellness solutions for healthier living,
            empowerment, and sustainable prosperity.
          </motion.p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <a
              href="#partnership"
              className="bg-[#facc15] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition inline-block text-center"
            >
              Become a Partner
            </a>

            <a
              href="#services"
              className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition inline-block text-center"
            >
              Explore Services
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  whileHover={{ scale: 1.02 }}
  className="relative flex justify-center"
>
          <Image
            src={heroImage}
            alt="Organic Wellness"
            className="
rounded-3xl
shadow-2xl
w-full
max-w-[450px]
h-auto
transition
duration-500
hover:scale-105
"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}