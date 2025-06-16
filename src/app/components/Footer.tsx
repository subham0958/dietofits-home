import React from "react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4">DIET O&apos; FITS</h3>
            <p className="text-gray-300 mb-4">The Diet Clinic</p>
            <p className="text-gray-400">Transforming lives through personalized nutrition and fitness coaching.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Diet Planning</li>
              <li>Fitness Coaching</li>
              <li>Wellness Programs</li>
              <li>Medical Nutrition</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Success Stories</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+91 XXXXX XXXXX</li>
              <li>info@dietofits.com</li>
              <li>Your City, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dietofits - The Diet Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
