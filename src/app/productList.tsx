import Image from "next/image";
import Link from "next/link";
import Pagination from "./pagination";
type productType = {
    id: string,
    title: string,
    description: string,
    price: number,
    image: string
}[]
function ProductList({ products, page }: { products: productType, page: number }) {
    console.log(products, "products")
    if (!Array.isArray(products) || products.length === 0) {
        return <div className="text-center p-4">No products available</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Product Catalog</h1>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (

                    <div key={product.id} className="border p-4 rounded">

                        {product.image ? (
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={200}
                                height={300}
                                className="w-full h-80 object-contain "
                            />
                            // <img src={product.image} alt={product.title} className="w-full h-40 object-cover" width={100} height={100} />
                        ) : (
                            <div className="w-full h-40 bg-gray-200 flex items-center justify-center">No Image</div>
                        )}
                        <h2 className="text-lg font-semibold mt-2">{product.title || "No Title"}</h2>
                        <p className="text-gray-700">${product.price ?? "N/A"}</p>
                        <Link href={`/product/${product.id}`}>
                            <button className="mt-2 p-2 bg-green-500 text-white">View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
            <Pagination page={page} />
        </div>
    );
}
export default ProductList;