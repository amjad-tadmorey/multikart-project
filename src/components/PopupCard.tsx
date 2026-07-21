"use client";

import { RiCloseFill } from "@remixicon/react";
import { useEffect, useState } from "react";

export default function PopupCard() {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // 1. Wait 3 seconds before mounting the component layout
        const showTimeout = setTimeout(() => {
            setShouldRender(true);
            // Small macro-task delay to allow DOM mounting before animation runs
            setTimeout(() => setIsVisible(true), 50);
        }, 3000);

        return () => clearTimeout(showTimeout);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // 2. Wait for the slide-down transition to finish before unmounting entirely
        setTimeout(() => setShouldRender(false), 500);
    };

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed bottom-5 left-4 z-[100] transition-all duration-500 ease-in-out transform
        above-mobile:w-100 mr-auto bg-white border border-blue-500/40 shadow-2xl rounded-md p-1 text-left flex items-start gap-8
        
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
        >
            {/* Close Pinned Trigger */}
            <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-dark transition-colors duration-200 cursor-pointer p-1"
                aria-label="Close popup"
            >
                <RiCloseFill size={20} />
            </button>

            <div className="flex items-start gap-4">
                <img src="/pop.jpg" alt="" />
                {/* Pop-up Core Card Data Content Slots */}
                <div className="flex flex-col gap-1 w-full">
                    <h4 className="font-bold text-md text-dark">Special Offer!</h4>
                    <p className="text-sm text-brand">
                        Floral Dress
                    </p>
                    <p className="text-sm text-gray-500">
                        Get access to our premium
                    </p>
                </div>

            </div>
        </div>
    );
}
