import { RiArrowLeftRightLine, RiDiscountPercentFill, RiEye2Line, RiHeart2Line, RiShoppingCartLine } from '@remixicon/react';
import React from 'react';

const ProductCard = ({ product }: any) => {
    return (
        <div className="parent group w-full max-w-sm overflow-hidden bg-white border border-light relative">

            {/* Injecting CSS Keyframes directly so you don't need a Tailwind Config file */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marqueeCustom {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
            `}} />

            {/* Image Container */}
            <div className="relative overflow-hidden bg-white above-mobile:p-3 p-1">
                <img
                    src={product.img}
                    alt={product.title}
                    className="w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Curtain Slide Action Icons Stack */}
                <div className="absolute right-4 top-4 flex flex-col gap-2 z-20 overflow-hidden pb-2">
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand transition duration-300 -translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-out delay-[0ms]">
                        <RiHeart2Line size={15} />
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand transition duration-300 -translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-out delay-50">
                        <RiEye2Line size={15} />
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand transition duration-300 -translate-y-36 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-out delay-100">
                        <RiArrowLeftRightLine size={15} />
                    </button>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand transition duration-300 -translate-y-50 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ease-out delay-150">
                        <RiShoppingCartLine size={15} />
                    </button>
                </div>
            </div>

            {/* Content Container */}
            <div className="px-3 py-1">
                <div className='px-2'>
                    <h2 className="md:text-lg text-sm font-semibold text-gray-900">
                        {product.title}
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                        {product.des}
                    </p>

                    {/* Price */}
                    <div className="mt-4 flex items-center gap-2">
                        <span className="md:text-lg text-xs text-gray-900">
                            ${product.price}
                        </span>

                        {product.discount && (
                            <>
                                <span className="text-gray-400 line-through text-xs md:text-lg">
                                    ${product.compareAtPrice}
                                </span>
                                <span className="text-brand text-xs md:text-lg">
                                    ${product.compareAtPrice} OFF
                                </span>
                            </>
                        )}
                    </div>
                </div>

                {/* News Tape Ticker Banner (No config required layout) */}
                <div className="border-t border-light py-2 text-gray mt-4 overflow-hidden bg-neutral-50 relative flex items-center">

                    {/* Track 1 */}
                    <div
                        // style={{ animation: 'marqueeCustom 12s linear infinite' }}
                        className="anime flex whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-4 [animation-duration:12s] group-hover:[animation-duration:6s]"
                    >
                        <span className="text-xs font-thin uppercase tracking-wider text-black flex gap-2 items-center mr-12"> <RiDiscountPercentFill size={15} className='text-brand' /> Limited time offer: {product.discount || 5}% OFF</span>
                    </div>

                    {/* Track 2 (Appended clone for a seamless infinity illusion) */}
                    <div
                        // style={{ animation: 'marqueeCustom 12s linear infinite' }}
                        className="anime flex whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-4 [animation-duration:12s] group-hover:[animation-duration:6s]"
                        aria-hidden="true"
                    >
                        <span className="text-xs font-thin uppercase tracking-wider text-black flex gap-2 items-center mr-12"> <RiDiscountPercentFill size={15} className='text-brand' /> Limited time offer: {product.discount || 5}% OFF</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;
