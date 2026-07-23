'use client';

import React, { useState, useRef, useMemo } from 'react';

// Define explicit image payload shapes instead of using any
export interface GalleryImagePayload {
    id?: string | number;
    src: string;
}

interface ImageGalleryProps {
    images?: GalleryImagePayload[] | null;
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    // Standardize fallback states if image arrays are missing
    const allImages = useMemo(() => {
        return images ? [...images] : [];
    }, [images]);

    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const thumbnailContainerRef = useRef<HTMLDivElement>(null);

    // Guard structure checking to prevent application crashing on empty array arrays
    if (allImages.length === 0) {
        return (
            <div className="w-full aspect-4/5 bg-neutral-100 rounded flex items-center justify-center text-xs text-neutral-400">
                No Preview Images Available
            </div>
        );
    }

    const handleThumbClick = (index: number): void => {
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
            <div className="relative aspect-4/5 w-full overflow-hidden bg-neutral-200">
                {allImages.map((img, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                        <img
                            key={`main-view-${img.id || idx}`}
                            /* FIXED: Changed from images[0].src to img.src to reflect the current item in the loop */
                            src={img.src}
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
                className="flex w-full lg:max-w-[300px] overflow-x-auto px-4 py-2 gap-3 pb-2 scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] scrollbar-none [&::-webkit-scrollbar]:hidden"
            >
                {allImages.map((img, idx) => {
                    const isActive = idx === selectedIndex;
                    return (
                        <button
                            type="button"
                            key={`thumb-btn-${img.id || idx}`}
                            onClick={() => handleThumbClick(idx)}
                            className={`relative cursor-pointer aspect-square w-20 sm:w-24 shrink-0 overflow-hidden bg-neutral-200 snap-center transition-all duration-300 ease-out focus:outline-none
                                ${isActive
                                    ? 'ring-2 ring-[#f07c4c] ring-offset-2 scale-100 opacity-100 shadow-md'
                                    : 'scale-95 opacity-50 hover:opacity-80'
                                }`}
                        >
                            <img
                                src={img.src}
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
