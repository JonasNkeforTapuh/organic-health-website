"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import gallery1 from "../../images/gallery1.jpeg";
import gallery2 from "../../images/gallery2.jpeg";
import gallery3 from "../../images/gallery3.jpeg";
import gallery4 from "../../images/gallery4.jpeg";
import gallery5 from "../../images/gallery5.jpeg";
import gallery6 from "../../images/gallery6.jpeg";
import gallery13 from "../../images/gallery13.jpeg";
import gallery8 from "../../images/gallery8.jpeg";
import gallery9 from "../../images/gallery9.jpeg";
import gallery10 from "../../images/gallery10.jpeg";
import gallery11 from "../../images/gallery11.jpeg";
import gallery12 from "../../images/gallery12.jpeg";

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

export default function ProductsPage() {

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  return (
    <>

      <Navbar />

      <section className="py-28 bg-gradient-to-b from-white to-gray-50 px-6">

        <div className="max-w-7xl mx-auto">

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

            <h1 className="
            text-4xl
            md:text-6xl
            font-bold
            mt-4
            text-gray-900
            ">
              Discover Our Powerful Healing Products
            </h1>

            <p className="
            mt-6
            text-lg
            text-gray-700
            ">
              Explore trusted wellness solutions carefully
              designed to restore health and improve lives.
            </p>

          </div>


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

            {images.map((image,index)=>(

              <motion.div
                key={index}
                onClick={()=>setSelectedImage(image.src)}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{delay:index*.05}}
                viewport={{once:true}}
                whileHover={{y:-8}}
                className="
                rounded-3xl
                overflow-hidden
                shadow-xl
                cursor-pointer
                group
                "
              >

                <Image
                  src={image}
                  alt=""
                  className="
                  w-full
                  h-44
                  sm:h-56
                  md:h-64
                  object-cover
                  duration-700
                  group-hover:scale-110
                  "
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>


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
            alt=""
            className="
            max-w-5xl
            max-h-[90vh]
            rounded-3xl
            "
          />

        </div>

      )}

      <Footer />

    </>
  );
}