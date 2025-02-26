export async function fetchProducts(page: number, pageSize: number) {
    try {
        const skip = (page - 1) * pageSize;
        const res = await fetch(`https://fakestoreapi.com/products?limit=${pageSize}&skip=${skip}`);
        return await res.json();
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