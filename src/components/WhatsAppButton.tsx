"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2349058836314"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-4
        right-4
        md:bottom-6
        md:right-6
        bg-[#16a34a]
        hover:bg-[#166534]
        text-white
        w-14
        h-14
        md:w-16
        md:h-16
        rounded-full
        flex
        items-center
        justify-center
        shadow-2xl
        z-50
        transition
        hover:scale-110
      "
    >
      <MessageCircle size={30} />
    </a>
  );
}