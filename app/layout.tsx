// app/layout.tsx
import './globals.css';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import CartWrapper from '@/components/CartWrapper';
import { ReactNode } from 'react';

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
        <CartWrapper>
          <Header />
          {children}
          <Footer />
        </CartWrapper>
      </body>
    </html>
  );
}
