import { RiArrowLeftRightLine, RiArrowLeftSLine, RiArrowRightSLine, RiHeartLine, RiQuestionnaireLine, RiRefreshLine, RiShareLine, RiStarFill, RiStarLine, RiTruckLine } from '@remixicon/react'
import React from 'react'
import Accordion from './Accordion'
import ImageGallery from './ImageGallery'

const ProductMainDetails = ({ product }: any) => {
  return (
    <section className="relative bg-white grid grid-cols-1 lg:grid-cols-3 gap-5 above-mobile:gap-10 items-start border-light">

      {/* LEFT COLUMN: Takes up 2 out of 3 columns on desktop screens */}
      <div className="lg:col-span-2 flex space-y-3 above-mobile:space-y-12 flex-col lg:flex-row">

        <ImageGallery product={product} />

        {/* B. Long Details block that forces this layout column to be taller than the gallery */}

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
                {product.title}
              </h1>
            </div>

            {/* Ratings Tracker Area */}
            <div className="flex items-center justify-center lg:justify-normal gap-1.5 text-lg text-neutral-400">
              <div className="flex items-center  gap-0.5 text-amber-400">
                <RiStarFill size={18} />
                <RiStarFill size={18} />
                <RiStarFill size={18} />
                <RiStarFill size={18} />
                <RiStarLine size={18} />
              </div>
              <span className="text-neutral-300">|</span>
              <button className="text-[#ec8951] underline underline-offset-2 cursor-pointer">
                {product.reviews} Reviews
              </button>
            </div>
          </div>

          {/* Price Presentation Segment */}
          <div className="space-y-0.5 pt-1 text-center lg:text-start">
            <div className="text-[22px] font-semibold text-[#ec8951]">
              <span className="text-neutral-400 mr-1.5 text-lg"><span className="font-medium text-xl">MRP:</span></span>
              ${product.price}
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
              <p className="p-2">
                "Gym Coords Set" offers a complete workout ensemble for the modern fitness enthusiast. This coordinated set includes everything needed for a stylish and functional gym session, from moisture-wicking tops to supportive leggings, ensuring both comfort and performance during workouts.
              </p>
            </Accordion>
            <Accordion title="Product Description" defaultOpen={true}>
              <div className="space-y-5 text-[13px] text-[#333333]">

                {/* Core Product Info Matrix */}
                <div>
                  <h3 className="font-bold text-lg mb-3">Product Info</h3>
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-2 leading-relaxed text-mid-gray text-md">
                    <li className="flex items-start gap-1">
                      <span className="text-neutral-400 mt-px select-none text-[10px]">■</span>
                      <span>SKU: SP18 (COPY)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-neutral-400 mt-px select-none text-[10px]">■</span>
                      <span>Unit: 1 Item</span>
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
                      <span>Quantity: 40 Items Left</span>
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

      </div>

      {/* RIGHT COLUMN: Pins itself 24px below viewport top and scrolls within parent track */}
      <div className="lg:sticky lg:top-10 space-y-6">
        <div className="bg-white border border-neutral-100 p-6 font-sans flex flex-col items-center">

          {/* 1. Colour Selection */}
          <div className="text-center mb-4">
            <span className="block text-sm font-bold text-[#333333] mb-2">Colour:</span>
            <div className="flex justify-center gap-2">
              <img src="/data-product-1-color-1.jpg" alt="" className='w-16 border border-brand p-0.5' />
              <img src="/data-product-1-color-2.jpg" alt="" className='w-16 border border-light p-0.5' />
              <img src="/data-product-1-color-2.jpg" alt="" className='w-16 border border-light p-0.5' />
            </div>
          </div>

          {/* 2. Quantity Selector */}
          <div className="flex items-center border border-neutral-200 mb-5 overflow-hidden bg-white py-2">
            <div className="px-4 py-2 text-neutral-600 font-bold select-none cursor-pointer mx-2 bg-white shadow-sm">
              <RiArrowLeftSLine size={20} className="font-bold" />
            </div>
            <span className="w-12 text-center text-sm font-semibold text-neutral-800 py-2 select-none ">
              1
            </span>
            <div className="px-4 py-2 text-neutral-600 font-bold select-none cursor-pointer mx-2 bg-white shadow-sm">
              <RiArrowRightSLine size={20} className="font-bold" />
            </div>
          </div>

          {/* 3. Action Buttons */}
          <div className="flex items-center justify-center gap-6 w-full mb-4">
            <div className="bg-[#f0b293] text-white font-bold py-2 px-4 text-sm text-center select-none">
              Out Of Stock
            </div>
            <div className="bg-[#f0b293] text-white font-bold py-2 px-4 text-sm text-center select-none">
              Buy Now
            </div>
          </div>

          {/* 4. Stock Urgency Text */}
          <p className="text-neutral-500 text-sm font-medium mb-2 text-center">
            Please Hurry Only 10 Left In Stock
          </p>

          {/* 5. Stock Progress Bar */}
          <div className="w-full bg-neutral-100 h-2.5 overflow-hidden mb-6 rounded-full">
            <div className="bg-linear-to-r from-[#8cc63f] to-[#5cb85c] h-full w-full" />
          </div>

          {/* 6. Utility Links */}
          <div className="w-full border-t border-neutral-100 pt-4 flex flex-col gap-2 items-center text-mid-gray text-sm ">
            <div className="flex items-center justify-center gap-3 w-full text-md font-medium text-neutral-600">
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-neutral-900">
                <span><RiHeartLine size={16} /></span> Add To Wishlist
              </div>
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-neutral-900">
                <span><RiRefreshLine size={16} /></span> Add To Compare
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 cursor-pointer hover:text-neutral-900 mt-1">
              <span><RiShareLine size={16} /></span> Share
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default ProductMainDetails