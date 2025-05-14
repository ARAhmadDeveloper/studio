import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  description?: string;
  imageUrl: string;
  imageAlt?: string;
  dataAiHint?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  animate?: boolean;
}

export default function HeroSection({
  headline,
  subheadline,
  description,
  imageUrl,
  imageAlt = "Hero background image",
  dataAiHint,
  ctaPrimaryText,
  ctaPrimaryLink,
  ctaSecondaryText,
  ctaSecondaryLink,
  animate = false,
}: HeroSectionProps) {
  return (
    <section className={cn(
      "relative w-full min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center text-white overflow-hidden",
      animate && "animate-fade-in-gentle"
    )}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        priority
        className="object-cover -z-10"
        data-ai-hint={dataAiHint}
      />
      <div className="absolute inset-0 bg-black/50 -z-10" /> {/* Gradient/Solid Overlay */}
      
      <div className="relative z-10 p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
        <h1
          className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6",
            "opacity-0", // Initial state for animation
            animate && "animate-fade-in-up-hero-headline"
          )}
        >
          {headline}
        </h1>
        {subheadline && (
          <p
            className={cn(
              "text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-6 md:mb-8 max-w-2xl mx-auto",
              "opacity-0",
              animate && "animate-fade-in-up-hero-subheadline"
            )}
          >
            {subheadline}
          </p>
        )}
        {description && (
          <p
            className={cn(
              "text-base sm:text-lg text-primary-foreground/80 mb-8 md:mb-10 max-w-xl mx-auto",
               "opacity-0",
              animate && "animate-fade-in-up-hero-description"
            )}
          >
            {description}
          </p>
        )}
        {(ctaPrimaryText || ctaSecondaryText) && (
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center items-center",
              "opacity-0",
              animate && "animate-fade-in-up-hero-cta"
            )}
          >
            {ctaPrimaryText && ctaPrimaryLink && (
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform hover:scale-105">
                <Link href={ctaPrimaryLink}>
                  {ctaPrimaryText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
            {ctaSecondaryText && ctaSecondaryLink && (
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 shadow-md transform transition-transform hover:scale-105">
                <Link href={ctaSecondaryLink}>{ctaSecondaryText}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
