'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function TopHeader() {
  const [currencyOpen, setCurrencyOpen] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('CAD');

  const handleSelect = (currency: string): void => {
    setSelectedCurrency(currency);
    setCurrencyOpen(false);
  };

  return (
    <div className="bg-black text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-end items-center h-8">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:underline">
            About Us
          </Link>

          {/* Currency Selector */}
          <div className="relative">
            <button
              onClick={() => setCurrencyOpen(!currencyOpen)}
              className="hover:underline flex items-center gap-1"
            >
              Select Currency: <span className="font-semibold">{selectedCurrency}</span>
              <span className="text-xs">▼</span>
            </button>

            {/* Dropdown */}
            {currencyOpen && (
              <div className="absolute top-6 left-0 bg-white text-black shadow-md rounded w-28 z-10">
                <ul className="text-sm">
                  {['CAD', 'USD'].map((currency) => (
                    <li
                      key={currency}
                      onClick={() => handleSelect(currency)}
                      className={`px-3 py-2 hover:bg-gray-100 cursor-pointer ${
                        selectedCurrency === currency ? 'font-semibold text-blue-700' : ''
                      }`}
                    >
                      {currency}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="#" className="hover:underline">
            Contact Us
          </Link>
          <span className="hidden sm:inline">📞 CAN: 438 800 2658</span>
        </div>

        {/* Right Section (Optional) */}
        {/* 
        <div className="hidden sm:flex space-x-4">
          <Link href="#" className="hover:underline">Sign In / Register</Link>
          <Link href="#" className="hover:underline">Recently Viewed</Link>
          <Link href="#" className="hover:underline">🛒 Cart</Link>
        </div> 
        */}
      </div>
    </div>
  );
}
