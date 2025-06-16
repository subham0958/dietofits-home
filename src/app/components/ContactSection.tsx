import React from "react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 mb-8">Ready to start your transformation? Contact us today for a free consultation.</p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">📞</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Phone</div>
                  <div className="text-gray-600">+91 XXXXX XXXXX</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">✉️</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-gray-600">info@dietofits.com</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">📍</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Location</div>
                  <div className="text-gray-600">Your City, India</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 text-xl">⏰</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Hours</div>
                  <div className="text-gray-600">Mon-Sat: 9AM-7PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">Full Name</div>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">Phone Number</div>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">Email</div>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">Goal</div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Weight Loss</option>
                  <option>Weight Gain</option>
                  <option>Muscle Building</option>
                  <option>General Wellness</option>
                  <option>Medical Nutrition</option>
                </select>
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">Message</div>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your goals..."
                />
              </div>
              <button 
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                onClick={() => alert('Contact form submitted! (Integration needed)')}
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
