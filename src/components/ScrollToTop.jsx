"use client";

import { useEffect, useState } from "react";
import { RiArrowUpDoubleLine, RiArrowUpSLine } from "@remixicon/react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Button reveals itself only after scrolling down 400px
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-0 md:bottom-6 right-6 z-50 p-3 border border-neutral-200 bg-brand text-neutral-700 shadow-lg transition-all duration-300 transform select-none cursor-pointer active:scale-95 ${isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-75 pointer-events-none"
                }`}
            aria-label="Scroll to top of page"
        >
            <RiArrowUpDoubleLine size={24} className="animate-pulse" color="white" />

        </button>
    );
}
