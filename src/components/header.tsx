"use client";

import { useState, useEffect } from "react";
import {
    RiEqualizer2Line,
    RiHeartFill,
    RiPhoneFill,
    RiSearchLine,
    RiShoppingCartLine,
    RiUser3Fill,
} from '@remixicon/react';
import DesktopMainNav from "./navigation/DesktopMainNav";
import MobileMainNave from "./navigation/MobileMainNav";
import LeftSide from "./navigation/LeftSide";

export default function Header() {
    const [isLeftOpen, setIsLeftOpen] = useState(false);
    const [isRightOpen, setIsRightOpen] = useState(false);

    useEffect(() => {
        if (isLeftOpen || isRightOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isLeftOpen, isRightOpen]);

    return (
        <>
            {/* Main Header Container Flow */}
            <header className="w-full shadow-sm bg-white/80 backdrop-blur-md relative z-40">
                {/* Top Info Bar */}
                <div className="hidden above-mobile:flex items-center justify-between bg-dark text-light px-4 md:px-30 text-sm">
                    <div className="flex items-center">
                        <p className="py-2.5 pr-6 hidden sm:block">Welcome to Our store Multikart</p>
                        <p className="flex items-center py-2.5">
                            <RiPhoneFill size={16} className="text-brand shrink-0 mr-2" />
                            Call Us: 123 - 456 - 7890
                        </p>
                    </div>
                    <div className="flex items-center">
                        <RiHeartFill size={16} className="text-light hover:scale-110 transition-transform duration-500 cursor-pointer" />
                        <p className="flex items-center gap-2 pl-8 py-2.5">
                            <RiUser3Fill className="text-light" size={16} />
                            My Account
                        </p>
                    </div>
                </div>

                {/* Navbar Content Branding Row */}
                <div className="mx-auto flex above-mobile:py-8 py-4 max-w-6xl items-center justify-between px-4 gap-8">
                    <div className="flex items-center gap-6">

                        <button
                            onClick={() => setIsLeftOpen(true)}
                            className="p-1 relative transition-colors duration-500 cursor-pointer group"
                            aria-label="Open Category Navigation"
                        >
                            {/* Custom 3-Line Dynamic Width Hamburger Icon */}
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                className="transition-colors duration-500"
                            >
                                {/* Top line - Shifted up to y=4 */}
                                <line x1="3" y1="4" x2="10" y2="4" className="transition-all duration-500" />

                                {/* Middle line - Kept centered at y=12 */}
                                <line x1="3" y1="12" x2="20" y2="12" className="transition-all duration-500" />

                                {/* Bottom line - Shifted down to y=20 */}
                                <line x1="3" y1="20" x2="15" y2="20" className="transition-all duration-500" />
                            </svg>

                        </button>

                        <a href="/" className="hidden above-mobile:flex  items-center gap-2 font-bold text-xl text-blue-600 tracking-tight">
                            <img src="/logo.png" alt="Logo" className="w-40" />
                        </a>
                    </div>

                    <a href="/" className="above-mobile:hidden flex items-center gap-2 font-bold text-xl text-blue-600 tracking-tight">
                        <img src="/logo.png" alt="Logo" className="w-32" />
                    </a>


                    {/* DESKTOP NAV - EACH LINK HAS ITS OWN DISTINCT CUSTOM WRAPPER BOX */}
                    <DesktopMainNav />

                    {/* Actions Utilities Tray */}
                    <div className="flex items-center gap-4 text-gray">
                        <button
                            onClick={() => setIsRightOpen(true)}
                            className="block text-brand special:hidden p-1 hover:text-brand relative transition-colors duration-500 cursor-pointer"
                            aria-label="Open Mobile View Options"
                        >
                            {/* Custom 3-Line Dynamic Width Hamburger Icon */}
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                className="transition-colors duration-500"
                            >
                                {/* Top line - Shifted up to y=4 */}
                                <line x1="3" y1="4" x2="10" y2="4" className="transition-all duration-500" />

                                {/* Middle line - Kept centered at y=12 */}
                                <line x1="3" y1="12" x2="20" y2="12" className="transition-all duration-500" />

                                {/* Bottom line - Shifted down to y=20 */}
                                <line x1="3" y1="20" x2="15" y2="20" className="transition-all duration-500" />
                            </svg>
                        </button>

                        <RiSearchLine className="hidden above-mobile:block cursor-pointer hover:text-brand relative transition-colors duration-500" />
                        <RiEqualizer2Line className="hidden above-mobile:block cursor-pointer hover:text-brand relative transition-colors duration-500" />
                        <RiShoppingCartLine className="hidden above-mobile:block cursor-pointer hover:text-brand relative transition-colors duration-500" />

                    </div>

                </div>

            </header>

            {(isLeftOpen || isRightOpen) && (
                <div
                    onClick={() => { setIsLeftOpen(false); setIsRightOpen(false); }}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-500"
                />
            )}

            <LeftSide setIsLeftOpen={setIsLeftOpen} isLeftOpen={isLeftOpen} />

            <MobileMainNave isRightOpen={isRightOpen} setIsRightOpen={setIsRightOpen} />
        </>
    );
}
