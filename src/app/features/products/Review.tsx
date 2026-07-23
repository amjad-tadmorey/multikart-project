import React from 'react';
import { RiStarFill, RiStarLine } from '@remixicon/react';

// ==========================================
// 1. Data Type Definitions
// ==========================================
export interface ReviewData {
    id?: string | number;
    name: string;
    rate: string | number; // Safely handles numeric values or strings from the API
    created_at: string;
    content: string;
}

interface ReviewComponentProps {
    reviews?: ReviewData[] | null; // Keeps component bulletproof during initial loading or empty states
}

type StarKeyType = 5 | 4 | 3 | 2 | 1;

const Review: React.FC<ReviewComponentProps> = ({ reviews }) => {
    // 1. Core metric totals fallbacks
    const totalReviews: number = reviews?.length || 0;

    // 2. Strongly typed dynamic star records collector
    const starCounts: Record<StarKeyType, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    reviews?.forEach((rev: ReviewData) => {
        const roundedRate = Math.round(Number(rev.rate));
        if (roundedRate >= 1 && roundedRate <= 5) {
            starCounts[roundedRate as StarKeyType] += 1;
        }
    });

    // 3. Compute accurate floating point review average
    const totalSum: number = reviews?.reduce((sum: number, rev: ReviewData) => sum + (Number(rev.rate) || 0), 0) || 0;
    const averageRate: number = totalReviews > 0 ? totalSum / totalReviews : 0;

    return (
        <div className="max-w-6xl mx-auto p-4 font-sans text-[#333333] flex flex-col md:flex-row gap-6 items-start">

            {/* LEFT SIDE: SUMMARY OVERVIEW PANEL */}
            <div className="w-full md:w-[35%] p-5">
                <div className="flex items-center gap-3 mb-4">
                    {/* Display dynamically formatted average rating */}
                    <span className="text-4xl font-bold tracking-tight">
                        {averageRate.toFixed(2)}
                    </span>
                    <div>
                        {/* Dynamic main rating stars display */}
                        <div className="flex text-[#ffb400] text-lg leading-none gap-0.5">
                            {([1, 2, 3, 4, 5] as const).map((star: number) => (
                                Math.round(averageRate) >= star ? (
                                    <RiStarFill key={star} size={16} />
                                ) : (
                                    <RiStarLine key={star} size={16} />
                                )
                            ))}
                        </div>
                        <span className="text-xs text-neutral-400 block mt-0.5">
                            Based on {totalReviews} {totalReviews === 1 ? 'Rating' : 'Ratings'}
                        </span>
                    </div>
                </div>

                <hr className="border-neutral-100 my-4" />

                <div className="mb-4">
                    <h3 className="text-sm font-bold text-neutral-800">Review this product</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">Let other customers know what you think</p>
                </div>

                {/* Dynamic Star Progress Distribution Bars */}
                <div className="space-y-2 mb-5">
                    {([5, 4, 3, 2, 1] as StarKeyType[]).map((starKey: StarKeyType) => {
                        const count: number = starCounts[starKey];
                        // Calculate percentage relative to total reviews
                        const percentage: number = totalReviews > 0 ? (count / totalReviews) * 100 : 0;

                        // Match bar colors safely to match your UI pattern dynamically
                        let barColor = 'bg-[#28a745]'; // Green for 3, 4, 5
                        if (starKey === 2) barColor = 'bg-[#fd7e14]'; // Orange
                        if (starKey === 1) barColor = 'bg-[#dc3545]'; // Red

                        return (
                            <div key={starKey} className="flex items-center text-xs gap-3">
                                <span className="w-4 font-semibold text-right flex items-center justify-end gap-0.5">
                                    {starKey}<span className="text-[10px] text-neutral-500">★</span>
                                </span>
                                <div className="flex-1 bg-neutral-100 h-2 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${barColor} transition-all duration-500`}
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                                <span className="w-4 text-neutral-400 text-left">{count}</span>
                            </div>
                        );
                    })}
                </div>

                <button
                    type="button"
                    className="w-full bg-[#f38b51] hover:bg-[#e07b43] text-white text-xs font-bold py-3 rounded-sm transition-colors uppercase tracking-wider cursor-pointer"
                >
                    Write Review
                </button>
            </div>

            {/* RIGHT SIDE: FEEDBACK STREAM FEED */}
            <div className="w-full md:w-[65%] space-y-3 max-h-[460px] overflow-y-auto pr-1">
                {reviews && reviews.length > 0 ? (
                    reviews.map((r: ReviewData, index: number) => {
                        const reviewRate = Math.round(Number(r.rate));

                        return (
                            <div key={r.id || index} className="flex items-start gap-4 p-4 border border-neutral-100 rounded-sm bg-[#fafafa]">
                                <div className="w-10 h-10 shrink-0 bg-white border border-neutral-200 text-neutral-800 font-bold rounded-sm flex items-center justify-center text-base shadow-sm select-none">
                                    <span className="uppercase">
                                        {r.name ? r.name.slice(0, 1) : '?'}
                                    </span>
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs font-bold text-neutral-800">{r.name}</span>
                                            <span className="text-[10px] text-neutral-400">{r.created_at}</span>
                                        </div>
                                        {/* FIXED: Dynamic star display unique to each user's score rating */}
                                        <div className="flex text-[#ffb400] text-[11px] gap-0.5 select-none">
                                            {([1, 2, 3, 4, 5] as const).map((star: number) => (
                                                reviewRate >= star ? (
                                                    <RiStarFill key={star} size={12} />
                                                ) : (
                                                    <RiStarLine key={star} size={12} />
                                                )
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs text-neutral-500 leading-relaxed pt-1 font-normal italic">
                                        {r.content}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-10 text-xs text-neutral-400 bg-[#fafafa] border border-neutral-100 rounded-sm">
                        No reviews posted yet. Be the first to leave feedback!
                    </div>
                )}
            </div>
        </div>
    );
};

export default Review;
