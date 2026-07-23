import { RiArrowLeftRightLine, RiQuestionnaireLine, RiStarFill, RiStarLine, RiTruckLine } from '@remixicon/react'
import Accordion from './Accordion'

interface ProductInfoProps {
    name: string,
    rate: number,
    reviews: string[],
    price: number,
    description: string,
    sku: string,
    unit: string,
    quantity: number
}

const ProductsInfo = ({ name, rate, reviews, price, description, sku, unit, quantity }: ProductInfoProps) => {


    return (
        <div className="w-full text-mid-gray bg-white font-sans antialiased pt-4 px-4 space-y-4">

            <div className='text-center lg:text-start'>
                {/* Notification Alert Banner */}
                <div className="flex items-center justify-center above-mobile:justify-baseline gap-2 text-sm font-medium ">
                    <svg className="w-3.5 h-3.5 transform rotate-45 shrink-0 hidden" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    <span className="text-gray text-xs above-mobile:text-md">Selling fast! 4 people have this in their carts</span>
                </div>

                {/* Main Headings */}
                <div className="space-y-1">
                    <h1 className="text-xl above-mobile:text-[28px] font-bold text-[#333333] leading-tight tracking-tight">
                        {name}
                    </h1>
                </div>

                {/* Ratings Tracker Area */}
                <div className="flex items-center justify-center lg:justify-normal gap-1.5 text-lg text-neutral-400">
                    <div className="flex items-center gap-0.5 text-amber-400">
                        {[1, 2, 3, 4, 5].map((starValue) => {
                            // If the rate is greater than or equal to the current star value, fill it
                            return rate >= starValue ? (
                                <RiStarFill key={starValue} size={18} />
                            ) : (
                                <RiStarLine key={starValue} size={18} />
                            )
                        })}
                    </div>
                    <span className="text-neutral-300">|</span>
                    <button className="text-[#ec8951] underline underline-offset-2 cursor-pointer">
                        {reviews?.length || 0} Reviews
                    </button>
                </div>

            </div>

            {/* Price Presentation Segment */}
            <div className="space-y-0.5 pt-1 text-center lg:text-start">
                <div className="text-[22px] font-semibold text-[#ec8951]">
                    <span className="text-neutral-400 mr-1.5 text-lg"><span className="font-medium text-xl">MRP:</span></span>
                    ${price}
                </div>
                <div className="text-sm font-medium">
                    Inclusive all the text
                </div>
            </div>

            {/* Quick Navigation Utility Bars */}
            <div className="flex text-md justify-center lg:justify-normal items-center gap-4 font-thin py-3 border-t border-b border-neutral-200 mt-2 border-dashed">
                <button className="flex items-center gap-1.5 cursor-pointer text-sm above-mobile:text-md">
                    <span><RiTruckLine size={18} /></span> Delivery & Return
                </button>
                <button className="flex items-center gap-1.5 cursor-pointer text-sm above-mobile:text-md">
                    <span><RiQuestionnaireLine size={18} /></span> Ask a Question
                </button>
            </div>

            {/* Accordions Root Segment */}
            <div className="space-y-2.5 pt-2">

                {/* Description Trigger Element */}
                <Accordion title="Product Description" defaultOpen={true}>
                    <div className="p-2" dangerouslySetInnerHTML={{ __html: description }} />
                </Accordion>
                <Accordion title="Product Description" defaultOpen={true}>
                    <div className="space-y-5 text-[13px] text-[#333333]">

                        {/* Core Product Info Matrix */}
                        <div>
                            <h3 className="font-bold text-lg mb-3">Product Info</h3>
                            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 leading-relaxed text-mid-gray text-md">
                                <li className="flex items-start gap-1">
                                    <span className="text-neutral-400 mt-px select-none text-[10px]">■</span>
                                    <span>SKU: {sku} (COPY)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-neutral-400 mt-px select-none text-[10px]">■</span>
                                    <span>Unit: {unit} Item</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-neutral-400 mt-px select-none text-[10px]">■</span>
                                    <span>Weight: 150 Gms</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-neutral-400 mt-px select-none text-[10px]">■</span>
                                    <span>Stock Status: In stock</span>
                                </li>
                                <li className="flex items-start gap-2 col-span-2">
                                    <span className="text-neutral-400 mt-px select-none text-[10px]">■</span>
                                    <span>Quantity: {quantity} Items Left</span>
                                </li>
                            </ul>
                        </div>

                        {/* Logistics Shipping Data Block */}
                        <div className="border-t border-neutral-100 pt-4 space-y-2">
                            <h3 className="font-bold text-sm mb-2">Delivery Details</h3>
                            <div className="flex items-start gap-2.5 leading-normal text-neutral-600">
                                <span className="text-neutral-400 mt-0.5"><RiTruckLine size={16} /></span>
                                <span>Your order is likely to reach you within 7 days.</span>
                            </div>
                            <div className="flex items-start gap-2.5 leading-normal text-neutral-600">
                                <span className="text-neutral-400 mt-0.5"><RiArrowLeftRightLine size={16} /></span>
                                <span>Hassle free returns within 7 Days.</span>
                            </div>
                        </div>

                        <div className="mx-auto">
                            {/* Fieldset creates the outer container box */}
                            <fieldset className="border border-dashed border-neutral-300 px-6 pb-5 pt-3 text-center">

                                {/* Legend embeds the title directly into the top border line */}
                                <legend className="px-3 text-base font-semibold text-neutral-800 font-sans text-left">
                                    Guaranteed Safe Checkout
                                </legend>

                                {/* Flex container for the payment badges */}
                                <div className="flex items-center justify-center gap-3 mt-2">

                                    <img src="/payments.png" alt="" className="w-70" />

                                </div>
                            </fieldset>
                        </div>

                        <div className="mx-auto">
                            {/* Fieldset creates the outer container box */}
                            <fieldset className="border border-dashed border-neutral-300 px-6 pb-5 pt-3 text-center">

                                {/* Legend embeds the title directly into the top border line */}
                                <legend className="px-3 text-base font-semibold text-neutral-800 font-sans text-left">
                                    Secure Checkout
                                </legend>

                                {/* Flex container for the payment badges */}
                                <div className="flex items-center justify-center gap-3 mt-2">

                                    <img src="/secure_payments.png" alt="" className="w-70" />

                                </div>
                            </fieldset>
                        </div>


                    </div>
                </Accordion>



            </div>

        </div>

    )
}

export default ProductsInfo