"use client";

import Image from "next/image";
import aboutImage from "../images/wellness.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT */}

        <div>

          <p
            className="
            uppercase
            tracking-widest
            text-[#166534]
            font-extrabold
            text-xl
            "
          >
            About Us
          </p>

          <h2
            className="
            text-3xl
            md:text-6xl
            font-bold
            mt-4
            text-gray-900
            leading-tight
            "
          >
            Transforming Lives Through Wellness & Empowerment
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-gray-700
            leading-loose
            "
          >
            Organic Stemcell Health & Wealth Ltd is committed
            to restoring lives through trusted organic health
            solutions while creating sustainable opportunities
            for empowerment and prosperity.
          </p>

          <p
            className="
            mt-6
            text-lg
            text-gray-700
            leading-loose
            "
          >
            Through innovation, integrity and excellence,
            we continue impacting individuals, families
            and communities positively across Nigeria
            and beyond.
          </p>

        </div>


        {/* RIGHT IMAGE */}

        <div className="flex justify-center">

          <Image
            src={aboutImage}
            alt="About Image"
            className="
            rounded-3xl
            shadow-2xl
            w-full
            max-w-[420px]
            h-auto
            object-cover
            "
          />

        </div>

      </div>
    </section>
  );
}