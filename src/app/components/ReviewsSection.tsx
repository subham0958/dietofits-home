import React from "react";
import { IconStar, IconChevronRight } from "./Icons";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="flex items-center justify-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} fill="currentColor" size={24} />
              ))}
            </div>
            <span className="ml-2 text-gray-600">4.9/5 based on 500+ reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} fill="currentColor" size={16} />
              ))}
            </div>
            <p className="text-gray-600 mb-6">&quot;Dietofits completely transformed my relationship with food. Lost 25kg in 6 months and feel amazing!&quot;</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-semibold">SK</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Priya Sharma</div>
                <div className="text-sm text-gray-600">Mumbai</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} fill="currentColor" size={16} />
              ))}
            </div>
            <p className="text-gray-600 mb-6">&quot;Professional approach and genuine care. The personalized diet plan worked perfectly for my lifestyle.&quot;</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-semibold">RK</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Rahul Kumar</div>
                <div className="text-sm text-gray-600">Delhi</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <IconStar key={i} fill="currentColor" size={16} />
              ))}
            </div>
            <p className="text-gray-600 mb-6">&quot;Best investment in my health. The team is supportive and the results speak for themselves.&quot;</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-green-600 font-semibold">AM</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Anita Mehta</div>
                <div className="text-sm text-gray-600">Bangalore</div>
              </div>
            </div>
          </div>
        </div>
        {/* Google Reviews Integration Placeholder */}
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold">
            View all Google Reviews
            <IconChevronRight className="ml-1" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
