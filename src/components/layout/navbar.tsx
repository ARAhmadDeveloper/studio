
"use client";

import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import { ChevronDown, ArrowRight, Menu } from 'lucide-react';
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
  
  const navButtonBaseStyle = "px-4 py-2 text-sm font-medium rounded-full focus-visible:ring-2 focus-visible:ring-offset-2";
  const navLinkButtonStyle = cn(navButtonBaseStyle, "text-sky-700 bg-white border border-sky-100 hover:bg-sky-50 focus-visible:ring-sky-500 focus-visible:ring-offset-footer-background");
  const primaryBlueButtonStyle = cn(navButtonBaseStyle, "bg-sky-500 text-white hover:bg-sky-600 focus-visible:ring-sky-500 focus-visible:ring-offset-footer-background");
  const dropdownItemStyle = "text-sky-700 hover:!bg-sky-50 focus:!bg-sky-50 focus:!text-sky-800 rounded-[calc(var(--radius)-4px)]";


  const NavLinksContent = ({ inSheet = false }: { inSheet?: boolean }) => (
    <>
      {navItems.map((item) => (
        <DropdownMenu key={item.label}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                navLinkButtonStyle, 
                inSheet ? "w-full justify-start !bg-transparent !text-red focus-visible:!ring-red-500" : ""
              )}
            >
              {item.label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className={cn(
                "bg-white border border-sky-100 shadow-lg mt-1 py-1", 
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
    <header className="sticky top-0 z-50 w-full bg-footer-background shadow-sm"> 
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image 
            src={require("./CloudVerseLogo.png")}
            alt="CloudVerse Logo" 
            width={32} 
            height={32} 
            className="h-8 w-8 sm:h-8 sm:w-8" // Adjusted size for image
          />
          <span className="text-xl sm:text-2xl font-bold text-sky-700">CloudVerse</span> 
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <NavLinksContent />
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="ghost"
            className={navLinkButtonStyle} 
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
              <Button variant="ghost" size="icon" className="text-sky-600 hover:bg-sky-100/50 focus-visible:ring-1 focus-visible:ring-sky-400">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[280px] sm:max-w-xs bg-white p-0 border-l border-border flex flex-col">
                <div className="p-4 border-b border-border">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Image 
                      src="/cloudverse-logo.png" 
                      alt="CloudVerse Logo" 
                      width={28} 
                      height={28} 
                      className="h-7 w-7" // Adjusted size for image in sheet
                    />
                    <span className="text-xl font-bold text-sky-700">CloudVerse</span>
                    </Link>
                </div>
                <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                  <NavLinksContent inSheet={true} />
                </nav>
                <div className="p-4 mt-auto border-t border-border space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-center text-sky-700 border-sky-200 hover:bg-sky-50 hover:text-sky-800 focus-visible:ring-sky-400"
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
