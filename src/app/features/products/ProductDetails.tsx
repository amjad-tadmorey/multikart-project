"use client"

import { useState } from "react";
import Review from "./Review";
import Specifications from "./Specifications";
import FAQ from "./FAQ";

export default function ProductDetails({ reviews }: any) {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const tabs = [
        { id: 0, label: "Description" },
        { id: 1, label: "Review" },
        { id: 2, label: "Q & A" },
    ];

    const handleTabClick = (tabId: number) => {
        if (tabId === activeTab || isTransitioning) return;

        // 1. Start synchronized fade-out
        setIsTransitioning(true);

        // 2. Wait exactly 500ms (half second) in total darkness
        setTimeout(() => {
            setActiveTab(tabId);
            // 3. Trigger synchronized fade-in
            setIsTransitioning(false);
        }, 500);
    };



    return (
        <div className="font-sans selection:bg-neutral-100">

            {/* 1. Tab Headers */}
            <div className="flex gap-4 p-4 border border-neutral-200 bg-lighter text-white">
                {tabs.map((tab) => {
                    const isCurrent = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            // disabled={isTransitioning}
                            onClick={() => handleTabClick(tab.id)}
                            className={`text-center py-3 border border-light px-2 text-sm font-semibold outline-none transition-all duration-200 ease-in-out ${isTransitioning
                                ? " text-neutral-300 cursor-not-allowed"
                                : isCurrent
                                    ? "bg-brand text-white"
                                    : "text-black bg-white"
                                }`}
                        >
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* 2. Content Body */}
            <div
                className={`pt-5 text-sm text-neutral-600 leading-relaxed min-h-[160px] transition-all duration-200 ease-in-out border-b border-r border-l border-neutral-200 p-4 ${isTransitioning ? "opacity-0 translate-y-1 filter blur-[2px]" : "opacity-100 translate-y-0 filter blur-0"
                    }`}
            >
                {activeTab === 0 && (
                    <Specifications />
                )}

                {activeTab === 1 && (
                    <Review reviews={reviews} />
                )}

                {activeTab === 2 && (
                    <FAQ />

                )}
            </div>

        </div>
    );
}
