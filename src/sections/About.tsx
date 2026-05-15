"use client";

import Image from "next/image";
import aboutImage from "../images/wellness.jpeg";



export default function About() {
  return (

    <div
      id="about"
      className="grid md:grid-cols-2 gap-14 items-center"
    >
  {/* LEFT SIDE */}
  <div>

    <p className="uppercase tracking-widest text-[#166534] font-semibold">
      About Us
    </p>

    <h2 className="text-4xl md:text-6xl font-bold mt-4 text-gray-900">
      Transforming Lives Through Wellness & Empowerment
    </h2>

    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
      Organic Stemcell Health & Wealth Ltd is committed
      to restoring lives through trusted organic health
      solutions while creating sustainable opportunities
      for empowerment and prosperity.
    </p>

    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
      Through innovation, integrity, and excellence,
      we continue to impact individuals, families,
      and communities positively across Nigeria and beyond.
    </p>

  </div>

  {/* RIGHT SIDE IMAGE */}
  <div className="flex justify-center">

  <Image
    src={aboutImage}
    alt="About Image"
    className="rounded-3xl shadow-2xl w-full max-w-[400px] h-auto object-cover"
  />

</div>

</div>
  );
}