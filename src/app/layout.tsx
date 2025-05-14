
import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/navbar'; 
import Footer from '@/components/layout/footer'; // Import the new Footer
import { Toaster } from "@/components/ui/toaster"; 

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CloudVerse App | Powered by Firebase Studio', 
  description: 'Modern web application with CloudVerse style navbar.', 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <Navbar /> 
        <div className="flex-grow"> 
          {children}
        </div>
        <Footer /> {/* Add Footer at the end */}
        <Toaster />
      </body>
    </html>
  );
}
