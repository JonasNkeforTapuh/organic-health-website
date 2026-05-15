"use client";

import { motion } from "framer-motion";
import { HeartPulse, Handshake, Leaf } from "lucide-react";

const values = [
  {
    icon: HeartPulse,
    title: "Health",
    description:
      "Promoting healthier lifestyles through organic wellness solutions.",
  },
  {
    icon: Handshake,
    title: "Empowerment",
    description:
      "Creating wealth and partnership opportunities for communities.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Supporting natural and sustainable approaches to wellbeing.",
  },
];

export default function Values() {
  return (
    <section className="py-24 bg-gray-50 px-6">

      <div className="max-w-7xl mx-auto text-center">

        <p className="text-green-700 font-semibold uppercase tracking-widest">
          Core Values
        </p>

        <h2 className="text-4xl font-bold mt-4 text-gray-900">
          What We Stand For
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-10 shadow-lg hover:-translate-y-2 transition"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-semibold mt-6">
                  {value.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}