
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const featuresData = [
  {
    title: "Tailored for Entrepreneurs",
    description: "Our SaaS solution is built with the unique needs of entrepreneurs in mind.",
    imageSrc: require("./img/f1.png"),
    imageAlt: "Tailored for Entrepreneurs illustration",
    aiHint: "line graph abstract"
  },
  {
    title: "Empowering Growth",
    description: "Our SaaS solution is built with the unique needs of entrepreneurs in mind.",
    imageSrc: require("./img/f2.png"),
    imageAlt: "Empowering Growth illustration",
    aiHint: "bar chart growth"
  },
  {
    title: "Dedicated Support",
    description: "Our SaaS solution is built with the unique needs of entrepreneurs in mind.",
    imageSrc: require("./img/f3.png"),
    imageAlt: "Dedicated Support illustration",
    aiHint: "chat interface support"
  },
  {
    title: "Affordability",
    description: "Control spend, remove reporting admin, and say goodbye to broker fees.",
    imageSrc: require("./img/f4.png"),
    imageAlt: "Affordability illustration",
    aiHint: "financial graph money"
  },
  {
    title: "All-in-one Place",
    description: "Manage policies from multiple providers in one single platform and make changes when necessary.",
    imageSrc: require("./img/f5.png"),
    imageAlt: "All-in-one Place illustration",
    aiHint: "abstract diagram organization"
  }
];

interface FeaturesSectionProps {
  animate?: boolean;
}

export default function FeaturesSection({ animate = false }: FeaturesSectionProps) {
  return (
    <section 
      id="features" 
      className={cn(
        "py-16 md:py-24 bg-background scroll-mt-20",
        "opacity-0", // Start hidden
        animate && "animate-fade-in-gentle" // Apply animation when prop is true
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Features
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Empowering
            <br />
            Entrepreneurs for Success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {featuresData.map((feature, index) => (
            <Card 
              key={feature.title} 
              className={cn(
                "flex flex-col overflow-hidden  shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg",
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              )}
               style={{
          backgroundColor: "#EBF5FD"
        }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{feature.description}</p>
                <div className="mt-auto aspect-video relative w-full overflow-hidden rounded-md">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    className="object-contain"
                    data-ai-hint={feature.aiHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
