
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar'; // Import the new Navbar
import { Toaster } from "@/components/ui/toaster"; // Ensure Toaster is imported if used

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CloudVerse App | Powered by Firebase Studio', // Updated title
  description: 'Modern web application with CloudVerse style navbar.', // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> {/* Ensure your globals.css applies dark theme if desired, or set className="dark" here */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <Navbar /> {/* Add Navbar at the top */}
        <div className="flex-grow"> {/* This div will take up available space, pushing footer down if any */}
          {children}
        </div>
        {/* Removed the explicit footer from page.tsx, can be added globally here if needed */}
        {/* <footer className="py-8 border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} CloudVerse. Built with Next.js and Firebase Studio.
          </div>
        </footer> */}
        <Toaster />
      </body>
    </html>
  );
}

