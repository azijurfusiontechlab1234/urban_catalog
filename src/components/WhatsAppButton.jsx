import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hello%20Urban%20Mix%20Concrete,%20I%20need%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-5 
        right-5 
        z-50 
        bg-green-500 
        text-white 
        flex 
        items-center 
        gap-2
        px-4 
        py-3 
        rounded-full 
        shadow-lg 
        hover:bg-green-600 
        transition
      "
    >
      {/* ICON */}
      <span className="text-xl">💬</span>

      {/* TEXT (HIDDEN ON MOBILE) */}
      <span className="hidden sm:inline font-semibold">
        Chat Now
      </span>
    </a>
  );
};

export default WhatsAppButton;
