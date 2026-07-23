"use client"

import { useState } from "react";

export default function TabbedContent() {
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
                    <div>
                        <p className="mb-4">
                            The Model is wearing a white blouse from our stylist's collection, see the image for a mock-up of what the actual blouse would look like.it has text written on it in a black cursive language which looks great on a white color.
                        </p>
                        <h1 className="text-black font-medium text-lg mb-2">Fabric:</h1>
                        <p className="mb-4">
                            Art silk is manufactured by synthetic fibres like rayon. It's light in weight and is soft on the skin for comfort in summers.Art silk is manufactured by synthetic fibres like rayon. It's light in weight and is soft on the skin for comfort in summers.
                        </p>
                        <h1 className="text-black font-medium text-lg mb-2">Size & Fit:</h1>
                        <p className="mb-4">The model (height 5'8") is wearing a size S</p>
                        <h1 className="text-black font-medium text-lg mb-2">Material & Care:</h1>
                        <p>
                            Top fabric: pure cotton <br />
                            Bottom fabric: pure cotton <br />
                            Hand-wash <br />
                        </p>
                    </div>
                )}

                {activeTab === 1 && (
                    <div className="max-w-6xl mx-auto p-4 font-sans text-[#333333] flex flex-col md:flex-row gap-6 items-start">

                        {/* LEFT SIDE: SUMMARY OVERVIEW PANEL */}
                        <div className="w-full md:w-[35%] bg-white p-5 border border-neutral-200 rounded-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl font-bold tracking-tight">4.00</span>
                                <div>
                                    <div className="flex text-[#ffb400] text-lg leading-none">★★★★☆</div>
                                    <span className="text-xs text-neutral-400 block mt-0.5">Based on 25 Rating</span>
                                </div>
                            </div>

                            <hr className="border-neutral-100 my-4" />

                            <div className="mb-4">
                                <h3 className="text-sm font-bold text-neutral-800">Review this product</h3>
                                <p className="text-xs text-neutral-400 mt-0.5">Let other customers know what you think</p>
                            </div>

                            {/* Star Progress Distribution Bars */}
                            <div className="space-y-2 mb-5">
                                {/* 5 Stars */}
                                <div className="flex items-center text-xs gap-3">
                                    <span className="w-4 font-semibold text-right flex items-center justify-end gap-0.5">
                                        5<span className="text-[10px] text-neutral-500">★</span>
                                    </span>
                                    <div className="flex-1 bg-neutral-100 h-2 rounded-full overflow-hidden">
                                        <div className="h-full rounded-full bg-[#28a745] w-[100%]" />
                                    </div>
                                    <span className="w-4 text-neutral-400 text-left">9</span>
                                </div>

                                {/* 4 Stars */}
                                <div className="flex items-center text-xs gap-3">
                                    <span className="w-4 font-semibold text-right flex items-center justify-end gap-0.5">
                                        4<span className="text-[10px] text-neutral-500">★</span>
                                    </span>
                                    <div className="flex-1 bg-neutral-100 h-2 rounded-full overflow-hidden">
                                        <div className="h-full rounded-full bg-[#28a745] w-[78%]" />
                                    </div>
                                    <span className="w-4 text-neutral-400 text-left">7</span>
                                </div>

                                {/* 3 Stars */}
                                <div className="flex items-center text-xs gap-3">
                                    <span className="w-4 font-semibold text-right flex items-center justify-end gap-0.5">
                                        3<span className="text-[10px] text-neutral-500">★</span>
                                    </span>
                                    <div className="flex-1 bg-neutral-100 h-2 rounded-full overflow-hidden">
                                        <div className="h-full rounded-full bg-[#28a745] w-[55%]" />
                                    </div>
                                    <span className="w-4 text-neutral-400 text-left">5</span>
                                </div>

                                {/* 2 Stars */}
                                <div className="flex items-center text-xs gap-3">
                                    <span className="w-4 font-semibold text-right flex items-center justify-end gap-0.5">
                                        2<span className="text-[10px] text-neutral-500">★</span>
                                    </span>
                                    <div className="flex-1 bg-neutral-100 h-2 rounded-full overflow-hidden">
                                        <div className="h-full rounded-full bg-[#fd7e14] w-[33%]" />
                                    </div>
                                    <span className="w-4 text-neutral-400 text-left">3</span>
                                </div>

                                {/* 1 Star */}
                                <div className="flex items-center text-xs gap-3">
                                    <span className="w-4 font-semibold text-right flex items-center justify-end gap-0.5">
                                        1<span className="text-[10px] text-neutral-500">★</span>
                                    </span>
                                    <div className="flex-1 bg-neutral-100 h-2 rounded-full overflow-hidden">
                                        <div className="h-full rounded-full bg-[#dc3545] w-[11%]" />
                                    </div>
                                    <span className="w-4 text-neutral-400 text-left">1</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-[#f38b51] hover:bg-[#e07b43] text-white text-xs font-bold py-3 rounded-sm transition-colors uppercase tracking-wider"
                            >
                                Write Review
                            </button>
                        </div>

                        {/* RIGHT SIDE: FEEDBACK STREAM FEED */}
                        <div className="w-full md:w-[65%] space-y-3 max-h-[460px] overflow-y-auto pr-1">

                            {/* Card Review 1 */}
                            <div className="flex items-start gap-4 p-4 border border-neutral-100 rounded-sm bg-[#fafafa]">
                                <div className="w-10 h-10 shrink-0 bg-white border border-neutral-200 text-neutral-800 font-bold rounded-sm flex items-center justify-center text-base shadow-sm select-none">
                                    J
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs font-bold text-neutral-800">John Due</span>
                                            <span className="text-[10px] text-neutral-400">10 Aug 2024 11:05AM</span>
                                        </div>
                                        <div className="text-[#ffb400] text-xs tracking-tighter leading-none select-none">★★★★☆</div>
                                    </div>
                                    <p className="text-xs text-neutral-500 leading-relaxed pt-1 font-normal italic">
                                        "Wow! This fashion product exceeded all my expectations! From the moment I opened the package, I could tell it was something special. The quality of the materials is outstanding."
                                    </p>
                                </div>
                            </div>

                            {/* Card Review 2 */}
                            <div className="flex items-start gap-4 p-4 border border-neutral-100 rounded-sm bg-[#fafafa]">
                                <div className="w-10 h-10 shrink-0 bg-white border border-neutral-200 text-neutral-800 font-bold rounded-sm flex items-center justify-center text-base shadow-sm select-none">
                                    R
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs font-bold text-neutral-800">Rhoda Mayer</span>
                                            <span className="text-[10px] text-neutral-400">10 Aug 2024 11:05AM</span>
                                        </div>
                                        <div className="text-[#ffb400] text-xs tracking-tighter leading-none select-none">★★★★★</div>
                                    </div>
                                    <p className="text-xs text-neutral-500 leading-relaxed pt-1 font-normal italic">
                                        "Nice the attention to detail in the craftsmanship is truly impressive. Not only does it look fabulous, but it feels incredibly comfortable too. I've received so many compliments whenever I wear it!"
                                    </p>
                                </div>
                            </div>

                            {/* Card Review 3 */}
                            <div className="flex items-start gap-4 p-4 border border-neutral-100 rounded-sm bg-[#fafafa]">
                                <div className="w-10 h-10 shrink-0 bg-white border border-neutral-200 text-neutral-800 font-bold rounded-sm flex items-center justify-center text-base shadow-sm select-none">
                                    J
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xs font-bold text-neutral-800">Jack Deo</span>
                                            <span className="text-[10px] text-neutral-400">10 Aug 2024 11:05AM</span>
                                        </div>
                                        <div className="text-[#ffb400] text-xs tracking-tighter leading-none select-none">★★★★☆</div>
                                    </div>
                                    <p className="text-xs text-neutral-500 leading-relaxed pt-1 font-normal italic">
                                        "The product boasts impressive craftsmanship, meticulous attention to detail,"
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                )}

                {activeTab === 2 && (
                    <div className="max-w-6xl mx-auto p-6 bg-white font-sans text-[#333333]">

                        {/* TOP HEADER BAR */}
                        <div className="flex items-center justify-between border-b border-neutral-100 pb-5 mb-6">
                            <h2 className="text-base font-semibold tracking-tight text-neutral-800">
                                Have Doubts Regarding This Product ?
                            </h2>
                            <button
                                type="button"
                                className="bg-[#fafafa] border border-neutral-200 text-neutral-700 text-xs font-semibold px-5 py-2.5 rounded-sm hover:bg-neutral-100 transition-colors"
                            >
                                Post Your Question
                            </button>
                        </div>

                        {/* QUESTIONS & ANSWERS LIST */}
                        <div className="divide-y divide-neutral-100">

                            {/* ITEM 1 */}
                            <div className="py-5 first:pt-0 last:pb-0">
                                {/* Question Row */}
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-neutral-50 border border-neutral-200 text-neutral-700 text-[10px] font-bold px-1.5 py-0.5 rounded-sm min-w-[24px] text-center select-none">
                                            Q1
                                        </span>
                                        <h3 className="text-sm font-bold text-neutral-800 leading-tight">
                                            Does the dress offer any UV protection?
                                        </h3>
                                    </div>

                                    {/* Voting Thumbs */}
                                    <div className="flex items-center gap-3 text-neutral-400 text-xs select-none shrink-0 pt-0.5">
                                        <button type="button" className="flex items-center gap-1 hover:text-neutral-600">
                                            <span>👍</span> <span className="text-[10px]">0</span>
                                        </button>
                                        <button type="button" className="flex items-center gap-1 hover:text-neutral-600">
                                            <span>👎</span> <span className="text-[10px]">0</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Answer Row */}
                                <div className="flex items-start gap-3 pl-0">
                                    <span className="bg-[#f38b51] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm min-w-[24px] text-center select-none mt-0.5">
                                        A1
                                    </span>
                                    <p className="text-xs text-neutral-500 leading-relaxed max-w-4xl">
                                        Yes, the dress offers UV protection. It blocks harmful UV rays, providing an additional layer of sun safety.
                                    </p>
                                </div>
                            </div>

                            {/* ITEM 2 */}
                            <div className="py-5">
                                {/* Question Row */}
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-neutral-50 border border-neutral-200 text-neutral-700 text-[10px] font-bold px-1.5 py-0.5 rounded-sm min-w-[24px] text-center select-none">
                                            Q2
                                        </span>
                                        <h3 className="text-sm font-bold text-neutral-800 leading-tight">
                                            Are there any pockets, and if so, how many and where are they located?
                                        </h3>
                                    </div>

                                    {/* Voting Thumbs */}
                                    <div className="flex items-center gap-3 text-neutral-400 text-xs select-none shrink-0 pt-0.5">
                                        <button type="button" className="flex items-center gap-1 hover:text-neutral-600">
                                            <span>👍</span> <span className="text-[10px]">0</span>
                                        </button>
                                        <button type="button" className="flex items-center gap-1 hover:text-neutral-600">
                                            <span>👎</span> <span className="text-[10px]">0</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Answer Row */}
                                <div className="flex items-start gap-3">
                                    <span className="bg-[#f38b51] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm min-w-[24px] text-center select-none mt-0.5">
                                        A2
                                    </span>
                                    <p className="text-xs text-neutral-500 leading-relaxed max-w-4xl">
                                        Yes, there are pockets. There are two pockets, one on each side of the garment.
                                    </p>
                                </div>
                            </div>

                            {/* ITEM 3 */}
                            <div className="py-5 last:pb-0">
                                {/* Question Row */}
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-neutral-50 border border-neutral-200 text-neutral-700 text-[10px] font-bold px-1.5 py-0.5 rounded-sm min-w-[24px] text-center select-none">
                                            Q3
                                        </span>
                                        <h3 className="text-sm font-bold text-neutral-800 leading-tight">
                                            Is the fabric breathable and quick-drying?
                                        </h3>
                                    </div>

                                    {/* Voting Thumbs */}
                                    <div className="flex items-center gap-3 text-neutral-400 text-xs select-none shrink-0 pt-0.5">
                                        <button type="button" className="flex items-center gap-1 hover:text-neutral-600">
                                            <span>👍</span> <span className="text-[10px]">0</span>
                                        </button>
                                        <button type="button" className="flex items-center gap-1 hover:text-neutral-600">
                                            <span>👎</span> <span className="text-[10px]">0</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Answer Row */}
                                <div className="flex items-start gap-3">
                                    <span className="bg-[#f38b51] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm min-w-[24px] text-center select-none mt-0.5">
                                        A3
                                    </span>
                                    <p className="text-xs text-neutral-500 leading-relaxed max-w-4xl">
                                        Yes, the fabric is breathable, allowing for excellent airflow. Additionally, it is quick-drying, ensuring comfort during and after activities.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                )}
            </div>

        </div>
    );
}
