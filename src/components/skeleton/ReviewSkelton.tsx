import React from 'react'
import Skeleton from './Skeleton'

const ReviewSkelton = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 font-sans text-[#333333] flex flex-col md:flex-row gap-6 items-start w-full">
            {/* LEFT SIDE SKELETON */}
            <div className="w-full md:w-[35%] p-5 space-y-4">
                <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-14 rounded" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-24 rounded" />
                        <Skeleton className="h-3 w-32 rounded" />
                    </div>
                </div>
                <hr className="border-neutral-100 my-4" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-36 rounded" />
                    <Skeleton className="h-3 w-52 rounded" />
                </div>
                <div className="space-y-2 pt-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <Skeleton className="h-3 w-6 rounded" />
                            <Skeleton className="h-2 flex-1 rounded-full" />
                            <Skeleton className="h-3 w-4 rounded" />
                        </div>
                    ))}
                </div>
                <Skeleton className="h-10 w-full rounded-sm pt-2" />
            </div>

            {/* RIGHT SIDE SKELETON */}
            <div className="w-full md:w-[65%] space-y-3 pr-1">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 border border-neutral-100 rounded-sm bg-[#fafafa]">
                        <Skeleton className="w-10 h-10 shrink-0 rounded-sm" />
                        <div className="flex-1 space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    <Skeleton className="h-4 w-16 rounded" />
                                    <Skeleton className="h-3 w-12 rounded" />
                                </div>
                                <Skeleton className="h-3 w-16 rounded" />
                            </div>
                            <div className="space-y-2">
                                <Skeleton className="h-3.5 w-full rounded" />
                                <Skeleton className="h-3.5 w-5/6 rounded" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReviewSkelton