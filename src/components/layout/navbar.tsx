
"use client";

import Link from 'next/link';
import { Cloud, ChevronDown, ArrowRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navItems = [
  {
    label: "Products",
    href: "#products",
    subItems: [
      { label: "AI Solutions", href: "/products/ai-solutions" },
      { label: "Cloud Hosting", href: "/products/cloud-hosting" },
      { label: "Data Analytics", href: "/products/data-analytics" },
    ],
  },
  {
    label: "Platform",
    href: "#platform",
    subItems: [
      { label: "Developer API", href: "/platform/api" },
      { label: "Integrations", href: "/platform/integrations" },
      { label: "Security", href: "/platform/security" },
    ],
  },
  {
    label: "Solution",
    href: "#solutions",
    subItems: [
      { label: "For Startups", href: "/solutions/startups" },
      { label: "For Enterprise", href: "/solutions/enterprise" },
    ],
  },
  {
    label: "Resources",
    href: "#resources",
    subItems: [
      { label: "Documentation", href: "/resources/docs" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Support Center", href: "/resources/support" },
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // useEffect for isMounted can be used if client-specific logic that affects initial render is present.
  // For this navbar structure, it's generally not needed unless a hook like useIsMobile was directly used for conditional rendering.

  // Styles based on the provided image
  const navButtonBaseStyle = "px-4 py-2 text-sm font-medium rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950";
  const lightBlueButtonStyle = cn(navButtonBaseStyle, "text-[#0c4a6e] bg-[#e0f2fe] hover:bg-[#bae6fd] focus-visible:ring-[#38bdf8]");
  const primaryBlueButtonStyle = cn(navButtonBaseStyle, "bg-sky-500 text-white hover:bg-sky-600 focus-visible:ring-sky-500");
  const dropdownItemStyle = "text-[#0c4a6e] hover:!bg-[#bae6fd] focus:!bg-[#bae6fd] focus:!text-[#075985] rounded-[calc(var(--radius)-4px)]";


  const NavLinksContent = ({ inSheet = false }: { inSheet?: boolean }) => (
    <>
      {navItems.map((item) => (
        <DropdownMenu key={item.label}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                lightBlueButtonStyle,
                inSheet ? "w-full justify-start !bg-transparent !text-gray-100 hover:!bg-neutral-700 focus-visible:!ring-sky-500" : ""
              )}
            >
              {item.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className={cn(
                "bg-[#e0f2fe] border-none shadow-lg mt-1 py-1", // Removed border-[#bae6fd] as it's often too light, shadow is better
                inSheet ? "w-[calc(100vw-5rem)] sm:w-auto" : "min-w-[180px]" 
            )}
            align="start"
            >
            {item.subItems.map((subItem) => (
              <DropdownMenuItem key={subItem.label} asChild className={dropdownItemStyle}>
                <Link href={subItem.href} onClick={() => inSheet && setIsMobileMenuOpen(false)}>{subItem.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-950 shadow-sm"> {/* Navbar background: very dark */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Cloud className="h-7 w-7 sm:h-8 sm:w-8 text-sky-500" /> {/* Logo icon color */}
          <span className="text-xl sm:text-2xl font-bold text-gray-100">CloudVerse</span> {/* Logo text color */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <NavLinksContent />
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            className={lightBlueButtonStyle}
            asChild
          >
            <Link href="/login">Log In</Link>
          </Button>
          <Button
            className={cn(primaryBlueButtonStyle, "flex items-center gap-1.5")}
            asChild
          >
            <Link href="/signup">
              Sign Up <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-100 hover:bg-neutral-800 focus-visible:ring-1 focus-visible:ring-neutral-400">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[280px] sm:max-w-xs bg-neutral-900 p-0 border-l border-neutral-800 flex flex-col">
                <div className="p-4 border-b border-neutral-800">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Cloud className="h-7 w-7 text-sky-500" />
                    <span className="text-xl font-bold text-gray-100">CloudVerse</span>
                    </Link>
                </div>
                <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                  <NavLinksContent inSheet={true} />
                </nav>
                <div className="p-4 mt-auto border-t border-neutral-800 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-center text-gray-100 border-neutral-700 hover:bg-neutral-800 hover:text-gray-50 focus-visible:ring-neutral-400"
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/login">Log In</Link>
                  </Button>
                  <Button
                    className={cn(primaryBlueButtonStyle, "w-full justify-center flex items-center gap-1.5")}
                    asChild
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link href="/signup">
                      Sign Up <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

