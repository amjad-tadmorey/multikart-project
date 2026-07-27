import React, { useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine, RiHeartLine, RiRefreshLine, RiShareLine } from '@remixicon/react'

// ==========================================
// 1. Core Data Interfaces
// ==========================================
export interface SelectValue {
    id: number
    name: string
    image?: string
}

export interface OptionValueContainer {
    select_values: SelectValue[]
}

export interface ProductOption {
    id: number
    name: string
    type: 'select'
    price: string | null
    new_price: number
    option_values: OptionValueContainer
}

export interface OptionsWrapper {
    options: ProductOption[]
}

const ProductVariants: React.FC = () => {

    return (
        <div className="lg:sticky lg:top-10 space-y-6 w-full max-w-md mx-auto">
            <div className="bg-white border border-neutral-100 p-6 font-sans flex flex-col items-center w-full">


                <div className="w-full text-center mb-4 flex items-center justify-center gap-2">

                    <button
                        type="button"
                        className={`relative flex items-center justify-center p-0.5 border border-light ring ring-brand transition-all overflow-hidden group cursor-pointer`}
                    >
                        <div className="relative w-18 h-18 bg-neutral-100 flex items-center justify-center">
                            <img
                                src={`/data-product-1-color-red.jpg`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    if (e.currentTarget.nextElementSibling) {
                                        e.currentTarget.nextElementSibling.classList.remove('hidden');
                                    }
                                }}
                            />

                        </div>

                    </button>
                    <button
                        type="button"
                        className={`relative flex items-center justify-center p-0.5 border border-light transition-all overflow-hidden group cursor-pointer`}
                    >
                        <div className="relative w-18 h-18 bg-neutral-100 flex items-center justify-center">
                            <img
                                src={`/data-product-1-color-red.jpg`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    if (e.currentTarget.nextElementSibling) {
                                        e.currentTarget.nextElementSibling.classList.remove('hidden');
                                    }
                                }}
                            />
                            <span className="hidden absolute inset-0 flex items-center justify-center text-xs font-semibold px-2 py-1 text-neutral-800 bg-neutral-50 min-w-10">
                                red
                            </span>
                        </div>

                    </button>
                    <button
                        type="button"
                        className={`relative flex items-center justify-center p-0.5 border border-light transition-all overflow-hidden group cursor-pointer`}
                    >
                        <div className="relative w-18 h-18 bg-neutral-100 flex items-center justify-center">
                            <img
                                src={`/data-product-1-color-red.jpg`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    if (e.currentTarget.nextElementSibling) {
                                        e.currentTarget.nextElementSibling.classList.remove('hidden');
                                    }
                                }}
                            />
                            <span className="hidden absolute inset-0 flex items-center justify-center text-xs font-semibold px-2 py-1 text-neutral-800 bg-neutral-50 min-w-10">
                                red
                            </span>
                        </div>

                    </button>

                </div>


                <div className="flex items-center border border-neutral-200 mb-5 overflow-hidden bg-lighter py-1">
                    <button
                        type="button"
                        className="px-2 py-1 text-neutral-600 font-bold select-none cursor-pointer mx-2 bg-white shadow-sm hover:bg-neutral-50"
                    >
                        <RiArrowLeftSLine size={20} />
                    </button>
                    <span className="w-12 text-center text-sm text-neutral-800 py-2 select-none">
                        1
                    </span>
                    <button
                        type="button"
                        className="px-2 py-1 text-neutral-600 font-bold select-none cursor-pointer mx-2 bg-white shadow-sm hover:bg-neutral-50"
                    >
                        <RiArrowRightSLine size={20} />
                    </button>
                </div>

                {/* 4. Action Buttons */}
                <div className="flex items-center justify-center gap-4 w-full mb-4">
                    <button type="button" className="bg-[#f0b293] hover:bg-[#e49f7e] transition-colors text-white font-bold py-3 px-4 text-sm text-center select-none cursor-pointer w-1/2">
                        Out Of Stock
                    </button>
                    <button type="button" className="bg-[#f0b293] hover:bg-[#e49f7e] transition-colors text-white font-bold py-3 px-4 text-sm text-center select-none cursor-pointer w-1/2">
                        Buy Now
                    </button>
                </div>

                {/* 5. Inventory Progress */}
                <p className="text-neutral-500 text-sm font-medium mb-2 text-center">
                    Please Hurry Only 10 Left In Stock
                </p>
                <div className="w-full bg-neutral-100 h-2.5 overflow-hidden mb-6 rounded-full">
                    <div className="bg-linear-to-r from-[#8cc63f] to-[#5cb85c] h-full w-full" />
                </div>

                {/* 6. Utility Links */}
                <div className="w-full border-t border-neutral-100 pt-4 flex flex-col gap-1 items-center text-xs">
                    <div className="grid grid-cols-2 justify-center items-center gap-2 w-full font-light text-neutral-600">
                        <div className="flex items-center gap-1.5 cursor-pointer hover:text-neutral-900">
                            <RiHeartLine size={16} /> Add To Wishlist
                        </div>
                        <div className="flex items-center gap-1.5 cursor-pointer hover:text-neutral-900">
                            <RiRefreshLine size={16} />Add To Compare
                        </div>
                        <div className="flex gap-1.5 cursor-pointer hover:text-neutral-900 col-span-2 mx-auto">
                            <RiShareLine size={16} /> Share
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductVariants;
