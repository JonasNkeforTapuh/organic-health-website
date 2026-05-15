"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import person1 from "../images/testimonial1.jpeg";
import person2 from "../images/testimonial2.jpeg";
import person3 from "../images/testimonial3.jpeg";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Health Consultant",
    image: person1,
    message:
      "The wellness solutions and empowerment programs have positively transformed many lives in our community.",
  },

  {
    name: "Michael David",
    role: "Business Partner",
    image: person2,
    message:
      "Their vision for health transformation and financial empowerment is truly inspiring and impactful.",
  },

  {
    name: "Grace Williams",
    role: "Community Leader",
    image: person3,
    message:
      "Professionalism, integrity, and genuine care are what make this organization stand out.",
  },
];

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <section
      id="testimonials"
      className="py-28 bg-gray-50 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-widest text-[#166534] font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">
            What People Say About Us
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Hear from individuals and partners who have
            experienced the impact of our mission and services.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                y: -8
              }}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:shadow-2xl
              transition
              duration-500
              "
            >

              {/* IMAGE */}
              <div className="flex justify-center">

                <Image
                  src={item.image}
                  alt={item.name}
                  className="
                  w-30
                  h-30
                  rounded-full
                  object-cover
                  border-4
                  border-[#16a34a]
                  "
                />

              </div>

              {/* STARS */}
              <div className="flex justify-center gap-1 mt-6 text-[#facc15]">

                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />

              </div>

              {/* MESSAGE */}
              <p className="mt-6 text-center text-gray-600 leading-relaxed">
                "{item.message}"
              </p>

              {/* NAME */}
              <div className="mt-8 text-center">

                <h4 className="font-bold text-lg text-gray-900">
                  {item.name}
                </h4>

                <p className="text-[#166534]">
                  {item.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}