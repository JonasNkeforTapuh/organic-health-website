import { Mail, Phone } from "lucide-react";

import Image from "next/image";
import logo from "../images/logo.jpeg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white px-6 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <Image
  src={logo}
  alt="Company Logo"
  width={80}
  height={60}
  className="h-auto w-auto"
/>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Organic Stemcell Health & Wealth Ltd is committed to
            restoring lives, promoting healthy living, and empowering
            individuals through wellness and economic opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">
            Quick Links
          </h3>

          <ul className="mt-6 space-y-4 text-gray-400">
            <li>
  <a href="#home" className="hover:text-white transition">
    Home
  </a>
</li>
            <li>
  <a href="#home" className="hover:text-white transition">
    About
  </a>
</li>
            <li>
  <a href="#services" className="hover:text-white transition">
    Services
  </a>
</li>
            <li>
  <a href="#partnership" className="hover:text-white transition">
    Partnership
  </a>
</li>
            <li>
  <a href="#contact" className="hover:text-white transition">
    Contact
  </a>
</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold">
            Services
          </h3>

          <ul className="mt-6 space-y-4 text-gray-400">
            <li>Organic Wellness</li>
            <li>Business Empowerment</li>
            <li>Community Outreach</li>
            <li>Training & Seminars</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold">
            Contact Us
          </h3>

          <div className="mt-6 space-y-5 text-gray-400">

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+234 0707 2353 176</span>
            </div>

            <div className="flex items-start gap-3 break-all">
  <Mail size={18} className="mt-1 shrink-0" />

  <span>
    organicstemcellhealthandwealth@gmail.com
  </span>
</div>

            <div className="flex items-start gap-3">
  <span className="text-lg">📍</span>

  <span>
    Lagos State, Nigeria
  </span>
</div>

          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-8">

            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-700 transition cursor-pointer">
              <FaFacebookF size={18} />
            </div>

            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-700 transition cursor-pointer">
              <FaInstagram size={18} />
            </div>

            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-700 transition cursor-pointer">
              <FaLinkedinIn size={18} />
            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
        © 2026 Organic Stemcell Health & Wealth Ltd. All rights reserved.
      </div>

    </footer>
  );
}