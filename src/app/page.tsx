'use client';

import React, { useState } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { ServicesSection } from "./components/ServicesSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

const DietofitsLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default DietofitsLanding;
