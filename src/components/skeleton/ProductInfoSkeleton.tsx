import React from 'react'
import Skeleton from './Skeleton'

const ProductInfoSkeleton = () => {
    return (
        <div className="w-full text-mid-gray bg-white font-sans antialiased pt-4 px-4 space-y-4">
            <div className="flex flex-col items-center lg:items-start space-y-3">
                {/* Alert Banner Skeleton */}
                <Skeleton className="h-4 w-64 rounded" />
                {/* Heading Skeleton */}
                <Skeleton className="h-8 w-5/6 lg:w-full rounded" />
                {/* Stars & Reviews Tracker Skeleton */}
                <Skeleton className="h-5 w-40 rounded" />
            </div>

            {/* Price Matrix Skeleton */}
            <div className="flex flex-col items-center lg:items-start space-y-2 pt-1">
                <Skeleton className="h-7 w-24 rounded" />
                <Skeleton className="h-4 w-32 rounded" />
            </div>

            {/* Utility Navigation Tabs Skeleton */}
            <div className="flex justify-center lg:justify-normal items-center gap-6 py-3 border-t border-b border-neutral-200 mt-2 border-dashed">
                <Skeleton className="h-5 w-32 rounded" />
                <Skeleton className="h-5 w-32 rounded" />
            </div>

            {/* Main Accordion Accord Blocks Skeleton */}
            <div className="space-y-3 pt-2">
                <Skeleton className="h-12 w-full rounded" />
                <Skeleton className="h-12 w-full rounded" />
            </div>
        </div>
    )
}

export default ProductInfoSkeleton