"use client"

import { useRef } from 'react';
import ProductCard from './ProductCard';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';

const productsData = [
    {
        img: "/data-product-2.jpg",
        title: "Glamour Gaze",
        des: "Purple mini dress",
        price: 4.34,
        compareAtPrice: 50,
        discount: 5
    },
    {
        img: "/data-product-3.jpg",
        title: "Glamour Gaze",
        des: "Purple mini dress",
        price: 4.34,
        compareAtPrice: 50,
        discount: 5
    },
    {
        img: "/data-product-4.jpg",
        title: "Glamour Gaze",
        des: "Purple mini dress",
        price: 4.34,
    },
    {
        img: "/data-product-5.jpg",
        title: "Glamour Gaze",
        des: "Purple mini dress",
        price: 4.34,
        compareAtPrice: 50,
        discount: 5
    },
];

const RelatedProducts = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    // Optional handler if you ever want to add desktop arrow buttons
    const scroll = (direction: 'left' | 'right') => {
        if (sliderRef.current) {
            const container = sliderRef.current;
            const scrollAmount = container.clientWidth * 0.75;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-12">
            <div className="mb-8 flex items-center justify-between border-b pb-4 border-light">
                <h1 className="text-2xl font-bold text-gray-900">
                    Related Products
                </h1>

                {/* Navigation Arrows: Only functional on smaller views/overflowing tracks */}
                <div className="flex space-x-2">
                    <button
                        onClick={() => scroll('left')}
                        className="px-1 py-1 cursor-pointer border rounded-full hover:bg-neutral-50 active:bg-neutral-100 transition focus:outline-none"
                        aria-label="Slide Left"
                    >
                        <RiArrowLeftSLine />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="px-1 cursor-pointer border rounded-full hover:bg-neutral-50 active:bg-neutral-100 transition focus:outline-none"
                        aria-label="Slide Right"
                    >
                        <RiArrowRightSLine />
                    </button>
                </div>
            </div>

            {/* Slider container using layout calculations */}
            <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
                {productsData.map((p, index) => (
                    <div
                        key={index}
                        className="snap-start shrink-0
                                   w-[calc((100%-24px)/2)] 
                                   md:w-[calc((100%-48px)/3)] 
                                   lg:w-[calc((100%-72px)/4)]"
                    >
                        <ProductCard product={p} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RelatedProducts;
