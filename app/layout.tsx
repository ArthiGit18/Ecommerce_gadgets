import './globals.css';
import Header from '../components/Header';
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'MyShop',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
