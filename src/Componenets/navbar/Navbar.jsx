import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Branding */}
          <div className="flex items-center gap-2">
            {/* Insert your SVG logo here */}

               <svg width="63" height="50" viewBox="0 0 63 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="63" height="50" fill="url(#pattern0_7_12)"/>
      <defs>
      <pattern id="pattern0_7_12" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0_7_12" transform="matrix(0.00869565 0 0 0.0109565 0 -0.004)"/>
      </pattern>
      <image id="image0_7_12" width="115" height="92" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
      </defs>
      </svg>
            <div className="flex flex-col">
              <span className="text-green-900 text-xs sm:text-sm font-bold font-['Readex_Pro'] leading-tight">
                RIGHT TIME<br />MEDICALS
              </span>
              <span className="text-gray-900 text-xs font-bold font-['Arial'] leading-tight">
                Always on time...
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-wrap items-center gap-2 lg:gap-4 xl:gap-6">
            <a
              href="#"
              className="px-2 py-1 text-green-900 text-base lg:text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="px-2 py-1 text-neutral-600 text-base lg:text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="px-2 py-1 text-neutral-600 text-base lg:text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
            >
              Appointment
            </a>
            <a
              href="#"
              className="px-2 py-1 text-neutral-600 text-base lg:text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
            >
              Recruitment
            </a>
            <a
              href="#"
              className="px-2 py-1 text-neutral-600 text-base lg:text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="px-2 py-1 text-neutral-600 text-base lg:text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
            >
              News
            </a>
            <a
              href="#"
              className="px-2 py-1 text-neutral-600 text-base lg:text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="px-2 py-1 text-neutral-600 text-base lg:text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
            >
              Useful Information
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <span
              className={`block h-0.5 w-6 bg-green-900 mb-1.5 transition-all duration-300 ${
                open ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-green-900 mb-1.5 transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-green-900 transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-md flex flex-col items-center gap-4 py-6 animate-slide-down z-50">
            <a
              href="#"
              className="text-neutral-600 text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-neutral-600 text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="text-neutral-600 text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              Appointment
            </a>
            <a
              href="#"
              className="text-neutral-600 text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              Recruitment
            </a>
            <a
              href="#"
              className="text-neutral-600 text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              Services
            </a>
            <a
              href="#"
              className="text-neutral-600 text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              News
            </a>
            <a
              href="#"
              className="text-neutral-600 text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
            <a
              href="#"
              className="text-neutral-600 text-lg font-bold font-['Readex_Pro'] hover:text-green-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              Useful Information
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;