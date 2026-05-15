"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Megaphone,
  Handshake,
} from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Rapidly Expanding Market Network",
    description:
      "Partner companies gain access to expanding operational centers across Lagos State, Nigeria, Africa, and future global markets.",
  },
  {
    icon: Megaphone,
    title: "Strategic Promotion & Brand Exposure",
    description:
      "Gain visibility through seminars, wellness campaigns, outreach programs, conferences, and promotional events.",
  },
  {
    icon: Handshake,
    title: "Long-Term Growth & Collaboration",
    description:
      "Become part of a mission-driven network focused on innovation, empowerment, sustainable growth, and global impact.",
  },
];

export default function Partnership() {
  return (
    <section
    id="partnership" 
    className="py-28 bg-gradient-to-br from-green-700 via-green-600 to-blue-900 text-white px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-widest text-yellow-300 font-semibold">
            Partnership Benefits
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            Why Companies Partner With Us
          </h2>

          <p className="mt-6 text-lg text-green-100 leading-relaxed">
            We create opportunities for sustainable growth,
            market expansion, brand visibility, and long-term
            collaboration through health transformation and
            economic empowerment initiatives.
          </p>

        </div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-white text-green-700 flex items-center justify-center">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold mt-8">
                  {benefit.title}
                </h3>

                <p className="mt-5 text-green-50 leading-relaxed">
                  {benefit.description}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">

          <a
  href="/partnership"
  className="
  inline-block
  bg-[#facc15]
  text-black
  px-8
  py-4
  rounded-full
  font-bold
  hover:bg-[#14532d]
  hover:scale-105
  transition-all
  duration-300
  shadow-lg
  "
>
  Become a Strategic Partner
</a>

        </div>

      </div>

    </section>
  );
}