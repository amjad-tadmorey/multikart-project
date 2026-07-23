"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    RiEqualizer2Line,
    RiHeartFill,
    RiPhoneFill,
    RiSearchLine,
    RiShoppingCartLine,
    RiUser3Fill,
} from "@remixicon/react";

import DesktopMainNav from "./navigation/DesktopMainNav";
import MobileMainNav from "./navigation/MobileMainNav";
import LeftSide from "./navigation/LeftSide";

function MenuButton({
    onClick,
    ariaLabel,
}: {
    onClick: () => void;
    ariaLabel: string;
}) {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className="p-1 cursor-pointer transition-colors duration-300 hover:text-brand"
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            >
                <line x1="3" y1="4" x2="10" y2="4" />
                <line x1="3" y1="12" x2="20" y2="12" />
                <line x1="3" y1="20" x2="15" y2="20" />
            </svg>
        </button>
    );
}

function Logo({ mobile = false }: { mobile?: boolean }) {
    return (
        <Link
            href="/"
            className={`items-center gap-2 ${mobile
                ? "flex above-mobile:hidden"
                : "hidden above-mobile:flex"
                }`}
        >
            <img
                src="/logo.png"
                alt="Logo"
                className={mobile ? "w-32" : "w-40"}
            />
        </Link>
    );
}

export default function Header() {
    const [isLeftOpen, setIsLeftOpen] = useState(false);
    const [isRightOpen, setIsRightOpen] = useState(false);

    const closeMenus = () => {
        setIsLeftOpen(false);
        setIsRightOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow =
            isLeftOpen || isRightOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isLeftOpen, isRightOpen]);

    return (
        <>
            <header className="relative z-40 w-full bg-white/80 shadow-sm backdrop-blur-md">
                {/* Top Bar */}
                <div className="hidden above-mobile:flex items-center justify-between bg-dark px-4 md:px-30 text-sm text-light">
                    <div className="flex items-center">
                        <p className="hidden sm:block py-2.5 pr-6">
                            Welcome to Our Store Multikart
                        </p>

                        <p className="flex items-center py-2.5">
                            <RiPhoneFill
                                size={16}
                                className="mr-2 shrink-0 text-brand"
                            />
                            Call Us: 123 - 456 - 7890
                        </p>
                    </div>

                    <div className="flex items-center">
                        <RiHeartFill
                            size={16}
                            className="cursor-pointer transition-transform duration-300 hover:scale-110"
                        />

                        <p className="flex items-center gap-2 py-2.5 pl-8">
                            <RiUser3Fill size={16} />
                            My Account
                        </p>
                    </div>
                </div>

                {/* Main Header */}
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-4 above-mobile:py-8">
                    <div className="flex items-center gap-6">
                        <MenuButton
                            onClick={() => setIsLeftOpen(true)}
                            ariaLabel="Open Categories"
                        />

                        <Logo />
                    </div>

                    <Logo mobile />

                    <DesktopMainNav />

                    <div className="flex items-center gap-4 text-gray">
                        <div className="special:hidden">
                            <MenuButton
                                onClick={() => setIsRightOpen(true)}
                                ariaLabel="Open Mobile Navigation"
                            />
                        </div>

                        <RiSearchLine className="hidden cursor-pointer transition-colors duration-300 hover:text-brand above-mobile:block" />

                        <RiEqualizer2Line className="hidden cursor-pointer transition-colors duration-300 hover:text-brand above-mobile:block" />

                        <RiShoppingCartLine className="hidden cursor-pointer transition-colors duration-300 hover:text-brand above-mobile:block" />
                    </div>
                </div>
            </header>

            {(isLeftOpen || isRightOpen) && (
                <div
                    onClick={closeMenus}
                    className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
                />
            )}

            <LeftSide
                isLeftOpen={isLeftOpen}
                setIsLeftOpen={setIsLeftOpen}
            />

            <MobileMainNav
                isRightOpen={isRightOpen}
                setIsRightOpen={setIsRightOpen}
            />
        </>
    );
}