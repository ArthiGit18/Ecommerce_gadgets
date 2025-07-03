'use client';
import Link from 'next/link';
import Image from 'next/image'; // Optional: If using next/image for better performance
import { JSX } from 'react';

export default function MiddleHeader(): JSX.Element {
    return (
        <div className="bg-white w-full border-b">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* === Logo === */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        {/* You can use next/image instead of <img> for optimization */}
                        <img
                            src="/logo.png"
                            alt="Quality Bearings Logo"
                            className="w-[220px] h-auto"
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
                <div className="flex flex-1 max-w-2xl w-full">
                    <input
                        type="text"
                        placeholder="Search by reference"
                        className="flex-grow border border-gray-400 rounded-l px-4 py-2 text-sm"
                    />
                    <button className="bg-gradient-to-r from-gray-700 to-blue-900 text-white px-4 py-2 rounded-r">
                        🔍
                    </button>
                </div>

                {/* === Icon Links === */}
                <div className="hidden lg:flex items-center space-x-8 text-sm text-blue-900">
                    {/* Sign In */}
                    <Link href="#" className="flex items-center gap-2 hover:text-blue-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M5.121 17.804A12.07 12.07 0 0112 15c2.084 0 4.027.506 5.879 1.404M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Sign In<br />Register</span>
                    </Link>

                    {/* Recently Viewed */}
                    <Link href="#" className="flex items-center gap-2 hover:text-blue-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M12 8v4l3 3m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Recently<br />Viewed</span>
                    </Link>

                    {/* Cart */}
                    <Link href="#" className="flex items-center gap-2 hover:text-blue-700 relative">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M3 3h2l.4 2M7 13h13l-1.5 8H6.5L5 13h14M5 6h15l1 5H6L5 6z" />
                        </svg>
                        <div className="absolute -top-1 left-4 bg-blue-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</div>
                        <span>Cart</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}
