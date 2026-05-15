"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import gallery1 from "../images/gallery1.jpeg";
import gallery2 from "../images/gallery2.jpeg";
import gallery3 from "../images/gallery3.jpeg";
import gallery4 from "../images/gallery4.jpeg";
import gallery5 from "../images/gallery5.jpeg";
import gallery6 from "../images/gallery6.jpeg";
import gallery13 from "../images/gallery13.jpeg";
import gallery8 from "../images/gallery8.jpeg";
import gallery9 from "../images/gallery9.jpeg";
import gallery10 from "../images/gallery10.jpeg";
import gallery11 from "../images/gallery11.jpeg";
import gallery12 from "../images/gallery12.jpeg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery13,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
];

export default function Gallery() {

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-28 bg-gradient-to-b from-white to-gray-50 px-6"
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
  Our Products
</p>

          <h2 className="
text-3xl
md:text-6xl
font-bold
mt-4
text-gray-900
">
  Discover Our Powerful Healing Products
</h2>

          <p className="
mt-6
text-lg
text-gray-700
">
  Explore our trusted organic and wellness products
  carefully designed to restore health, promote
  healing, and improve quality of life.
</p>

        </div>


        {/* GALLERY GRID */}

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-5
          mt-20
          "
        >

          {images.map((image, index) => (

            <motion.div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05
              }}
              whileHover={{
                y: -8
              }}
              className="
              relative
              cursor-pointer
              overflow-hidden
              rounded-3xl
              shadow-lg
              group
              "
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                className="
                w-full
                h-44
                sm:h-56
                md:h-64
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                "
              />

              {/* overlay */}

              <div className="
              absolute
              inset-0
              bg-black/0
              group-hover:bg-black/20
              transition-all
              duration-500
              "></div>

            </motion.div>

          ))}

        </div>

      </div>


      {/* FULLSCREEN IMAGE */}

      {selectedImage && (

        <div
          onClick={() => setSelectedImage(null)}
          className="
          fixed
          inset-0
          bg-black/90
          z-50
          flex
          flex-col
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
            max-h-[85vh]
            rounded-3xl
            shadow-2xl
            "
          />

          <p className="
          text-white
          mt-6
          text-sm
          ">
            Tap anywhere to close
          </p>

        </div>

      )}

    </section>
  );
}