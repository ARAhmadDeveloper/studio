
"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils';

const stats = [
  {
    value: "200+",
    description: "reconcile expenses, reducing manual effort and minimizing.",
  },
  {
    value: "400K",
    description: "Provide real-time visibility into spending patterns and budget",
  },
];

interface AboutSectionProps {
  animate?: boolean;
}

export default function AboutSection({ animate = false }: AboutSectionProps) {
  return (
    <section 
      id="about" 
      className={cn(
        "py-16 md:py-24 bg-footer-background",
        "opacity-0",
        animate && "animate-fade-in-gentle"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Placeholder Image/Block */}
          <div className="w-full h-80 lg:h-[450px] bg-slate-200 dark:bg-slate-700 rounded-lg shadow-lg flex items-center justify-center">
            {/* You can replace this div with an <Image /> component when ready */}
            <Image 
              src={require("./img/leftSide.png")} 
              alt="About section placeholder image" 
              width={600} 
              height={450} 
              className="rounded-lg object-cover"
              data-ai-hint="marketing team collaboration" 
            />
             {/* <p className="text-slate-500 dark:text-slate-400 text-lg">Placeholder Image Area</p> */}
          </div>

          {/* Right Column: Text Content */}
          <div className="max-w-xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Marketing
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Increase your sales via email marketing
            </h2>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground">
              Streamline the process of tracking and managing expenses by implementing robust automation features.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <p className="text-4xl lg:text-5xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
