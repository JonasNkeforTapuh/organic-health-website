import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import logo from "../images/logo1.jpeg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white px-6 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* COMPANY */}

        <div>

          <div className="flex items-center gap-4">

            <Image
              src={logo}
              alt="Company Logo"
              width={55}
              height={55}
              className="
              rounded-full
              object-cover
              "
            />

            <div>

              <h2 className="
              font-extrabold
              text-[#16a34a]
              text-lg
              ">
                ORGANIC NATURE
              </h2>

              <p className="
              text-sm
              text-gray-300
              font-semibold
              ">
                HEALTH & WEALTH LTD
              </p>

            </div>

          </div>


          <p className="
          mt-6
          text-gray-400
          leading-relaxed
          ">
            Organic Nature Health & Wealth Ltd is committed
            to restoring lives, promoting healthy living
            and empowering individuals through wellness
            and economic opportunities.
          </p>

        </div>


        {/* QUICK LINKS */}

        <div>

          <h3 className="
          text-xl
          font-bold
          text-white
          ">
            Quick Links
          </h3>

          <ul className="
          mt-6
          space-y-4
          text-gray-400
          ">

            <li>
              <a href="#home" className="hover:text-[#16a34a] transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-[#16a34a] transition">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-[#16a34a] transition">
                Services
              </a>
            </li>

            <li>
              <a href="#partnership" className="hover:text-[#16a34a] transition">
                Partnership
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#16a34a] transition">
                Contact
              </a>
            </li>

          </ul>

        </div>


        {/* SERVICES */}

        <div>

          <h3 className="
          text-xl
          font-bold
          text-white
          ">
            Services
          </h3>

          <ul className="
          mt-6
          space-y-4
          text-gray-400
          ">

            <li>Organic Wellness</li>
            <li>Business Empowerment</li>
            <li>Community Outreach</li>
            <li>Training & Seminars</li>

          </ul>

        </div>


        {/* CONTACT */}

        <div>

          <h3 className="
          text-xl
          font-bold
          text-white
          ">
            Contact Us
          </h3>


          <div className="
          mt-6
          space-y-6
          text-gray-300
          ">

            <div className="flex items-center gap-4">

              <Phone
                className="text-[#16a34a]"
                size={18}
              />

              <span>
                +234 0707 2353 176
              </span>

            </div>


            <div className="
            flex
            items-start
            gap-4
            break-all
            ">

              <Mail
                className="text-[#16a34a] mt-1"
                size={18}
              />

              <span>
                organicnaturehealthandwealth@gmail.com
              </span>

            </div>


            <div className="
            flex
            items-start
            gap-4
            ">

              <MapPin
                className="text-[#16a34a]"
                size={18}
              />

              <span>
                Lagos State, Nigeria
              </span>

            </div>

          </div>


          {/* SOCIALS */}

          <div className="flex gap-4 mt-8">

            <a
              href="https://www.facebook.com/profile.php?id=61590085462574"
              className="
              w-10
              h-10
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              hover:bg-[#16a34a]
              transition-all
              duration-300
              hover:scale-110
              "
            >
              <FaFacebookF size={18}/>
            </a>


            <a
              href="#"
              className="
              w-10
              h-10
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              hover:bg-[#16a34a]
              transition-all
              duration-300
              hover:scale-110
              "
            >
              <FaInstagram size={18}/>
            </a>


            <a
              href="#"
              className="
              w-10
              h-10
              rounded-full
              bg-white/10
              flex
              items-center
              justify-center
              hover:bg-[#16a34a]
              transition-all
              duration-300
              hover:scale-110
              "
            >
              <FaLinkedinIn size={18}/>
            </a>

          </div>

        </div>

      </div>


      {/* BOTTOM */}

      <div className="
      border-t
      border-white/10
      mt-16
      pt-8
      text-center
      text-gray-500
      ">

        © 2026 Organic Nature Health & Wealth Ltd.
        All rights reserved.

      </div>

    </footer>
  );
}