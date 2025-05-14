
"use client";

import { useState, useEffect } from 'react';
import HeroSection from '@/components/hero-section';
import AiHeadlineGenerator from '@/components/ai-headline-generator';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Zap, Palette } from 'lucide-react';

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

  // The AiHeadlineGenerator will call this, but it won't update the new static hero.
  // You can use this for other purposes or logging.
  const handleHeadlineGenerated = (newHeadline: string) => {
    console.log("AI Generated Headline:", newHeadline);
    // If you want to display this headline elsewhere, you'd manage state for that.
  };

  if (!isMounted) {
    // Basic skeleton for hero section to avoid layout shift
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <div className="w-full min-h-[70vh] md:min-h-[80vh] bg-neutral-900 animate-pulse"></div> {/* Darker pulse for new hero */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="mb-16 md:mb-24 h-64 bg-muted rounded-lg animate-pulse"></div>
          <Separator className="my-12 md:my-16" />
          <div className="h-40 bg-muted rounded-lg animate-pulse"></div>
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
        primaryCtaLink="/signup" // Placeholder link
        secondaryCtaText="LEARN MORE"
        secondaryCtaLink="#features" // Placeholder link
        contactText="Contact for free"
        animate={animateHero}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section id="generator" className="mb-16 md:mb-24 scroll-mt-20">
          <AiHeadlineGenerator
            onHeadlineGenerated={handleHeadlineGenerated}
            // currentHeadline prop is no longer relevant for the new static hero, 
            // but AiHeadlineGenerator might still use it internally or display it.
            // Consider removing if AiHeadlineGenerator is also being refactored.
            // currentHeadline="Enter keywords to generate a headline" 
          />
        </section>
        
        <Separator className="my-12 md:my-16" />

        <section id="features" className="text-center scroll-mt-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8 text-foreground">
            Why Choose CloudVerse HeroForge?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 md:mb-12">
            Our platform empowers you to create stunning digital experiences with ease, combining powerful features with an intuitive interface.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Palette className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Modern Design</h3>
              <p className="text-muted-foreground">
                Layouts adapt beautifully to all screen sizes, ensuring a perfect look on any device.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">AI-Assisted Content</h3>
              <p className="text-muted-foreground">
                Leverage AI for compelling text generation where you need it.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Easy to Use</h3>
              <p className="text-muted-foreground">
                Intuitive tools and controls to customize your application.
              </p>
            </div>
          </div>
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
