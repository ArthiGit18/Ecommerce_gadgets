'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

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

    return (
        <div className="border-none rounded shadow p-4 bg-white hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-5 rounded" />
            <h2 className="text-lg font-bold text-black">{product.title}</h2>
            <p className="text-blue-600 font-semibold mb-2">₹{product.price.toLocaleString()}</p>
            <div className="flex justify-between mt-4">
                <Link href={`/product/${slug}`}>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View</button>
                </Link>
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
