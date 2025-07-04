'use client';
import Link from 'next/link';
import { JSX } from 'react';
import { useCart } from '@/context/CartContext';
import { useState, useRef, useEffect } from 'react';

export default function MiddleHeader(): JSX.Element {
    const { cartItems } = useCart();

    const [isOpen, setIsOpen] = useState(false);
    const [iscartOpen, setIsCartOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-white w-full border-b">
            <div className="max-w-8xl mx-auto px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* === Logo === */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        {/* You can use next/image instead of <img> for optimization */}
                        <img
                            src="https://cdn11.bigcommerce.com/s-03842/images/stencil/750w/qbol_web_logo_1577699469__78699.original.png?compression=lossy"
                            alt="Quality Bearings Logo"
                            className="w-[270px] h-auto"
                        />
                        {/* OR use next/image like this:
            <Image
              src="/logo.png"
              alt="Quality Bearings Logo"
              width={220}
              height={50}
            /> */}
                    </Link>
                </div>

                {/* === Search Box === */}
                <div className="flex flex-1 max-w-2xl w-full text-black">
                    <input
                        type="text"
                        placeholder="Search by reference"
                        className="flex-grow border border-gray-400 rounded-l text-black px-4 py-2 text-sm"
                    />
                    <button className="bg-gradient-to-r from-gray-700 to-blue-900 text-white px-4 py-2 rounded-r">
                        🔍
                    </button>
                </div>

                {/* === Icon Links === */}
                <div className="hidden lg:flex items-center space-x-8 text-sm text-blue-900">
                    {/* Sign In */}
                    <Link href="/signup" className="flex items-center gap-2 hover:text-blue-700 text-xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M5.121 17.804A12.07 12.07 0 0112 15c2.084 0 4.027.506 5.879 1.404M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Sign In<br />Register</span>
                    </Link>


                    <div className="relative" ref={wrapperRef}>
                        {/* Recently Viewed */}
                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="flex items-center gap-2 hover:text-blue-700 text-xl"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Recently<br />Viewed</span>
                        </button>

                        {/* Dropdown */}
                        {isOpen && (
                            <div className="absolute top-full mt-2 right-0 w-64 bg-white border border-black shadow-lg rounded-md z-100 p-8">
                                <h4 className="font-bold text-blue-800 mb-4 text-xl">Recently Viewed Products</h4>
                                <p className="text-blue-700 text-sm text-center">No recently viewed items</p>
                            </div>
                        )}
                    </div>
                    <Link href="/cart" className="flex items-center gap-2 hover:text-blue-700 relative text-xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3 3h2l.4 2M7 13h13l-1.5 8H6.5L5 13h14M5 6h15l1 5H6L5 6z" />
                        </svg>

                        <div className="absolute -top-1 left-4 bg-blue-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                            {cartItems.length}
                        </div>

                        <span>Cart</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}
