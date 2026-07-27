import React, { useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine, RiHeartLine, RiRefreshLine, RiShareLine } from '@remixicon/react'
import { useProductLoading } from '@/context/ProductLoadingContext'
import ProductVariantSkeleton from '@/components/skeleton/ProductVariantSkeleton'

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

export interface CheckboxOption {
    id: number
    name: string
    type: 'checkbox'
    price: string | number
    new_price: number
    option_values: any[]
}

export interface OptionsCheckWrapper {
    options: CheckboxOption[]
}

interface ProductVariantsProps {
    options?: OptionsWrapper | null
    options_check?: OptionsCheckWrapper | null
    basePrice: number
}

interface SelectedOptionsState {
    [key: string]: string
}

interface SelectedCheckboxesState {
    [key: number]: boolean
}

// ==========================================
// 2. Component Logic
// ==========================================
const ProductVariants: React.FC<ProductVariantsProps> = ({ options, options_check, basePrice }) => {
    const { isLoading } = useProductLoading()

    const selectOptions: ProductOption[] = options?.options || []
    const checkboxOptions: CheckboxOption[] = options_check?.options || []

    const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsState>({})
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<SelectedCheckboxesState>({})
    const [quantity, setQuantity] = useState<number>(1)

    const handleSelectChange = (optionName: string, valueId: string): void => {
        setSelectedOptions(prev => ({ ...prev, [optionName]: valueId }))
    }

    const handleCheckboxChange = (checkboxId: number): void => {
        setSelectedCheckboxes(prev => ({ ...prev, [checkboxId]: !prev[checkboxId] }))
    }

    const adjustQuantity = (amount: number): void => {
        setQuantity(prev => Math.max(1, prev + amount))
    }

    const addonsTotal = checkboxOptions.reduce((sum, check) => {
        if (selectedCheckboxes[check.id]) {
            return sum + (Number(check.new_price) || 0)
        }
        return sum
    }, 0)

    const totalPrice = (basePrice + addonsTotal) * quantity

    // ==========================================
    // Skeleton Render Block
    // ==========================================
    if (isLoading) {
        return (
            <ProductVariantSkeleton />
        )
    }
    return (
        <div className="lg:sticky lg:top-10 space-y-6 w-full max-w-md mx-auto">
            <div className="bg-white border border-neutral-100 p-6 font-sans flex flex-col items-center w-full">


                {selectOptions.slice(1, 2).map((option) => (
                    <div key={option.id} className="w-full text-center mb-4">
                        <label className="block text-sm font-bold text-[#333333] mb-2 capitalize text-left lg:text-center">
                            {option.name}
                        </label>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {option.option_values?.select_values?.map((val) => {
                                const isSelected = selectedOptions[option.name] === String(val.id);

                                return (
                                    <button
                                        key={val.id}
                                        type="button"
                                        onClick={() => handleSelectChange(option.name, String(val.id))}
                                        className={`relative flex items-center justify-center p-0.5 border-2 transition-all overflow-hidden group cursor-pointer ${isSelected
                                            ? 'border-[#ec8951] ring-[#ec8951]'
                                            : 'border-neutral-200 hover:border-neutral-400'
                                            }`}
                                    >
                                        {val.name ? (
                                            <div className="relative w-18 h-18 bg-neutral-100 flex items-center justify-center">
                                                <img
                                                    src={`/data-product-1-color-${val.name}.jpg`}
                                                    alt={val.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = 'none';
                                                        if (e.currentTarget.nextElementSibling) {
                                                            e.currentTarget.nextElementSibling.classList.remove('hidden');
                                                        }
                                                    }}
                                                />
                                                <span className="hidden absolute inset-0 flex items-center justify-center text-xs font-semibold px-2 py-1 text-neutral-800 bg-neutral-50 min-w-10">
                                                    {val.name}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-xs font-semibold px-3 py-2 text-neutral-800 bg-neutral-50 min-w-10 block rounded-sm">
                                                {val.name}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}

                <div className="flex items-center border border-neutral-200 mb-5 overflow-hidden bg-lighter py-1">
                    <button
                        type="button"
                        onClick={() => adjustQuantity(-1)}
                        className="px-2 py-1 text-neutral-600 font-bold select-none cursor-pointer mx-2 bg-white shadow-sm hover:bg-neutral-50"
                    >
                        <RiArrowLeftSLine size={20} />
                    </button>
                    <span className="w-12 text-center text-sm text-neutral-800 py-2 select-none">
                        {quantity}
                    </span>
                    <button
                        type="button"
                        onClick={() => adjustQuantity(1)}
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
