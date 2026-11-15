'use client'

import { useState } from 'react'
import { useScrollTO } from '../context/ScrollTO';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ["ABOUT", "PROJECTS", "CONTACT"]

  const {setScrollTo} = useScrollTO();

  const handleNavItemClick = (item) => {
    setScrollTo(item);
    const sectionId = item.toLowerCase();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-0 z-50">
      <header className="flex items-center justify-between px-6 sm:px-12 py-4 bg-zinc-950 border-b border-zinc-900">
        {/* Logo */}
        <div>
          <h1 className="text-[#c8f400] font-black text-sm sm:text-xl tracking-tight cursor-pointer">
            <i>HARSH CREATE'S</i>
          </h1>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8 text-sm font-medium tracking-wide text-gray-400">
            {navItems.map((item) => (
              <li
                key={item}
                data-text={item}
                className="
                  cursor-pointer transition duration-150 py-1
                  hover:font-semibold hover:text-gray-200
                  after:block after:content-[attr(data-text)] after:font-semibold after:h-0 after:overflow-hidden after:invisible
                "
                onClick={() => handleNavItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Trigger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-900 focus:outline-none transition duration-150"
            aria-label="Toggle Menu"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Dropdown Menu */}
      <div 
        className={`${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} 
          md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-zinc-950 border-b border-zinc-900`}
      >
        <ul className="px-6 pt-2 pb-6 space-y-3 text-sm font-semibold tracking-wide" onClick={() => setIsOpen(false)}>
          {navItems.map((item) => (
            <li
              key={item}
              className="block cursor-pointer py-2 text-gray-400 hover:text-[#c8f400] transition duration-150"
              onClick={() => handleNavItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
