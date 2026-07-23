// app/products/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";


export default function ProductsPage() {

    // 1. Define the Axios fetcher function
    const fetchProducts = async () => {
        const response = await axios.get("https://etrolley.net/api/etrollymarket/products");
        return response.data;
    };

    // 2. Integrate TanStack Query
    const { data, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>Error loading data.</p>;


    // 3. Render the UI
    return (
        <main>
            <h1>Product List</h1>
            <ul>
                {data.data.products.map((product: any) => (
                    <li key={product.id}>
                        <Link
                            href={`/products/${product.id}`}
                        >
                            {product.id}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
