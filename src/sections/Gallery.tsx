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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-28 bg-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-widest text-[#166534] font-semibold">
            Our Gallery
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">
            Moments of Impact & Transformation
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Explore highlights from our wellness initiatives,
            empowerment programs, outreach activities,
            and community engagements.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">

          {images.map((image, index) => (

            <motion.div
              key={index}
              onClick={() => setSelectedImage(image.src)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer overflow-hidden rounded-3xl shadow-lg"
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 sm:h-72 object-cover rounded-2xl hover:scale-105 transition duration-500"
              />

            </motion.div>

          ))}

        </div>

      </div>

      {/* Fullscreen Preview */}

      {selectedImage && (

        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-4xl max-h-[90vh] rounded-3xl"
          />

        </div>

      )}

    </section>
  );
}