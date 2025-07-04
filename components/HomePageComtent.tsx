'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ProductCard, { Product } from '@/components/ProductCard';
import productsData from '@/data/commonData.json';

export default function HomePageContent() {
    const searchParams = useSearchParams();
    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [visibleCount, setVisibleCount] = useState(10);

    const filterParam = searchParams.get('filter');

    useEffect(() => {
        let filtered = productsData as Product[];

        if (search) {
            filtered = filtered.filter((p) =>
                p.title.toLowerCase().includes(search.toLowerCase())
            );
        } else if (filterParam) {
            if (filterParam.startsWith('category:')) {
                const category = filterParam.replace('category:', '').toLowerCase();
                filtered = filtered.filter(
                    (p) => p.category.toLowerCase() === category
                );
            } else {
                filtered = filtered.filter(
                    (p) =>
                        p.title.toLowerCase().includes(filterParam.toLowerCase()) ||
                        p.brand.toLowerCase().includes(filterParam.toLowerCase()) ||
                        p.category.toLowerCase().includes(filterParam.toLowerCase())
                );
            }
        }

        setFilteredProducts(filtered);
        setVisibleCount(10); // Reset on filter/search change
    }, [search, filterParam]);

    const handleShowMore = () => {
        setVisibleCount((prev) => Math.min(prev + 10, filteredProducts.length));
    };

    const visibleProducts = filteredProducts.slice(0, visibleCount);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-4 text-black">Top Categories</h1>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-black px-4 py-2 w-full max-w-md mb-6 rounded text-black"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {visibleProducts.map((product) => (
                    <ProductCard key={product.title} product={product} />
                ))}
            </div>

            {visibleCount < filteredProducts.length && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleShowMore}
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
}
