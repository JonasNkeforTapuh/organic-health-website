"use client";

import { motion } from "framer-motion";

const objectives = [
  {
    title: "Promote Healthy Living",
    description:
      "Providing safe, effective, and high-quality organic health products and wellness solutions.",
  },
  {
    title: "Empower Financial Growth",
    description:
      "Creating sustainable business and wealth-building opportunities for individuals and families.",
  },
  {
    title: "Build Trust Through Excellence",
    description:
      "Maintaining integrity, professionalism, and customer satisfaction in all operations.",
  },
  {
    title: "Expand Awareness on Natural Health",
    description:
      "Educating communities through seminars, training, and wellness outreach programs.",
  },
  {
    title: "Create Positive Social Impact",
    description:
      "Supporting communities, creating opportunities, and promoting sustainable development.",
  },
];

export default function Organization() {
  return (
    <section className="py-28 bg-white px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center max-w-4xl mx-auto">

          <p className="
          text-[#166534]
          font-extrabold
          uppercase
          tracking-widest
          text-lg
          ">
            Our Foundation
          </p>

          <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          mt-4
          text-gray-900
          ">
            Mission, Vision & Objectives
          </h2>

        </div>


        {/* Mission + Vision */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="
            bg-green-700
            text-white
            rounded-3xl
            p-10
            shadow-xl
            "
          >

            <h3 className="text-3xl font-bold">
              Our Mission
            </h3>

            <p className="
            mt-6
            leading-loose
            text-lg
            text-white
            ">
              To become a beacon of hope by introducing trusted natural
              and organic health solutions that restore lives,
              promote healthy living and empower individuals
              toward financial freedom and prosperity.
            </p>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
            bg-blue-900
            text-white
            rounded-3xl
            p-10
            shadow-xl
            "
          >

            <h3 className="text-3xl font-bold">
              Our Vision
            </h3>

            <p className="
            mt-6
            leading-loose
            text-lg
            text-white
            ">
              To become a leading global health and wealth
              empowerment organization expanding across
              Nigeria, Africa and the world.
            </p>

          </motion.div>

        </div>


        {/* OBJECTIVES */}

        <div className="mt-24">

          <div className="text-center">

            <h3 className="
            text-4xl
            font-bold
            text-gray-900
            ">
              Our Objectives
            </h3>

          </div>


          <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-16
          ">

            {objectives.map((objective, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .15 }}
                viewport={{ once: true }}
                className="
                bg-gray-50
                rounded-3xl
                p-8
                shadow-md
                hover:shadow-2xl
                transition-all
                duration-300
                "
              >

                <div className="
                w-14
                h-14
                rounded-full
                bg-green-100
                text-[#166534]
                flex
                items-center
                justify-center
                font-bold
                text-2xl
                ">
                  {index + 1}
                </div>

                <h4 className="
                text-xl
                font-extrabold
                text-[#166534]
                mt-6
                leading-snug
                ">
                  {objective.title}
                </h4>

                <p className="
                mt-4
                text-gray-700
                leading-relaxed
                ">
                  {objective.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}