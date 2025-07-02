import React, { useState } from "react";
import { Menu, X } from "lucide-react"

function Navbar({ navLinks, name }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-extrabold text-white">
          {name || "My Portfolio"}
        </h1>

        <div className="hidden sm:flex gap-4">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.id}`}
              className="px-3 py-1 no-underline hover:no-underline text-white hover:text-purple-300 hover:bg-white/10 rounded-md transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="sm:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

<div
  className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${
    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <div className="px-4 pb-4 flex flex-col gap-2">
    {navLinks.map((link, idx) => (
      <a
        key={idx}
        href={`#${link.id}`}
        onClick={() => setIsOpen(false)}
        className="text-white bg-white/10 no-underline hover:no-underline rounded-md px-4 py-2 text-sm hover:text-purple-300"
      >
        {link.label}
      </a>
    ))}
  </div>
</div>

    </nav>
  );
}

export default Navbar;
