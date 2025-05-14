
"use client";

import Link from 'next/link';
import { Cloud, ChevronDown, Send, Twitter, Linkedin, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Using the same navItems structure as the Navbar for consistency
const navItems = [
  {
    label: "Products",
    href: "#products", // Main link for the category itself, can be # or a dedicated page
    subItems: [ // Sub-items are defined but not used for dropdowns in this footer version
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
  { Icon: Users, href: "#", label: "VK" }, // Placeholder for VK
];

export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground py-8 lg:py-12 border-t border-border mt-12 lg:mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Logo and Nav Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8 lg:mb-10">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground mb-6 lg:mb-0 shrink-0">
            <Cloud className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
            <span>CloudVerse</span>
          </Link>
          <nav className="flex flex-wrap justify-center lg:justify-end gap-2 lg:gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href} // Link to the main category page or anchor
                className="px-4 py-2 text-xs font-medium rounded-full bg-white text-neutral-700 hover:bg-neutral-100 shadow-sm border border-neutral-200 flex items-center transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
              >
                {item.label.toUpperCase()} {/* Match styling from image (all caps) */}
                <ChevronDown className="ml-1.5 h-3.5 w-3.5 opacity-70" />
              </Link>
            ))}
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
