"use client"
import React, { useState, useEffect } from 'react';

interface OptionValue {
    id: number;
    name: string;
}

interface ProductOption {
    id: number;
    name: string;
    type: string;
    price: number | null;
    new_price: number;
    option_values: {
        select_values: OptionValue[];
    };
}

interface StickyAddToCartBarProps {
    options: ProductOption[];
}

export default function StickyAddToCartBar({ options }: StickyAddToCartBarProps) {
    const [isVisible, setIsVisible] = useState(false);
    // Dynamic state object to store selected values by option name
    const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

    useEffect(() => {
        const handleScroll = () => {
            // Shows the bar only after scrolling down 150 pixels from the top
            if (window.scrollY > 150) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    console.log(options);

    const handleOptionChange = (optionName: string, value: string) => {
        setSelectedOptions(prev => ({
            ...prev,
            [optionName]: value
        }));
    };

    return (
        <div className="fixed bottom-4 left-0 right-0 z-50 mx-auto hidden container border border-light bg-white py-1 px-2 md:block">
            <div className="flex items-center justify-between">

                {/* Product Details */}
                <div className="flex items-center gap-3">
                    <img
                        src="/data-product-1-1.jpg"
                        alt="Gym Coords Set"
                        className="h-18 w-16 rounded object-cover"
                    />
                    <div>
                        <h3 className="text-md font- text-gray-900">Gym Coords Set</h3>
                        <div className="mt-0.5 flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-900">$32.96</span>
                            <span className="text-xs text-gray-400 line-through">$159.00</span>
                            <span className="text-xs font-medium text-brand">55% off</span>
                        </div>
                    </div>
                </div>

                {/* Variants & CTA Actions */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                        {options && options.length > 0 && (
                            <span className="text-xl font-medium text-dark">Variants:</span>
                        )}

                        {/* Dynamically Loop over data array options */}
                        {options?.map((option) => (
                            <div key={option.id} className="relative">
                                <select
                                    value={selectedOptions[option.name] || ""}
                                    onChange={(e) => handleOptionChange(option.name, e.target.value)}
                                    className="appearance-none border border-gray-200 bg-gray-50 py-1.5 pl-3 pr-8 text-sm font-medium text-gray-700 outline-none hover:bg-gray-100 capitalize"
                                >
                                    {/* Capitalize option label */}
                                    <option value="">{option.name}</option>
                                    {option.option_values?.select_values?.map((val) => (
                                        <option key={val.id} value={val.name}>
                                            {val.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Add To Cart Button */}
                <button className="group relative overflow-hidden hover:text-brand hover:border border-brand cursor-pointer bg-brand px-6 py-2 text-xs font-semibold text-white shadow-sm transition-all active:scale-[0.98]">
                    {/* The color layer that fills on hover */}
                    <span className="absolute bottom-0 left-0 h-0 w-0 bg-white transition-all duration-75 ease-out group-hover:h-full group-hover:w-full" />

                    {/* Button text layered safely above the animation fill */}
                    <span className="relative z-10 ">Add To Cart</span>
                </button>

            </div>
        </div>
    );
}
