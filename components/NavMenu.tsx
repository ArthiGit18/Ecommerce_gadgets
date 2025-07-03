'use client';
import { JSX, useState } from 'react';
import Link from 'next/link';

// Type Definitions
interface MegaMenuColumn {
    title: string;
    items: string[];
}

interface MenuItem {
    label: string;
    megaMenu?: MegaMenuColumn[];
}

export default function NavMenu(): JSX.Element {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    const menus: MenuItem[] = [
        {
            label: 'Mobile Phone',
            megaMenu: [
                { title: 'Top Brands', items: ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Realme', 'Google'] },
                { title: 'Price Range', items: ['Under ₹10,000', '₹10,000 - ₹20,000', '₹20,000 - ₹30,000', 'Above ₹30,000'] },
                { title: 'Features', items: ['5G Phones', 'Gaming Phones', 'High Battery Life', 'Camera Phones'] },
                { title: 'Accessories', items: ['Phone Covers', 'Chargers', 'Screen Protectors', 'Power Banks'] },
            ],
        },
        {
            label: 'Laptops',
            megaMenu: [
                { title: 'Top Brands', items: ['HP', 'Dell', 'Lenovo', 'Asus', 'Apple', 'MSI'] },
                { title: 'Usage Type', items: ['Student Laptops', 'Business Laptops', 'Gaming Laptops', '2-in-1 Laptops'] },
                { title: 'Price Range', items: ['Under ₹30,000', '₹30,000 - ₹50,000', '₹50,000 - ₹70,000', 'Above ₹70,000'] },
                { title: 'Accessories', items: ['Laptop Bags', 'Cooling Pads', 'External Keyboards', 'Mice'] },
            ],
        },
        {
            label: 'Television',
            megaMenu: [
                { title: 'Screen Size', items: ['32 inch', '40 inch', '43 inch', '50 inch', '55 inch', '65 inch'] },
                { title: 'Display Type', items: ['LED', 'OLED', 'QLED', '4K Ultra HD'] },
                { title: 'Brands', items: ['Samsung', 'LG', 'Sony', 'OnePlus', 'Mi', 'Vu'] },
                { title: 'Smart TV Features', items: ['Android TV', 'Fire TV', 'Google TV', 'Built-in Alexa'] },
            ],
        },
        {
            label: 'Head Phones',
            megaMenu: [
                { title: 'Type', items: ['In-Ear', 'On-Ear', 'Over-Ear', 'Neckband', 'TWS'] },
                { title: 'Brands', items: ['boAt', 'Noise', 'Sony', 'JBL', 'Realme', 'Samsung'] },
                { title: 'Features', items: ['Noise Cancellation', 'Water Resistant', 'Gaming', 'Long Battery Life'] },
                { title: 'Price Range', items: ['Under ₹1000', '₹1000 - ₹2000', '₹2000 - ₹5000', 'Above ₹5000'] },
            ],
        },
    ];

    return (
        <nav className="relative z-50 bg-[#151e4f] text-white text-sm font-semibold border-b-[3px] border-yellow-500">
            <div className="max-w-7xl mx-auto px-4">
                <ul className="flex items-center justify-center gap-6 py-3 relative">
                    {menus.map((menu, idx) => (
                        <li
                            key={menu.label}
                            className="group"
                            onMouseEnter={() => setActiveMenu(idx)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <button className="flex items-center gap-1 hover:text-yellow-300">
                                {menu.label}
                                {menu.megaMenu && <span className="text-xs">▼</span>}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mega Menu dropdown */}
            {typeof activeMenu === 'number' && menus[activeMenu]?.megaMenu && (
                <div className="absolute left-0 top-full w-full bg-white text-black py-8 shadow-2xl z-50">
                    <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
                        {menus[activeMenu].megaMenu!.map((col, i) => (
                            <div key={i}>
                                <h3 className="text-base font-bold text-[#151e4f] mb-3">{col.title}</h3>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    {col.items.map((item, j) => (
                                        <li key={j}>
                                            <Link href="#" className="hover:underline hover:text-[#151e4f] transition">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
