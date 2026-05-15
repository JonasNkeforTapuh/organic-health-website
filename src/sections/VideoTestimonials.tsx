"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const videos = [
  {
    src: "/videos/testimony1.mp4",
    title: "Health Transformation Story",
  },
  {
    src: "/videos/testimony2.mp4",
    title: "Business Success Experience",
  },
  {
    src: "/videos/testimony3.mp4",
    title: "Community Impact Story",
  },
  {
    src: "/videos/testimony4.mp4",
    title: "Wellness Testimony",
  },
];

export default function VideoTestimonials() {
  return (
    <section
      id="video-testimonials"
      className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center max-w-3xl mx-auto">

          <p
            className="
            uppercase
            tracking-widest
            text-[#166534]
            font-extrabold
            text-lg
            "
          >
            Video Testimonials
          </p>

          <h2
            className="
            text-3xl
            md:text-6xl
            font-bold
            mt-4
            text-gray-900
            "
          >
            Watch Real Stories & Experiences
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-gray-700
            "
          >
            Hear directly from people whose lives
            have been transformed through our
            programs and wellness solutions.
          </p>

        </div>


        {/* VIDEO GRID */}

        <div
          className="
          grid
          md:grid-cols-2
          gap-10
          mt-20
          "
        >

          {videos.map((video, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1
              }}
              whileHover={{
                y: -8
              }}
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-xl
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div className="relative">

                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="
                  w-full
                  h-[250px]
                  md:h-[350px]
                  object-cover
                  "
                >
                  <source
                    src={video.src}
                    type="video/mp4"
                  />

                  Your browser does not support videos.

                </video>


                <div className="
                absolute
                top-4
                right-4
                bg-black/60
                text-white
                px-3
                py-2
                rounded-full
                flex
                items-center
                gap-2
                text-sm
                ">

                  <PlayCircle size={16}/>
                  Video

                </div>

              </div>


              <div className="p-6">

                <h3 className="
                font-bold
                text-xl
                text-[#166534]
                ">
                  {video.title}
                </h3>

                <p className="
                mt-3
                text-gray-600
                ">
                  Real experiences from people
                  impacted by our health and
                  empowerment programs.
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}