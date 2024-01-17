
import Head from 'next/head';
import '../styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import HeaderMobile from '@/components/header-mobile';
import MarginWidthWrapper from '@/components/margin-width-wrapper';
import PageWrapper from '@/components/page-wrapper';
import SideNav from '@/components/side-nav';

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NutriSafe',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        {/* Add your image icon link here */}
        <link rel="icon" href="..\logo.png" />
      </Head>
      <html lang="en">
        <body className={`bg-white${inter.className}`}>
          <div className="flex">
            <ClerkProvider>
              <SideNav />
              <main className="flex-1">
                <MarginWidthWrapper>
                  <Header />
                  <HeaderMobile />
                  <PageWrapper>{children}</PageWrapper>
                </MarginWidthWrapper>
              </main>
            </ClerkProvider>
          </div>
        </body>
      </html>
    </>
  );
}
