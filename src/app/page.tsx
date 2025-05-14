
"use client";

import { useState, useEffect } from 'react';
import HeroSection from '@/components/hero-section';
// import AiHeadlineGenerator from '@/components/ai-headline-generator'; // Removed import
import { Separator } from '@/components/ui/separator';
import FeaturesSection from '@/components/features-section'; 
import AboutSection from '@/components/about-section'; 
import SecondaryFeaturesSection from '@/components/secondary-features-section';
import SalesSection from '@/components/sales-section';
import MarketSection from '@/components/market-section';
import CtaSection from '@/components/cta-section'; 

export default function HomePage() {
  const [animateHero, setAnimateHero] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setAnimateHero(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Removed handleHeadlineGenerated function
  // const handleHeadlineGenerated = (newHeadline: string) => {
  //   console.log("AI Generated Headline:", newHeadline);
  // };

  if (!isMounted) {
    // Basic skeleton for sections to avoid layout shift
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <div className="w-full min-h-[70vh] md:min-h-[80vh] bg-background animate-pulse"></div>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-16 md:mb-24 h-96 bg-muted rounded-lg animate-pulse"></div> {/* Placeholder for Features Section */}
          <div className="mb-16 md:mb-24 h-96 bg-muted rounded-lg animate-pulse"></div> {/* Placeholder for About Section */}
          <div className="mb-16 md:mb-24 h-96 bg-muted rounded-lg animate-pulse"></div> {/* Placeholder for Secondary Features Section */}
          <div className="mb-16 md:mb-24 h-96 bg-muted rounded-lg animate-pulse"></div> {/* Placeholder for Sales Section */}
          <div className="mb-16 md:mb-24 h-96 bg-muted rounded-lg animate-pulse"></div> {/* Placeholder for Market Section */}
          <div className="my-12 md:my-16 h-64 bg-muted rounded-xl animate-pulse"></div> {/* Placeholder for CtaSection */}
          {/* Removed Separator and Placeholder for AI Generator */}
        </main>
      </div>
    );
  }

  return (
    <> 
      <HeroSection
        welcomePillText="WELCOME TO CLOUDVERSE"
        headlinePart1="Efficient Operations"
        headlinePart2="Increased Revenue"
        descriptionText="When operations are efficient, its the way for revenue growth."
        primaryCtaText="GET STARTED"
        primaryCtaLink="/signup" 
        secondaryCtaText="LEARN MORE"
        secondaryCtaLink="#features"
        contactText="Contact for free"
        animate={animateHero}
      />
      
      <FeaturesSection />
      <AboutSection />
      <SecondaryFeaturesSection />
      <SalesSection />
      <MarketSection />
      <CtaSection /> 

      {/* Removed AI Headline Generator section and its wrapping main/section tags */}
    </>
  );
}
