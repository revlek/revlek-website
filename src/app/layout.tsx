import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "REVELEK - Building Future's Technology",
  description: "REVELEK is your trusted digital partner for custom software development, AI solutions, SaaS platforms, creative design, and digital marketing. We empower businesses with modern technology.",
  keywords: "software development, AI solutions, SaaS platforms, web development, mobile apps, digital marketing, UI/UX design, REVELEK",
  authors: [{ name: "REVELEK" }],
  creator: "REVELEK",
  publisher: "REVELEK",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://revlek.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "REVELEK - Building Future's Technology",
    description: "Your trusted digital partner for custom software, AI solutions, SaaS platforms, and creative design services.",
    url: 'https://revlek.com',
    siteName: 'REVELEK',
    images: [
      {
        url: 'https://revlek.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'REVELEK - Building Future\'s Technology',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "REVELEK - Building Future's Technology",
    description: "Your trusted digital partner for custom software, AI solutions, SaaS platforms, and creative design services.",
    images: ['https://revlek.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7DF9FF" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}