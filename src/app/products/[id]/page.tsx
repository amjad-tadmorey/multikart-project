"use client"

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import ImageGallery from "@/app/features/products/ImageGallery";
import ProductsInfo from "@/app/features/products/ProductsInfo";
import ProductVariants from "@/app/features/products/ProductVariants";
import ProductDetails from "@/app/features/products/ProductDetails";
import RelatedProducts from "@/app/features/products/RelatedProducts";

export const dynamic = "force-dynamic"

// 1. Define the Axios fetcher function
const fetchProductById = async (id: string) => {
    const response = await axios.get(`https://etrolley.net/api/etrollymarket/product/theme5/${id}`);
    return response.data;
};

// Next.js App Router dynamic page components receive a params Promise
export default function ProductDetailPage() {

    const params = useParams<{ id: string }>();
    const id = params.id;

    // 2. Integrate TanStack Query
    const { data, isLoading, error } = useQuery({
        queryKey: ["product"],
        queryFn: () => fetchProductById(id),
    });


    if (isLoading) return <p>Loading products...</p>;
    if (error) return <p>Error loading data.</p>;

    const { rate, reviews, product: { sale_price, name, description, sku, unit, quantity }, options, options_check, images: { images }, similar_products } = data.data

    return (
        <div className="max-w-7xl mx-auto">
            <div className="bg-lighter py-8">
                <h1 className="text-3xl text-center font-md">Gym Coords Set</h1>
                <p className="text-center text-gray font-semibold mt-2">Home / Product / Gym Coords Set</p>
            </div>
            <div className="px-2 md:px-20 space-y-6 mt-12">
                <section className="relative bg-white grid grid-cols-1 lg:grid-cols-3 gap-5 above-mobile:gap-10 items-start border-light">

                    {/* LEFT COLUMN: Takes up 2 out of 3 columns on desktop screens */}
                    <div className="lg:col-span-2 flex space-y-3 above-mobile:space-y-12 flex-col lg:flex-row">

                        <ImageGallery images={images} />

                        {/* B. Long Details block that forces this layout column to be taller than the gallery */}

                        <ProductsInfo
                            description={description}
                            name={name}
                            rate={rate}
                            reviews={reviews}
                            price={sale_price}
                            sku={sku}
                            unit={unit}
                            quantity={quantity}
                        />

                    </div>

                    {/* RIGHT COLUMN: Pins itself 24px below viewport top and scrolls within parent track */}
                    <ProductVariants
                        options={options}
                        options_check={options_check}
                        basePrice={Number(sale_price)}
                    />

                </section>
                <ProductDetails reviews={reviews} />
                <RelatedProducts similar_products={similar_products} />
            </div>

        </div>
    );
}
