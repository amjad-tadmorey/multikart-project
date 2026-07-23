import React from 'react'

const FAQ = () => {
    return (
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
    )
}

export default FAQ