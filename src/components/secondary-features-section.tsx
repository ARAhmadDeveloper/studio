
"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const secondaryFeaturesData = [
  {
    title: "Advanced Automation",
    description: "Our SaaS solution is built with the unique needs of entrepreneurs in mind",
    imageSrc: require("./img/f21.png"),
    imageAlt: "Advanced Automation illustration",
    aiHint: "line graph data" 
  },
  {
    title: "Dynamic Personalization",
    description: "Engage your audience like never before with personalized",
    imageSrc: require("./img/f22.png"),
    imageAlt: "Dynamic Personalization illustration",
    aiHint: "bar chart increasing"
  },
  {
    title: "Powerful Analytics",
    description: "Knowledge is power! Gain valuable insights into the performance",
    imageSrc: require("./img/f23.png"),
    imageAlt: "Powerful Analytics illustration",
    aiHint: "radial chart progress"
  },
];

interface SecondaryFeaturesSectionProps {
  animate?: boolean;
}

export default function SecondaryFeaturesSection({ animate = false }: SecondaryFeaturesSectionProps) {
  return (
    <section 
      id="more-features" 
      className={cn(
        "py-16 md:py-24 bg-footer-background scroll-mt-20",
        "opacity-0",
        animate && "animate-fade-in-gentle"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            FEATURES
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Empowering
            <br />
            Entrepreneurs for Success
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {secondaryFeaturesData.map((feature) => (
            <Card 
              key={feature.title} 
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              <CardContent className="flex flex-col flex-grow p-6 items-center text-center">
                <div className="aspect-video relative w-full max-w-[250px] h-[150px] mb-6 overflow-hidden rounded-md">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    fill
                    className="object-contain" // Use object-contain to ensure the whole image is visible
                    data-ai-hint={feature.aiHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 250px"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</CardTitle>
                <p className="text-muted-foreground text-sm flex-grow">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
