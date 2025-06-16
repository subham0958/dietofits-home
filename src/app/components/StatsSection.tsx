import React from "react";

export function StatsSection() {
  return (
    <section className="py-16 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-4xl font-bold mb-2">5000+</div>
            <div className="text-green-100">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-green-100">Success Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-green-100">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-green-100">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
