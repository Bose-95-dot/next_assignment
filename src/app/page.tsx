//@ts-nocheck

import ProductList from "./productList";
import { fetchProducts } from "./lib/fetchProducts";

export default async function Home({ searchParams }: { searchParams }) {
  console.log(searchParams)
  const page = parseInt(searchParams?.page) || 1; // Default to page 1
  const pageSize = 6;
  const products = await fetchProducts(page, pageSize);

  return <ProductList products={products} page={page} />;
}




