import Image from "next/image";
import Link from "next/link";
import { fetchProductById } from "../../../app/lib/fetchProducts";
//@ts-ignore
export default async function ProductPage({ params }) {
    const { id } = params;
    const product = await fetchProductById(id);

    if (!product) {
        return <div className="text-center p-4">Product not found.</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <Link href="/" className="text-blue-500">← Back to Products</Link>

            <div className="grid grid-cols-2 gap-6 mt-4">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                />
                <div>
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="text-gray-700 mt-2">{product.description}</p>
                    <p className="text-xl font-semibold text-green-600 mt-4">${product.price}</p>
                    <button className="mt-4 p-3 bg-blue-500 text-white rounded">Buy Now</button>
                </div>
            </div>
        </div>
    );
}
