import Link from 'next/link';

export interface Product {
  title: string;
  brand: string;
  price: number;
  offer?: string;
  description: string;
  image: string;
  rating: number;
  category: string;
}

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const slug = product.title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="border rounded shadow p-4 bg-white hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-blue-600 font-semibold mb-2">₹{product.price.toLocaleString()}</p>
      <div className="flex justify-between mt-4">
        <Link href={`/product/${slug}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View</button>
        </Link>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
