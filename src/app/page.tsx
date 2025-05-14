
"use client";

import { useState, useEffect } from 'react';
import HeroSection from '@/components/hero-section';
import AiHeadlineGenerator from '@/components/ai-headline-generator';
import { Separator } from '@/components/ui/separator';
// Button and Link are no longer needed directly for CTAs if handled by Navbar
import { CheckCircle, Zap, Palette } from 'lucide-react';

export default function HomePage() {
  const [headline, setHeadline] = useState("Craft Your Perfect Hero Section");
  const [subheadline, setSubheadline] = useState("Visually stunning, AI-powered, and fully responsive. Start building compelling user experiences today.");
  const [description, setDescription] = useState("Utilize our intuitive tools and AI assistance to generate captivating headlines and design hero sections that convert. Perfect for marketers, designers, and developers.");
  
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
    setHeadline(newHeadline);
    setAnimateHero(false); 
    setTimeout(() => setAnimateHero(true), 50);
  };

  if (!isMounted) {
    // Basic skeleton for hero section to avoid layout shift
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <div className="w-full min-h-[70vh] md:min-h-[80vh] bg-muted animate-pulse"></div>
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
    // Removed the outer div with flex flex-col min-h-screen from here, as it's now in RootLayout
    <> 
      <HeroSection
        headline={headline}
        subheadline={subheadline}
        description={description}
        imageUrl="https://placehold.co/1920x1080.png"
        imageAlt="Abstract vibrant waves"
        dataAiHint="technology abstract"
        ctaPrimaryText="Try AI Generator"
        ctaPrimaryLink="#generator" // Updated to scroll to section
        ctaSecondaryText="Explore Features"
        ctaSecondaryLink="#features" // Updated to scroll to section
        animate={animateHero}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section id="generator" className="mb-16 md:mb-24 scroll-mt-20"> {/* Added scroll-mt-20 for navbar offset */}
          <AiHeadlineGenerator
            onHeadlineGenerated={handleHeadlineGenerated}
            currentHeadline={headline}
          />
        </section>
        
        <Separator className="my-12 md:my-16" />

        <section id="features" className="text-center scroll-mt-20"> {/* Added scroll-mt-20 for navbar offset */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8 text-foreground">
            Why Choose HeroForge?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 md:mb-12">
            HeroForge empowers you to create stunning hero sections with ease, combining powerful features with an intuitive interface.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Palette className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Responsive Design</h3>
              <p className="text-muted-foreground">
                Layouts adapt beautifully to all screen sizes, ensuring a perfect look on any device.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">AI-Powered Text</h3>
              <p className="text-muted-foreground">
                Generate compelling headlines instantly with our integrated AI content tool.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">Easy Customization</h3>
              <p className="text-muted-foreground">
                Full control over text, images, and calls-to-action to match your brand.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* Footer is moved to RootLayout for global presence, or can be kept here if page-specific */}
       <footer className="py-8 mt-auto border-t border-border"> {/* Added mt-auto to push to bottom */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} CloudVerse & HeroForge. Built with Next.js and Tailwind CSS.
        </div>
      </footer>
    </>
  );
}

