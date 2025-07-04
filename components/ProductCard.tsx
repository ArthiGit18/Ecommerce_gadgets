'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface Product {
  title: string;
  brand: string;
  offer: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  category: string;
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { cartItems, addToCart } = useCart();
  const inCart = cartItems.some((item) => item.title === product.title);
  const slug = product.title.toLowerCase().replace(/\s+/g, '-');
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleViewClick = () => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/product/${slug}`);
    }, 1000); // Change this to 60000 for actual 1 minute
  };

  return (
    <div className="border-none rounded shadow p-4 bg-white hover:shadow-lg transition relative">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-5 rounded" />
      <h2 className="text-lg font-bold text-black">{product.title}</h2>
      <p className="text-blue-600 font-semibold mb-2">₹{product.price.toLocaleString()}</p>

      <div className="flex justify-between mt-4">
        {loading ? (
          <button disabled className="bg-blue-300 text-white px-4 py-2 rounded cursor-not-allowed">
            Loading...
          </button>
        ) : (
          <button
            onClick={handleViewClick}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            View
          </button>
        )}

        {inCart ? (
          <Link href="/cart">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Go to Cart
            </button>
          </Link>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
