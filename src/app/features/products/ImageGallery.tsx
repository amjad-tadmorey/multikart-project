'use client';

import React, { useState, useRef, useMemo } from 'react';

interface ProductProps {
    product: {
        mainImage: string;
        imgs: string[];
    };
}

export default function ImageGallery({ product }: ProductProps) {
    // Combine main image and remaining gallery images into a flat array
    const allImages = useMemo(() => {
        return [...product.imgs];
    }, [product.mainImage, product.imgs]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const thumbnailContainerRef = useRef<HTMLDivElement>(null);

    // Handles clicking thumbnails and centers them smoothly inside the track window
    const handleThumbClick = (index: number) => {
        setSelectedIndex(index);

        const container = thumbnailContainerRef.current;
        if (container) {
            const thumbnailButton = container.children[index] as HTMLElement;
            if (thumbnailButton) {
                const containerWidth = container.offsetWidth;
                const thumbnailOffset = thumbnailButton.offsetLeft;
                const thumbnailWidth = thumbnailButton.offsetWidth;

                container.scrollTo({
                    left: thumbnailOffset - containerWidth / 2 + thumbnailWidth / 2,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <div className="w-full space-y-4 select-none">
            {/* 1. Main View Display Panel */}
            {/* bg-neutral-200 acts as the universal fallback container color */}
            <div className="relative aspect-4/5 w-full overflow-hidden bg-neutral-200">
                {allImages.map((img, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                        <img
                            key={`main-view-${idx}`}
                            src={img}
                            alt={`Product view ${idx + 1}`}
                            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-300 ease-in-out
                                ${isSelected 
                                    ? 'opacity-100 z-10' 
                                    : 'opacity-0 z-0 pointer-events-none'
                                }`}
                        />
                    );
                })}
            </div>

            {/* 2. Slideable Thumbnails Row */}
            <div
                ref={thumbnailContainerRef}
                className="flex px-4 py-2 gap-3 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
                {allImages.map((img, idx) => {
                    const isActive = idx === selectedIndex;
                    return (
                        <button
                            key={`thumb-btn-${idx}`}
                            onClick={() => handleThumbClick(idx)}
                            // bg-neutral-200 style acts as the local fallback size wrapper 
                            className={`relative cursor-pointer aspect-square w-20 sm:w-24 shrink-0 overflow-hidden bg-neutral-200 snap-center transition-all duration-300 ease-out focus:outline-none
                                ${isActive
                                    ? 'ring-2 ring-[#f07c4c] ring-offset-2 scale-100 opacity-100 shadow-md'
                                    : 'scale-95 opacity-50 hover:opacity-80'
                                }`}
                        >
                            <img
                                src={img}
                                alt={`Thumbnail view ${idx + 1}`}
                                className="h-full w-full object-cover relative z-10"
                                loading="lazy"
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
