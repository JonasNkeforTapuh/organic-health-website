"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "20+",
    label: "Target Operational Centers",
  },
  {
    number: "36",
    label: "States for Future Expansion",
  },
  {
    number: "1000+",
    label: "Lives to Impact",
  },
  {
    number: "Global",
    label: "Long-Term Vision",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-green-700 text-white px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">

        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold">
              {stat.number}
            </h2>

            <p className="mt-4 text-lg text-green-100">
              {stat.label}
            </p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}