'use client';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
export default function CartPage() {
    const { cartItems, updateQuantity, removeFromCart } = useCart();
    const [message, setMessage] = useState('');
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const handleCheckout = () => {
        setMessage('Thank you for shopping with us! 🙏 Your order is being processed.');
        setTimeout(() => setMessage(''), 4000);
    };
    return (
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {}
            <div className="md:col-span-2">
                <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.title} className="flex items-center gap-4 border p-4 rounded shadow">
                                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
                                <div className="flex-1">
                                    <h2 className="font-semibold">{item.title}</h2>
                                    <p className="text-sm text-gray-600">₹{item.price.toLocaleString()} each</p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() => updateQuantity(item.title, -1)}
                                            className="px-2 py-1 text-black bg-gray-200 rounded-l"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.title, 1)}
                                            className="px-2 py-1 bg-gray-200 text-black rounded-r"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-semibold text-blue-900">
                                        ₹{(item.price * item.quantity).toLocaleString()}
                                    </p>
                                    <button
                                        onClick={() => removeFromCart(item.title)}
                                        className="mt-2 text-sm text-red-600 hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {}
            <div className="bg-white border rounded p-6 shadow">
                <h2 className="text-lg font-bold mb-4 text-black">Price Summary</h2>
                <div className="flex justify-between mb-2">
                    <span className="text-black">Subtotal</span>
                    <span className="text-black">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span className="text-black">Shipping</span>
                    <span className="text-green-600">Free</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-xl font-bold text-blue-900">
                    <span className="text-black">Total</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <button
                    className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded"
                    onClick={handleCheckout}
                >
                    Proceed to Checkout
                </button>
                {}
                {message && (
                    <p className="mt-4 text-center text-green-700 text-sm font-medium animate-pulse">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}
