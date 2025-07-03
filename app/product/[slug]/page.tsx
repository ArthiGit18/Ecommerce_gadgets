import { notFound } from 'next/navigation';
import productsData from '@/data/commonData.json';
import { Product } from '@/components/ProductCard';

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = (productsData as Product[]).find(
    (p) => p.title.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!product) return notFound();

  return (
    <div className="max-w-4xl mx-10 my-10 mx-auto p-6 bg-white rounded shadow">
      <img src={product.image} alt={product.title} className="w-full h-96 object-cover rounded mb-6" />
      <h1 className="text-3xl font-bold mb-2 text-black">{product.title}</h1>
      <p className="text-gray-700 mb-4 text-black">{product.description}</p>
      
      <p className="text-lg text-blue-600 font-semibold text-black">₹{product.price.toLocaleString()}</p>

      <p className="text-green-700 my-4 font-bold">{"Offer Price :" + product.offer}</p>
      <p className="text-yellow-500 my-4 font-bold">{"Customer Ratings :" + product.rating}</p>

    </div>
  );
}
