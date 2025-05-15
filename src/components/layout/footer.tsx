
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import { ChevronDown, Send, Twitter, Linkedin, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

const socialLinks = [
  { Icon: Send, href: "#", label: "Telegram" },
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Users, href: "#", label: "VK" }, 
];

export default function Footer() {
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
    <footer className="bg-footer-background text-muted-foreground py-8 lg:py-12 border-t border-border mt-12 lg:mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Logo and Nav Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-10">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground mb-6 lg:mb-0 shrink-0">
            <Image 
              src={require("./CloudVerseLogo.png")}
              alt="CloudVerse Logo" 
              width={28} 
              height={28} 
              className="h-7 w-7 sm:h-7 sm:w-7" // Adjusted size for image in footer
            />
            <span>CloudVerse</span>
          </Link>
         {/* const NavLinksContent = ({ inSheet = false }: { inSheet?: boolean }) => (
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
  ); */}
 <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <NavLinksContent />
        </nav>

        </div>

        <Separator className="my-6 lg:my-8 bg-border/70" />

        {/* Bottom Row: Address, Social, Copyright */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center text-xs sm:text-sm">
          <p className="mt-6 md:mt-0 text-center md:text-left">
            Springfield, 8831 United States
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition-colors flex items-center justify-center"
                >
                  <social.Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <p className="text-center md:text-right">
              CloudVerse &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
