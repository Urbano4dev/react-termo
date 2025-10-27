import type { Metadata } from 'next';
import { Itim } from 'next/font/google';
import './globals.css';

const itim = Itim({
  variable: '--font-itim',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Termo.io',
  description: 'Adivinhe a palavra do dia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${itim.variable} antialiased`}>{children}</body>
    </html>
  );
}
