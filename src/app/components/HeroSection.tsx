import React from "react";
import { IconChevronRight } from "./Icons";

export function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your
              <span className="text-green-600 block">Health &amp; Fitness</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional diet coaching and personalized nutrition plans to help you achieve your fitness goals. Join thousands who&apos;ve transformed their lives with Dietofits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center">
                Start Your Journey
                <IconChevronRight className="ml-2" size={20} />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition duration-300">
                View Programs
              </button>
            </div>
            {/* Contact Info */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="mr-2 text-green-600">📞</span>
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-green-600">✉️</span>
                <span>info@dietofits.com</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-green-100 rounded-3xl p-8 text-center">
              <div className="w-64 h-64 mx-auto bg-green-200 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-8xl">🎯</span>
              </div>
              <div className="mt-6">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Success Rate</span>
                    <span className="text-lg font-bold text-green-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
