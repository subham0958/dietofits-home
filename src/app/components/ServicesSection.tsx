import React from "react";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your health and fitness journey</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-green-600 text-3xl">🎯</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personalized Diet Plans</h3>
            <p className="text-gray-600 mb-6">Custom nutrition plans tailored to your lifestyle, preferences, and health goals.</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Individual assessment</li>
              <li>• Custom meal planning</li>
              <li>• Regular monitoring</li>
              <li>• Lifestyle integration</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-green-600 text-3xl">👥</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Fitness Coaching</h3>
            <p className="text-gray-600 mb-6">Professional guidance to help you achieve your fitness goals safely and effectively.</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Personal training</li>
              <li>• Workout planning</li>
              <li>• Progress tracking</li>
              <li>• Motivation support</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-green-600 text-3xl">🏆</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Wellness Programs</h3>
            <p className="text-gray-600 mb-6">Comprehensive wellness solutions for long-term health and vitality.</p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Health assessments</li>
              <li>• Lifestyle coaching</li>
              <li>• Stress management</li>
              <li>• Ongoing support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
