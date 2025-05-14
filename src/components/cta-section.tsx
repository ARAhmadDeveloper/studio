
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CtaSectionProps {
  animate?: boolean;
}

export default function CtaSection({ animate = false }: CtaSectionProps) {
  return (
    <section 
      className={cn(
        "py-16 md:py-24 bg-gradient-to-b from-sky-100 via-sky-50 to-background rounded-xl shadow-lg my-12 md:my-16 mx-auto max-w-6xl",
        "opacity-0",
        animate && "animate-fade-in-gentle"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
          Seamless integration to all
          <br />
          your best Apps
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-10">
          Maximize your email growth with our powerful integrations, fueled by data-driven insights.
          Embrace the future of business by leveraging our cutting-edge tools to bring in more data
          and drive unparalleled growth for your company.
        </p>
        <Button asChild size="lg" className="bg-sky-500 hover:bg-sky-600 text-white shadow-lg rounded-full px-8 py-3 text-base font-semibold transform transition-transform hover:scale-105 focus:ring-sky-400">
          <Link href="/signup" className="flex items-center justify-center">
            GET STARTED
            <span className="ml-3 bg-white rounded-full p-1.5 inline-flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-sky-500" />
            </span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
