"use client";

import Image from "next/image";
import logo from "../images/logo.jpeg";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
 {name:"Home",href:"#home"},
 {name:"About",href:"#about"},
 {name:"Services",href:"#services"},
 {name:"Partnership",href:"#partnership"},
 {name:"Products",href:"#gallery"},
 {name:"Testimonials",href:"#testimonials"},
 {name:"Contact",href:"#contact"},
];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        

  <div className="flex items-center gap-3">

<Image
src={logo}
alt="Logo"
width={55}
height={55}
/>

<h1
className="
text-xl
md:text-2xl
font-extrabold
text-[#14532d]
leading-tight
"
>
ORGANIC STEMCELL
HEALTH & WEALTH LTD
</h1>

  </div>



        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-green-700 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}

        </ul>

        {/* Desktop CTA */}
        <a
  href="#partnership"
  className="hidden md:block bg-[#166534] text-white px-5 py-2 rounded-full hover:bg-[#16a34a] transition"
>
  Join Us
</a>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu
size={30}
className="text-[#166534]"
/>}
        </button>

      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >

            <div className="flex flex-col px-6 py-6 space-y-6">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-green-700 transition"
                >
                  {link.name}
                </Link>
              ))}

              <a
  href="#partnership"
  className="bg-[#166534] text-white py-3 rounded-full hover:bg-[#16a34a] transition text-center"
>
  Join Us
</a>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </header>
  );
}