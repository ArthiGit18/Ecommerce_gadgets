'use client';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.title} className="border rounded p-4 flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-blue-700 font-medium">₹{item.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
