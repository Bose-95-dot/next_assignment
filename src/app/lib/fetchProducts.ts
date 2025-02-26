export async function fetchProducts(page: number, pageSize: number) {
    try {
        const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
        const products = await res.json();
        return products.slice((page - 1) * pageSize, page * pageSize);
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export async function fetchProductById(id: string) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) return null; // Handle invalid product IDs
        return await res.json();
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}