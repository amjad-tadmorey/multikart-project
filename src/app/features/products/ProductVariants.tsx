import React, { useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine, RiHeartLine, RiRefreshLine, RiShareLine } from '@remixicon/react'

// ==========================================
// 1. Core Data Interfaces
// ==========================================
export interface SelectValue {
    id: number
    name: string
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

// Component Prop Definitions
interface ProductVariantsProps {
    options?: OptionsWrapper | null
    options_check?: OptionsCheckWrapper | null
    basePrice: number // Passed from parent (e.g. sale_price)
}

// State Interfacing
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
    // Direct data isolation array mapping
    const selectOptions: ProductOption[] = options?.options || []
    const checkboxOptions: CheckboxOption[] = options_check?.options || []

    // Typed component states
    const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsState>({})
    const [selectedCheckboxes, setSelectedCheckboxes] = useState<SelectedCheckboxesState>({})
    const [quantity, setQuantity] = useState<number>(1)

    // Component functional mutation hooks
    const handleSelectChange = (optionName: string, valueId: string): void => {
        setSelectedOptions(prev => ({ ...prev, [optionName]: valueId }))
    }

    const handleCheckboxChange = (checkboxId: number): void => {
        setSelectedCheckboxes(prev => ({ ...prev, [checkboxId]: !prev[checkboxId] }))
    }

    const adjustQuantity = (amount: number): void => {
        setQuantity(prev => Math.max(1, prev + amount))
    }

    // ==========================================
    // 3. Dynamic Price Calculation Logic
    // ==========================================
    // Calculate total cost of active checkbox add-ons
    const addonsTotal = checkboxOptions.reduce((sum, check) => {
        if (selectedCheckboxes[check.id]) {
            return sum + (Number(check.new_price) || 0)
        }
        return sum
    }, 0)

    // Calculate final price: (Base Price + Add-ons) * Quantity
    const totalPrice = (basePrice + addonsTotal) * quantity

    return (
        <div className="lg:sticky lg:top-10 space-y-6">
            <div className="bg-white border border-neutral-100 p-6 font-sans flex flex-col items-center w-full max-w-md mx-auto">

                {/* Real-time Dynamic Price Display */}
                <div className="text-center mb-6">
                    <span className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                        Total Price
                    </span>
                    <span className="text-3xl font-black text-neutral-900">
                        {totalPrice.toFixed(2)} $
                    </span>
                    {quantity > 1 && (
                        <span className="block text-xs text-neutral-500 mt-1">
                            {((basePrice + addonsTotal)).toFixed(2)} $ each
                        </span>
                    )}
                </div>

                {/* 1. Size & Color Dropdowns */}
                {selectOptions.map((option) => (
                    <div key={option.id} className="w-full text-center mb-4">
                        <label className="block text-sm font-bold text-[#333333] mb-2 capitalize">
                            {option.name}:
                        </label>
                        <select
                            className="w-full border border-neutral-200 p-2 text-sm text-neutral-700 bg-white rounded-sm focus:outline-none focus:border-neutral-400 block mx-auto"
                            value={selectedOptions[option.name] || ''}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSelectChange(option.name, e.target.value)}
                        >
                            <option value="">Select {option.name}</option>
                            {option.option_values?.select_values?.map((val) => (
                                <option key={val.id} value={val.id}>
                                    {val.name}
                                </option>
                            ))}
                        </select>
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
                            <RiRefreshLine size={16} /> Add To Compare
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 cursor-pointer hover:text-neutral-900 mt-1">
                        <RiShareLine size={16} /> Share
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductVariants
