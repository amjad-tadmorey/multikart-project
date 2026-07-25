"use client"

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect } from "react";

// 1. Import your context
import { useProductLoading } from "@/context/ProductLoadingContext";

import ImageGallery from "@/features/products/ImageGallery";
import ProductsInfo from "@/features/products/ProductsInfo";
import ProductVariants from "@/features/products/ProductVariants";
import ProductDetails from "@/features/products/ProductDetails";
import RelatedProducts from "@/features/products/RelatedProducts";

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
        queryKey: ["product", id], // Added id here to ensure safe re-fetches between products
        queryFn: () => fetchProductById(id),
    });

    // 2. Set the loader state using your context
    const { setIsLoading } = useProductLoading();
    useEffect(() => {
        setIsLoading(isLoading);
    }, [isLoading, setIsLoading]);

    if (error) return <p>Error loading data.</p>;
    // Safely pull from data.data by using fallback empty objects while loading
    const productData = data?.data || {};
    const rate = productData.rate || 0;
    const reviews = productData.reviews || [];
    const product = productData.product || {};
    const options = productData.options || [];
    const options_check = productData.options_check || [];
    const imagesObj = productData.images || {};
    const images = imagesObj.images || [];
    const similar_products = productData.similar_products || [];

    // Extract raw nested values with fallbacks
    const sale_price = product.sale_price || 0;
    const name = product.name || "";
    const description = product.description || "";
    const sku = product.sku || "";
    const unit = product.unit || "";
    const quantity = product.quantity || 0;

    return (
        <>
            <div className="bg-lighter py-8">
                <h1 className="text-2xl text-center font-[600]">
                    {isLoading ? "Loading Product..." : name || "Gym Coords Set"}
                </h1>
                <p className="text-center text-gray font-semibold mt-2">
                    Home / Product / {isLoading ? "..." : name || "Gym Coords Set"}
                </p>
            </div>

            <div className="max-w-7xl mx-auto bg-white">


                <div className="px-6 md:px-20 space-y-6 mt-8 bg-white">
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
        </>

    );
}
