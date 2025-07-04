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
    <div className="bg-black text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center sm:justify-end items-center gap-3 h-auto sm:h-8 py-2 sm:py-0">
        {}
        <Link href="#" className="hover:underline">
          About Us
        </Link>
        {}
        <div className="relative">
          <button
            onClick={() => setCurrencyOpen(!currencyOpen)}
            className="hover:underline flex items-center gap-1"
          >
            Select Currency: <span className="font-semibold">{selectedCurrency}</span>
            <span className="text-[10px]">▼</span>
          </button>
          {currencyOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white text-black shadow-md rounded w-28 z-10">
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
        {}
        <Link href="#" className="hover:underline">
          Contact Us
        </Link>
        {}
        <span className="hidden sm:inline">📞 CAN: 438 800 2658</span>
      </div>
    </div>
  );
}
