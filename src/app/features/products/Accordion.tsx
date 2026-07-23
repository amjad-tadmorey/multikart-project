"use client"


import { useState, useRef, ReactNode } from "react";

interface AccordionProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="overflow-hidden bg-white">
            {/* Trigger Header */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="border border-neutral-200 border-0.5 w-full bg-[#fcfcfc] px-4 py-3 flex items-center justify-between text-sm font-semibold text-[#333333] hover:bg-neutral-50 focus:bg-neutral-50 outline-none transition-colors duration-100 text-left"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-medium">{title}</span>
                <svg
                    className={`w-4 h-4 text-neutral-500 transition-transform duration-100 ease-out shrink-0 ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dynamic Animated Content Container */}
            <div
                ref={contentRef}
                style={{
                    height: isOpen ? contentRef.current?.scrollHeight : 0,
                }}
                className="transition-[height] duration-100 ease-out overflow-hidden"
            >
                <div className="pt-2 text-sm text-neutral-600 border-t border-neutral-100 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
}
