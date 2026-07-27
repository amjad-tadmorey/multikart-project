"use client"

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect } from "react";

// 1. Import your context

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



    const images = [
        {
            id: 1,
            src: "/data-product-1-1.jpg"
        },
        {
            id: 2,
            src: "/data-product-1-2.jpg"
        },
        {
            id: 3,
            src: "/data-product-1-3.jpg"
        },
        {
            id: 4,
            src: "/data-product-1-4.jpg"
        },
    ]

    const product = {
        name: "Gym Coords Set",
        description: "Gym Coords Set' offers a complete workout ensemble for the modern fitness enthusiast. This coordinated set includes everything needed for a stylish and functional gym session, from moisture-wicking tops to supportive leggings, ensuring both comfort and performance during workouts.",
        rate: 4,
        reviews: [
            {
                id: 1,
                name: "Alex Mercer",
                rate: 5,
                content: "Absolutely fantastic product! The quality exceeded my expectations, and shipping was incredibly fast. Highly recommend to everyone.",
                created_at: "2026-07-25 14:32"
            },
            {
                id: 2,
                name: "Sarah Jenkins",
                rate: 5,
                content: "Perfect fit and beautiful design. It looks exactly like the photos on the website. Will definitely be buying more from this collection.",
                created_at: "2026-07-22 09:15"
            },
            {
                id: 3,
                name: "David K.",
                rate: 4,
                content: "Very solid construction and operates smoothly. Knocked off one star only because the packaging was slightly dented upon delivery.",
                created_at: "2026-07-18 18:45"
            },
            {
                id: 4,
                name: "Emily Watson",
                rate: 3,
                content: "It's decent for the price point, but the material feels a bit lighter than I expected. Fine for casual everyday use.",
                created_at: "2026-07-12 11:20"
            },
            {
                id: 5,
                name: "Michael Chen",
                rate: 2,
                content: "The sizing runs much smaller than the chart indicates. Had to return it because it didn't fit properly. Disappointed.",
                created_at: "2026-07-05 16:10"
            }
        ],
        sale_price: 150.00,
        sku: "123456",
        unit: "item",
        quantity: 0
    }

    return (
        <>
            <section className="bg-lighter above-mobile:py-7 py-2">
                <div className="container text-center">
                    <h1 className="text-[1.3rem] above-mobile:text-3xl font-medium tracking-wide">
                        {"Gym Coords Set"}
                    </h1>
                    <p className="pt-2 text-sm font-semibold text-[#555]">
                        <span>HOME</span>  <span className="pl-1"><span className="pr-1">/</span> PRODUCT</span>  <span className="pl-1"><span className="pr-1">/</span> GYM COORDS SET</span>
                    </p>
                </div>
            </section>

            <section className="container mx-auto bg-white">
                <div className="space-y-6 mt-12 bg-white">
                    <section className="relative bg-white grid grid-cols-1 lg:grid-cols-3 gap-5 above-mobile:gap-8 items-start border-light">

                        {/* LEFT COLUMN: Takes up 2 out of 3 columns on desktop screens */}
                        <div className="lg:col-span-2 flex space-y-3 above-mobile:space-y-12 flex-col lg:flex-row">

                            <ImageGallery images={images} />

                            {/* B. Long Details block that forces this layout column to be taller than the gallery */}
                            <ProductsInfo
                                description={product.description}
                                name={product.name}
                                rate={product.rate}
                                reviews={product.reviews}
                                price={product.sale_price}
                                sku={product.sku}
                                unit={product.unit}
                                quantity={product.quantity}
                            />

                        </div>

                        {/* RIGHT COLUMN: Pins itself 24px below viewport top and scrolls within parent track */}
                        <ProductVariants
                        // options={options}
                        // options_check={options_check}
                        // basePrice={Number(sale_price)}
                        />

                    </section>

                    <ProductDetails reviews={product.reviews} />
                    <RelatedProducts />
                </div>
            </section>
        </>

    );
}
