"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  BriefcaseBusiness,
  Users,
  GraduationCap,
  Leaf,
  Handshake,
} from "lucide-react";

const services = [
  {
    icon: HeartPulse,
    title: "Organic Health Solutions",
    description:
      "Providing natural wellness products that support healthy living and restoration.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Empowerment",
    description:
      "Creating sustainable wealth-building opportunities for individuals and families.",
  },
  {
    icon: Users,
    title: "Community Outreach",
    description:
      "Impacting communities through awareness campaigns and health initiatives.",
  },
  {
    icon: GraduationCap,
    title: "Training & Seminars",
    description:
      "Educating people on preventive healthcare, wellness, and financial growth.",
  },
  {
    icon: Leaf,
    title: "Natural Wellness Programs",
    description:
      "Promoting healthier lifestyles through organic and sustainable practices.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    description:
      "Building collaborative networks focused on transformation and global impact.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-gray-50 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">

          <p className="uppercase tracking-widest text-green-700 font-semibold">
            Our Services
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">
            What We Offer
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            We combine health transformation, empowerment,
            education, and strategic partnerships to create
            lasting impact and sustainable growth.
          </p>

        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold mt-8 text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-5 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}