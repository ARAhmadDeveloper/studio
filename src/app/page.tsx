
"use client";

import { useState, useEffect } from 'react';
import HeroSection from '@/components/hero-section';
import AiHeadlineGenerator from '@/components/ai-headline-generator';
import { Separator } from '@/components/ui/separator';
import FeaturesSection from '@/components/features-section'; // Import the new FeaturesSection

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

  const handleHeadlineGenerated = (newHeadline: string) => {
    console.log("AI Generated Headline:", newHeadline);
  };

  if (!isMounted) {
    // Basic skeleton for hero and features section to avoid layout shift
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <div className="w-full min-h-[70vh] md:min-h-[80vh] bg-background animate-pulse"></div>
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-16 md:mb-24 h-96 bg-muted rounded-lg animate-pulse"></div> {/* Placeholder for Features Section */}
          <Separator className="my-12 md:my-16" />
          <div className="mb-16 md:mb-24 h-64 bg-muted rounded-lg animate-pulse"></div> {/* Placeholder for AI Generator */}
        </main>
        <footer className="py-8 mt-16 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
            Loading...
          </div>
        </footer>
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
      
      <FeaturesSection /> {/* Add the new FeaturesSection here */}

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <Separator className="my-12 md:my-16" /> 
        <section id="generator" className="mb-16 md:mb-24 scroll-mt-20">
          <AiHeadlineGenerator
            onHeadlineGenerated={handleHeadlineGenerated}
          />
        </section>
      </main>
       <footer className="py-8 mt-auto border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} CloudVerse. Built with Next.js and Tailwind CSS.
        </div>
      </footer>
    </>
  );
}
