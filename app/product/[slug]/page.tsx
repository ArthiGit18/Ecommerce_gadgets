'use client';
import { use } from 'react';
import { notFound } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import productsData from '@/data/commonData.json';
import { Product } from '@/components/ProductCard';
import Link from 'next/link';
interface Props {
  params: Promise<{
    slug: string;
  }>;
}
export default function ProductPage({ params }: Props) {
  const { slug } = use(params);
  const product = (productsData as Product[]).find((p) =>
    p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );
  const { cartItems, addToCart } = useCart();
  if (!product) return notFound();
  const inCart = cartItems.some((item) => item.title === product.title);
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded shadow">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-contain rounded mb-6 bg-gray-100"
      />
      <h1 className="text-3xl font-bold mb-2 text-black">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg text-blue-700 font-semibold">
        ₹{product.price.toLocaleString()}
      </p>
      <p className="text-green-700 mt-3 font-medium">Offer: {product.offer}</p>
      <p className="text-yellow-600 font-medium">Rating: ⭐ {product.rating}</p>
      <div className="mt-6">
        {inCart ? (
          <Link href="/cart">
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Go to Cart
            </button>
          </Link>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
