import React from "react";

export function Header({ isMenuOpen, toggleMenu }: { isMenuOpen: boolean; toggleMenu: () => void }) {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-green-600">DIET O&apos; FITS</h1>
              <p className="text-sm text-green-500">The Diet Clinic</p>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">About</a>
              <a href="#reviews" className="text-gray-700 hover:text-green-600 px-3 py-2 font-medium">Reviews</a>
              <a href="#contact" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">Contact</a>
            </div>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-green-600">
              {isMenuOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-green-600">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600">About</a>
            <a href="#reviews" className="block px-3 py-2 text-gray-700 hover:text-green-600">Reviews</a>
            <a href="#contact" className="block px-3 py-2 bg-green-600 text-white rounded-lg mx-3">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
