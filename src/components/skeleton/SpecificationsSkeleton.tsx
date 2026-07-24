import React from 'react'
import Skeleton from './Skeleton'

const SpecificationsSkeleton = () => {
    return (
        <div className="space-y-6">
            {/* Paragraph 1 Skeleton */}
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-4/5" />
            </div>

            {/* Heading + Text 1 Skeleton */}
            <div className="space-y-2">
                <Skeleton className="h-5 w-20 mb-1" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
            </div>

            {/* Heading + Text 2 Skeleton */}
            <div className="space-y-2">
                <Skeleton className="h-5 w-24 mb-1" />
                <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Heading + List Items Skeleton */}
            <div className="space-y-2">
                <Skeleton className="h-5 w-32 mb-1" />
                <Skeleton className="h-4 w-44" />
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-24" />
            </div>
        </div>
    )
}

export default SpecificationsSkeleton