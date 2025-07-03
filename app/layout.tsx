import './globals.css';
import Header from '../components/Header';
import React, { ReactNode } from 'react';
import { CartProvider } from '@/context/CartContext';

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
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
