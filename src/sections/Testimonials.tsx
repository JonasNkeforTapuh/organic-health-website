"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import person1 from "../images/testimonial1.jpeg";
import person2 from "../images/testimonial2.jpeg";
import person3 from "../images/testimonial3.jpeg";
import person4 from "../images/testimonial4.jpeg";
import person5 from "../images/testimonial5.jpeg";
import person6 from "../images/testimonial6.jpeg";

const testimonials = [
  {
    name: "Skin Rash Transformation",
    role: "Before & After Healing",
    image: person1,
    message:
      "A woman suffering from severe facial rashes experienced complete skin transformation after consistently using our wellness products.",
  },

  {
    name: "Burn Scar Recovery",
    role: "Hot Water Burn Healing",
    image: person2,
    message:
      "After suffering serious facial burns from hot water, consistent use of Miiracell helped restore and clear her skin beautifully.",
  },

  {
    name: "Skin Disease Recovery",
    role: "Complete Body Healing",
    image: person3,
    message:
      "A man whose skin condition caused peeling and discomfort experienced total recovery and healthy skin restoration through Miiracell.",
  },

  {
    name: "Facial White Scar Healing",
    role: "Transformation Experience",
    image: person4,
    message:
      "A young man struggling with visible white facial scars experienced a life-changing transformation after using our healing products.",
  },

  {
    name: "Diabetic Ulcer Healing",
    role: "Wound Restoration",
    image: person5,
    message:
      "A severe diabetic wound on the leg completely healed and closed after dedicated use of Miiracell wellness solutions.",
  },

  {
    name: "Thyroid Neck Recovery",
    role: "Neck Swelling Restoration",
    image: person6,
    message:
      "A woman suffering from thyroid-related neck swelling regained a normal healthy appearance after consistent product usage.",
  },
];

export default function Testimonials() {

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  return (

    <section
      id="testimonials"
      className="py-28 bg-gradient-to-b from-gray-50 to-white px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center max-w-3xl mx-auto">

          <p className="
          uppercase
          tracking-widest
          text-[#166534]
          font-extrabold
          text-lg
          ">
            Real Transformations
          </p>

          <h2 className="
          text-3xl
          md:text-6xl
          font-bold
          mt-4
          text-gray-900
          ">
            Healing Testimonies & Success Stories
          </h2>

          <p className="
          mt-6
          text-lg
          text-gray-700
          ">
            Discover real-life transformation stories
            from individuals whose lives were positively
            impacted through our wellness solutions.
          </p>

        </div>


        {/* TESTIMONIAL GRID */}

        <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        mt-20
        ">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08
              }}
              whileHover={{
                y: -8
              }}
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              {/* IMAGE */}

              <div
                onClick={() =>
                  setSelectedImage(item.image.src)
                }
                className="
                cursor-pointer
                overflow-hidden
                "
              >

                <Image
                  src={item.image}
                  alt={item.name}
                  className="
                  w-full
                  h-72
                  object-cover
                  hover:scale-110
                  transition-all
                  duration-700
                  "
                />

              </div>


              {/* CONTENT */}

              <div className="p-8">

                {/* STARS */}

                <div className="
                flex
                gap-1
                text-[#facc15]
                ">

                  <Star fill="currentColor" size={18}/>
                  <Star fill="currentColor" size={18}/>
                  <Star fill="currentColor" size={18}/>
                  <Star fill="currentColor" size={18}/>
                  <Star fill="currentColor" size={18}/>

                </div>


                {/* TITLE */}

                <h3 className="
                mt-5
                text-2xl
                font-bold
                text-[#166534]
                leading-snug
                ">
                  {item.name}
                </h3>


                {/* ROLE */}

                <p className="
                mt-2
                text-sm
                font-semibold
                text-gray-500
                uppercase
                tracking-wide
                ">
                  {item.role}
                </p>


                {/* MESSAGE */}

                <p className="
                mt-5
                text-gray-700
                leading-relaxed
                ">
                  {item.message}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>


      {/* FULLSCREEN IMAGE PREVIEW */}

      {selectedImage && (

        <div
          onClick={() => setSelectedImage(null)}
          className="
          fixed
          inset-0
          bg-black/90
          z-50
          flex
          items-center
          justify-center
          px-4
          "
        >

          <img
            src={selectedImage}
            alt="Preview"
            className="
            max-w-5xl
            max-h-[90vh]
            rounded-3xl
            shadow-2xl
            "
          />

        </div>

      )}

    </section>
  );
}