import React from 'react'
import Skeleton from './Skeleton'

const FAQSkeleton = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white font-sans text-[#333333]">
            {/* TOP HEADER BAR SKELETON */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-5 mb-6">
                <Skeleton className="h-5 w-64 rounded" />
                <Skeleton className="h-9 w-36 rounded-sm" />
            </div>

            {/* QUESTIONS & ANSWERS LIST SKELETON */}
            <div className="divide-y divide-neutral-100">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="py-5 first:pt-0 last:pb-0 space-y-4">
                        {/* Question Row Skeleton */}
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3 flex-1">
                                <Skeleton className="h-5 w-[24px] shrink-0 rounded-sm" />
                                <Skeleton className="h-4 w-3/4 rounded" />
                            </div>
                            <Skeleton className="h-4 w-16 shrink-0 rounded" />
                        </div>

                        {/* Answer Row Skeleton */}
                        <div className="flex items-start gap-3">
                            <Skeleton className="h-5 w-[24px] shrink-0 rounded-sm" />
                            <div className="space-y-2 flex-1">
                                <Skeleton className="h-3.5 w-full rounded" />
                                <Skeleton className="h-3.5 w-4/5 rounded" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQSkeleton