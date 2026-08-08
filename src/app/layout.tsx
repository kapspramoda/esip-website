import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'eSip.lk | No.1 LMS Creators in Sri Lanka',
  description: 'ශ්‍රී ලංකාවේ ගුරුවරුන් සඳහාම වෙන්වූ වේගවත්, ආරක්ෂිත සහ කළමනාකරණයට පහසුම අංගසම්පූර්ණ Learning Management System (LMS) නිර්මාණකරුවෝ.',
  keywords: ['LMS Sri Lanka', 'Online Classes', 'E-learning platform', 'Education platform', 'Web development for teachers', 'eSip', 'Sri Lanka Education'],
  authors: [{ name: 'eSip.lk' }],
  openGraph: {
    title: 'eSip.lk | No.1 LMS Creators in Sri Lanka',
    description: 'ඔබේ පන්තියත් අදම ඩිජිටල් කරන්න. අංගසම්පූර්ණ Learning Management System නිර්මාණකරුවෝ.',
    url: 'https://esip.lk',
    siteName: 'eSip.lk',
    locale: 'si_LK',
    type: 'website',
  },
  icons: {
    icon: '/icon.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
