"use client"

import { useRef, useState, useEffect } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from '@remixicon/react';
import ProductCard from './ProductCard';

interface SimilarProduct {
    name: string;
    image: string;
    description: string;
    old_price: number;
    new_price: number;
}

const similar_products: SimilarProduct[] = [
    { name: "Classic Cotton Tee", image: "/data-product-2.jpg", description: "Premium soft-washed crewneck apparel.", old_price: 35, new_price: 24 },
    { name: "Slim Fit Denim", image: "/data-product-3.jpg", description: "Stretch-engineered durable construction.", old_price: 70, new_price: 49 },
    { name: "Urban Bomber Jacket", image: "/data-product-4.jpg", description: "Wind-resistant insulated outer shell protection.", old_price: 120, new_price: 89 },
    { name: "Canvas Daypack", image: "/data-product-5.jpg", description: "Waterproof commuter storage organizer.", old_price: 55, new_price: 39 },
    { name: "Minimalist Sneakers", image: "/data-product-5.jpg", description: "Orthotic-support premium vulcanized daily footwear.", old_price: 95, new_price: 65 },
];

const RelatedProducts = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Mouse Drag State Management Hooks
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftState, setScrollLeftState] = useState(0);

    const checkScrollPosition = () => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            setCanScrollLeft(scrollLeft > 2);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('scroll', checkScrollPosition, { passive: true });
            checkScrollPosition();
            window.addEventListener('resize', checkScrollPosition);
        }
        return () => {
            if (slider) slider.removeEventListener('scroll', checkScrollPosition);
            window.removeEventListener('resize', checkScrollPosition);
        };
    }, []);

    // ==========================================
    // MOUSE DRAG EVENT HANDLERS
    // ==========================================
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!sliderRef.current) return;
        setIsDown(true);
        // Track the starting X cursor placement minus slider offset
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeftState(sliderRef.current.scrollLeft);
    };

    const handleMouseLeaveOrUp = () => {
        setIsDown(false);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDown || !sliderRef.current) return;
        e.preventDefault(); // Prevents image/text native selection highlights while dragging

        const x = e.pageX - sliderRef.current.offsetLeft;
        // Adjust the multiplier (e.g., * 1.5) to speed up or slow down tracking speed
        const walk = (x - startX) * 1.5;
        sliderRef.current.scrollLeft = scrollLeftState - walk;
    };

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
        <section className="py-12 relative group/section">

            <div className="mb-8 flex items-center justify-between border-b pb-4 border-neutral-200 border-dashed">
                <h2 className="text-2xl font-bold tracking-wide text-[#333333]">
                    Related Products
                </h2>

                <div className="flex space-x-2">
                    <button
                        type="button"
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`p-1.5 border rounded-full transition-all duration-300 focus:outline-none select-none ${canScrollLeft
                            ? 'cursor-pointer border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-50 active:bg-neutral-100 shadow-sm'
                            : 'opacity-40 cursor-not-allowed border-neutral-200 text-neutral-300 bg-neutral-50'
                            }`}
                        aria-label="Slide Left"
                    >
                        <RiArrowLeftSLine size={20} />
                    </button>
                    <button
                        type="button"
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`p-1.5 border rounded-full transition-all duration-300 focus:outline-none select-none ${canScrollRight
                            ? 'cursor-pointer border-neutral-300 text-neutral-700 bg-white hover:bg-neutral-50 active:bg-neutral-100 shadow-sm'
                            : 'opacity-40 cursor-not-allowed border-neutral-200 text-neutral-300 bg-neutral-50'
                            }`}
                        aria-label="Slide Right"
                    >
                        <RiArrowRightSLine size={20} />
                    </button>
                </div>
            </div>

            <div className="relative w-full">
                {/* 
                  NOTE: Replaced 'scroll-smooth' with conditional handling, 
                  and added drag-state class changes for smooth custom handling.
                */}
                <div
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeaveOrUp}
                    onMouseUp={handleMouseLeaveOrUp}
                    onMouseMove={handleMouseMove}
                    className={`flex gap-6 overflow-x-auto pb-6 select-none width-scrollbar relative
                               scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-neutral-50
                               [&::-webkit-scrollbar]:h-1.5
                               [&::-webkit-scrollbar-track]:bg-neutral-50
                               [&::-webkit-scrollbar-thumb]:bg-neutral-200
                               [&::-webkit-scrollbar-thumb]:rounded-full
                               hover:[&::-webkit-scrollbar-thumb]:bg-neutral-300
                               ${isDown ? 'cursor-grabbing scale-[0.995] transition-transform' : 'cursor-grab scroll-smooth snap-x snap-mandatory'}`}
                >
                    <div className=' absolute w-full h-full z-50 bg-transparent'></div>
                    {similar_products.map((p: SimilarProduct, index: number) => (
                        <div
                            key={index}
                            className={`shrink-0 pointer-events-none
                                       w-[calc((100%-24px)/2)] 
                                       md:w-[calc((100%-48px)/3)] 
                                       lg:w-[calc((100%-72px)/4)]
                                       ${!isDown && 'snap-start'}`}
                        >
                            {/* pointer-events-none container wrapper stops native browser element dragging from tearing tracking logic */}
                            <div className="pointer-events-auto h-full w-full">
                                <ProductCard product={p} />
                            </div>
                        </div>
                    ))}
                </div>

                {canScrollRight && (
                    <div className="absolute right-0 top-0 bottom-6 w-12 bg-linear-to-r from-transparent to-white/60 pointer-events-none transition-opacity duration-300 opacity-0 group-hover/section:opacity-100 hidden md:block" />
                )}
                {canScrollLeft && (
                    <div className="absolute left-0 top-0 bottom-6 w-12 bg-linear-to-l from-transparent to-white/60 pointer-events-none transition-opacity duration-300 opacity-0 group-hover/section:opacity-100 hidden md:block" />
                )}
            </div>
        </section>
    );
};

export default RelatedProducts;
