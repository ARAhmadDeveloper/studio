import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  welcomePillText: string;
  headlinePart1: string;
  headlinePart2: string;
  descriptionText: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  contactText: string;
  animate?: boolean;
}

export default function HeroSection({
  welcomePillText,
  headlinePart1,
  headlinePart2,
  descriptionText,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  contactText,
  animate = false,
}: HeroSectionProps) {
  return (
    <section className={cn(
      "relative w-full text-foreground py-20 md:py-32 min-h-[70vh] lg:min-h-[80vh] flex items-center bg-footer-background", // Changed background
      animate && "animate-fade-in-gentle" 
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl text-left">
            {/* Welcome Pill */}
            <div
              className={cn(
                "inline-flex items-center gap-2 bg-slate-100 text-blue-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 shadow-md",
                "opacity-0",
                animate && "animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
              )}
            >
              <span className="h-1.5 w-1.5 bg-blue-500 rounded-full"></span>
              {welcomePillText}
              <span className="h-1.5 w-1.5 bg-blue-500 rounded-full"></span>
            </div>

            {/* Headline */}
            <h1
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground",
                "opacity-0",
                 animate && "animate-[fade-in-up_0.8s_ease-out_0.4s_both]"
              )}
            >
              {headlinePart1}
              <br />
              {headlinePart2}
            </h1>
            
            {/* Description */}
            <p
              className={cn(
                "text-base sm:text-lg text-muted-foreground mb-8 max-w-xl",
                "opacity-0",
                animate && "animate-[fade-in-up_0.8s_ease-out_0.6s_both]"
              )}
            >
              {descriptionText}
            </p>

            {/* CTAs */}
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 mb-4",
                "opacity-0",
                animate && "animate-[fade-in-up_0.8s_ease-out_0.8s_both]"
              )}
            >
              <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white shadow-lg transform transition-transform hover:scale-105 focus:ring-sky-400">
                <Link href={primaryCtaLink} className="flex items-center justify-center sm:justify-start">
                  {primaryCtaText}
                  <span className="ml-2 bg-white rounded-full p-1.5 inline-flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-sky-500" />
                  </span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white hover:bg-sky-600 text-sky-700 border-gray-300 hover:border-gray-400 shadow-md transform transition-transform hover:scale-105 focus:ring-sky-400">
                <Link href={secondaryCtaLink} className="flex items-center justify-center sm:justify-start">
                  {secondaryCtaText}
                  <span className="ml-2 bg-sky-500 rounded-full p-1.5 inline-flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </span>
                </Link>

              </Button>
            </div>

            {/* Contact Text */}
            <a
              className={cn(
                "text-sm text-muted-foreground",
                "opacity-0 hover:underline cursor-pointer",
                 animate && "animate-[fade-in-up_0.8s_ease-out_0.9s_both]"
              )}
            >
              {contactText}
            </a>
          </div>
          <div className={cn(
            "hidden lg:flex justify-center items-center",
            "opacity-0",
            animate && "animate-[fade-in-up_0.8s_ease-out_1s_both]" // Added animation for image
          )}>
            
            <Image
              src={require("./img/rightHero.png")} 
              alt="Hero Image Placeholder"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl object-cover"
              data-ai-hint="abstract tech"
              priority // Good for LCP

            />

          </div>
        </div>
      </div>
    </section>
  );
}
