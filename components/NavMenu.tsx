'use client';
import { useState } from 'react';
import Link from 'next/link';
interface MegaMenuColumn {
    title: string;
    items: string[];
}
interface MenuItem {
    label: string;
    megaMenu?: MegaMenuColumn[];
}
export default function NavMenu() {
    const [activeMenu, setActiveMenu] = useState<number | null>(null);
    const menus: MenuItem[] = [
        {
            label: 'All',
        },
        {
            label: 'Mobile Phone',
            megaMenu: [
                { title: 'Top Brands', items: ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Realme', 'Google'] },
                { title: 'Price Range', items: ['Under ₹10,000', '₹10,000 - ₹20,000', '₹20,000 - ₹30,000', 'Above ₹30,000'] },
                { title: 'Features', items: ['5G Phones', 'Gaming Phones', 'High Battery Life', 'Camera Phones'] },
            ],
        },
        {
            label: 'Laptop',
            megaMenu: [
                { title: 'Top Brands', items: ['HP', 'Dell', 'Lenovo', 'Asus', 'Apple', 'MSI'] },
                { title: 'Usage Type', items: ['Student Laptops', 'Business Laptops', 'Gaming Laptops', '2-in-1 Laptops'] },
                { title: 'Price Range', items: ['Under ₹30,000', '₹30,000 - ₹50,000', '₹50,000 - ₹70,000', 'Above ₹70,000'] },
            ],
        },
        {
            label: 'Television',
            megaMenu: [
                { title: 'Screen Size', items: ['32 inch', '40 inch', '43 inch', '50 inch', '55 inch', '65 inch'] },
                { title: 'Brands', items: ['Samsung', 'LG', 'Sony', 'OnePlus', 'Mi', 'Vu'] },
                { title: 'Smart TV Features', items: ['Android TV', 'Fire TV', 'Google TV', 'Built-in Alexa'] },
            ],
        },
        {
            label: 'Head Phones',
            megaMenu: [
                { title: 'Type', items: ['In-Ear', 'On-Ear', 'Over-Ear', 'Neckband', 'TWS'] },
                { title: 'Brands', items: ['boAt', 'Noise', 'Sony', 'JBL', 'Realme', 'Samsung'] },
                { title: 'Price Range', items: ['Under ₹1000', '₹1000 - ₹2000', '₹2000 - ₹5000', 'Above ₹5000'] },
            ],
        },
    ];
    return (
        <nav className="relative z-50 bg-[#151e4f] text-white text-xs md:text-sm font-semibold border-b-[5px] border-yellow-500">
            <div className="relative" onMouseLeave={() => setActiveMenu(null)}>
                <div className="max-w-7xl mx-auto px-4 py-5">
                    <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-2">
                        {menus.map((menu, idx) => (
                            <li key={menu.label}>
                                <Link
                                    href={menu.label === 'All' ? '/' : `/?filter=category:${encodeURIComponent(menu.label)}`}
                                    onMouseEnter={() => setActiveMenu(menu.megaMenu ? idx : null)}
                                    className="flex items-center gap-1 hover:text-yellow-300 text-lg"
                                >
                                    {menu.label}
                                    {menu.megaMenu && <span className="text-xs">▼</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {typeof activeMenu === 'number' && menus[activeMenu]?.megaMenu && (
                    <div className="absolute left-0 right-0 top-full bg-white text-black py-8 shadow-2xl z-40">
                        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-10">
                            {menus[activeMenu].megaMenu!.map((col, i) => (
                                <div key={i}>
                                    <h3 className="text-base font-bold text-[#151e4f] mb-3">{col.title}</h3>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        {col.items.map((item, j) => (
                                            <li key={j}>
                                                <Link
                                                    href={`/?filter=${encodeURIComponent(item)}`}
                                                    className="hover:underline hover:text-[#151e4f] transition block"
                                                >
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
            </div>
        </nav>
    );
}
