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

                {/* Real-time Dynamic Price Display */}
                <div className="text-center mb-6">
                    <span className="text-xs font-bold tracking-wider text-neutral-400 uppercase block mb-1">Estimated Total</span>
                    <span className="text-3xl font-extrabold text-[#333333]">${totalPrice.toFixed(2)}</span>
                </div>

                {/* 1. Size & Color Image/Button Selectors */}
                {selectOptions.map((option) => (
                    <div key={option.id} className="w-full text-center mb-4">
                        <label className="block text-sm font-bold text-[#333333] mb-2 capitalize text-left lg:text-center">
                            {option.name}:
                        </label>

                        {/* Flex container displaying interactive swatches */}
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {option.option_values?.select_values?.map((val) => {
                                const isSelected = selectedOptions[option.name] === String(val.id);

                                return (
                                    <button
                                        key={val.id}
                                        type="button"
                                        onClick={() => handleSelectChange(option.name, String(val.id))}
                                        className={`relative flex items-center justify-center p-0.5 rounded-md border-2 transition-all overflow-hidden group cursor-pointer ${isSelected
                                            ? 'border-[#ec8951] ring-1 ring-[#ec8951]'
                                            : 'border-neutral-200 hover:border-neutral-400'
                                            }`}
                                    >
                                        {/* If a variant image exists, show it; otherwise, show text name badge */}
                                        {val.image ? (
                                            <div className="relative w-12 h-12 bg-neutral-100 flex items-center justify-center">
                                                <img
                                                    src={val.image.startsWith('http') ? val.image : `https://etrolley.net${val.image}`}
                                                    alt={val.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        // Fallback if image fails to load
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
                                        {/* Checked checkmark indicator overlay on selected variations */}
                                        {isSelected && (
                                            <div className="absolute top-0 right-0 bg-[#ec8951] text-white p-0.5 rounded-bl-sm leading-none flex items-center justify-center">
                                                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
                {/* 2. Checkbox Add-ons */}
                {checkboxOptions.map((check) => (
                    <div key={check.id} className="w-full flex justify-center items-center gap-2 mb-5">
                        <input
                            type="checkbox"
                            id={`check-${check.id}`}
                            className="w-4 h-4 border-neutral-300 rounded accent-neutral-800 cursor-pointer"
                            checked={!!selectedCheckboxes[check.id]}
                            onChange={() => handleCheckboxChange(check.id)}
                        />
                        <label htmlFor={`check-${check.id}`} className="text-sm font-semibold text-neutral-700 cursor-pointer select-none">
                            {check.name} {check.new_price > 0 && `(+${check.new_price} $)`}
                        </label>
                    </div>
                ))}

                {/* 3. Quantity Counter */}
                <div className="flex items-center border border-neutral-200 mb-5 overflow-hidden bg-white py-2">
                    <button
                        type="button"
                        onClick={() => adjustQuantity(-1)}
                        className="px-4 py-2 text-neutral-600 font-bold select-none cursor-pointer mx-2 bg-white shadow-sm hover:bg-neutral-50"
                    >
                        <RiArrowLeftSLine size={20} />
                    </button>
                    <span className="w-12 text-center text-sm font-semibold text-neutral-800 py-2 select-none">
                        {quantity}
                    </span>
                    <button
                        type="button"
                        onClick={() => adjustQuantity(1)}
                        className="px-4 py-2 text-neutral-600 font-bold select-none cursor-pointer mx-2 bg-white shadow-sm hover:bg-neutral-50"
                    >
                        <RiArrowRightSLine size={20} />
                    </button>
                </div>

                {/* 4. Action Buttons */}
                <div className="flex items-center justify-center gap-4 w-full mb-4">
                    <button type="button" className="bg-[#f0b293] hover:bg-[#e49f7e] transition-colors text-white font-bold py-2 px-4 text-sm text-center select-none cursor-pointer w-1/2">
                        Add to Cart
                    </button>
                    <button type="button" className="bg-[#f0b293] hover:bg-[#e49f7e] transition-colors text-white font-bold py-2 px-4 text-sm text-center select-none cursor-pointer w-1/2">
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
                <div className="w-full border-t border-neutral-100 pt-4 flex flex-col gap-2 items-center text-sm">
                    <div className="flex items-center justify-center gap-3 w-full font-medium text-neutral-600">
                        <div className="flex items-center gap-1.5 cursor-pointer hover:text-neutral-900">
                            <RiHeartLine size={16} /> Add To Wishlist
                        </div>
                        <div className="flex items-center gap-1.5 cursor-pointer hover:text-neutral-900">
                            <RiRefreshLine size={16} /> Compare
                        </div>
                        <div className="flex items-center gap-1.5 cursor-pointer hover:text-neutral-900">
                            <RiShareLine size={16} /> Share
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductVariants;
