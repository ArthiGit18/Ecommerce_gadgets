'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
  title: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (title: string, delta: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (title: string, delta: number) => void;
  removeFromCart: (title: string) => void; // ✅ Add this
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.title === product.title);
      if (existing) {
        // If already in cart, increase quantity
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (title: string, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === title
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };
const removeFromCart = (title: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.title !== title));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
