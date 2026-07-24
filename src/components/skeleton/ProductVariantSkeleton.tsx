import React from 'react'
import Skeleton from './Skeleton'

const ProductVariantSkeleton = () => {
    return (
        <div className="lg:sticky lg:top-10 space-y-6 w-full max-w-md mx-auto">
            <div className="bg-white border border-neutral-100 p-6 font-sans flex flex-col items-center w-full">
                {/* Price Skeleton */}
                <div className="flex flex-col items-center mb-6 space-y-2">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-8 w-28" />
                </div>
                {/* Swatch Selectors Skeleton */}
                <div className="w-full mb-6 space-y-2 flex flex-col items-center">
                    <Skeleton className="h-4 w-12" />
                    <div className="flex gap-2">
                        <Skeleton className="h-12 w-12 rounded-md" />
                        <Skeleton className="h-12 w-12 rounded-md" />
                        <Skeleton className="h-12 w-12 rounded-md" />
                    </div>
                </div>
                {/* Checkbox Skeleton */}
                <div className="w-full flex justify-center gap-2 mb-6">
                    <Skeleton className="h-4 w-4 rounded-sm" />
                    <Skeleton className="h-4 w-32" />
                </div>
                {/* Quantity Selector Skeleton */}
                <Skeleton className="h-12 w-44 mb-6" />
                {/* Action Buttons Skeleton */}
                <div className="flex gap-4 w-full mb-6">
                    <Skeleton className="h-10 w-1/2" />
                    <Skeleton className="h-10 w-1/2" />
                </div>
                {/* Stock Meter Skeleton */}
                <div className="w-full space-y-2 flex flex-col items-center">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-2.5 w-full rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default ProductVariantSkeleton