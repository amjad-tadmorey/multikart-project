"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    RiEqualizer2Line,
    RiHeartFill,
    RiPhoneFill,
    RiSearchLine,
    RiShoppingCartLine,
    RiUser3Fill,
    RiMenuLine,
    RiCloseLine,
    RiAddLine,
    RiSubtractLine,
    RiArrowDownSLine,
    RiTriangleFill,
    RiArrowLeftSLine,
    RiArrowRightSLine
} from '@remixicon/react';
import TopHeader from "@/app/features/navui/TopHeader";

// Left Sidebar Categories Nested Tree Data Configuration
const leftSidebarTree = [
    {
        title: "Electronics",
        href: "/electronics",
        subLinks: [
            {
                title: "Computers",
                href: "/electronics/computers",
                subSubLinks: [
                    { title: "Laptops", href: "/electronics/computers/laptops" },
                    { title: "Desktops", href: "/electronics/computers/desktops" }
                ]
            },
            {
                title: "Audio",
                href: "/electronics/audio",
                subSubLinks: [
                    { title: "Headphones", href: "/electronics/audio/headphones" }
                ]
            }
        ]
    },
    {
        title: "Fashion",
        href: "/fashion",
        subLinks: [
            {
                title: "Men's Clothing",
                href: "/fashion/mens",
                subSubLinks: [
                    { title: "Shirts", href: "/fashion/mens/shirts" },
                    { title: "Jeans", href: "/fashion/mens/jeans" }
                ]
            }
        ]
    }
];

export default function Header() {
    const [isLeftOpen, setIsLeftOpen] = useState(false);
    const [isRightOpen, setIsRightOpen] = useState(false);

    const [activeRightNav, setActiveRightNav] = useState<number | null>(null);
    const [activeLeftL1, setActiveLeftL1] = useState<number | null>(null);
    const [activeLeftL2, setActiveLeftL2] = useState<string | null>(null);

    // Prevents document body background from scrolling when sidebars open
    useEffect(() => {
        if (isLeftOpen || isRightOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isLeftOpen, isRightOpen]);

    const toggleRightNav = (index: number) => setActiveRightNav(activeRightNav === index ? null : index);
    const toggleLeftL1 = (index: number) => setActiveLeftL1(activeLeftL1 === index ? null : index);
    const toggleLeftL2 = (l1Idx: number, l2Idx: number) => {
        const key = `${l1Idx}-${l2Idx}`;
        setActiveLeftL2(activeLeftL2 === key ? null : key);
    };
    return (
        <>
            {/* Main Header Container Flow */}
            <header className="w-full shadow-sm bg-white/80 backdrop-blur-md relative z-40">
                {/* Top Info Bar */}
                <TopHeader />

                {/* Navbar Content Branding Row */}
                <div className="mx-auto flex above-mobile:py-8 py-4 max-w-6xl items-center justify-between px-4">
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

                        <Link href="/" className="hidden above-mobile:flex  items-center gap-2 font-bold text-xl text-blue-600 tracking-tight">
                            <img src="/logo.png" alt="Logo" className="w-40" />
                        </Link>
                    </div>

                    <Link href="/" className=" above-mobile:hidden flex items-center gap-2 font-bold text-xl text-blue-600 tracking-tight">
                        <img src="/logo.png" alt="Logo" className="w-32" />
                    </Link>

                    <div className="flex items-center gap-12">
                        {/* DESKTOP NAV - EACH LINK HAS ITS OWN DISTINCT CUSTOM WRAPPER BOX */}
                        <nav className="hidden special:flex items-center gap-8 text-sm font-semibold text-dark">

                            <div className="group py-3">
                                <Link href="/" className="hover:text-brand transition-colors duration-500">Home</Link>
                            </div>

                            <div className="group py-3">
                                <Link href="/" className="hover:text-brand transition-colors duration-500 flex items-center">Feature <RiArrowDownSLine size={16} /></Link>
                                <div className="absolute top-24 left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">
                                    <div className="w-275 max-w-6xl bg-white border border-gray-100 shadow-2xl rounded-md p-8 grid grid-cols-6 gap-6 text-left">

                                        {/* Column 1: Invoice & Elements */}
                                        <div className="flex flex-col gap-5">
                                            <div>
                                                <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                    Invoice Template
                                                </h4>
                                                <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Invoice 1</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Invoice 2</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Invoice 3</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Invoice 4</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Invoice 5</Link>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                    Elements
                                                </h4>
                                                <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                    <Link href="#" className="flex items-center gap-1 hover:text-brand relative transition-colors duration-500">
                                                        Elements Page <span className="text-amber-500 text-[10px]">⚡</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Column 2: Email Template Group A */}
                                        <div>
                                            <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                Email Template
                                            </h4>
                                            <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Welcome</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Announcement</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Abandonment</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer 2</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Review</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Featured Product</Link>
                                            </div>
                                        </div>

                                        {/* Column 3: Email Template Group B */}
                                        <div>
                                            <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                Email Template
                                            </h4>
                                            <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">
                                                    <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Black Friday</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">
                                                    <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Christmas</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">
                                                    <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Cyber-Monday</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">
                                                    <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Flash Sale</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">
                                                    <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Order Success</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">
                                                    <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Order Success 2</Link>
                                            </div>
                                        </div>

                                        {/* Column 4: Cookie Bar & Search */}
                                        <div className="flex flex-col gap-5">
                                            <div>
                                                <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                    Cookie Bar
                                                </h4>
                                                <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                    <Link href="#" className="flex items-center gap-1 hover:text-brand relative transition-colors duration-500">
                                                        Bottom
                                                        <span className="text-amber-500 text-[10px] relative group/text">⚡</span>
                                                        <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    </Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Bottom Left</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Bottom Right</Link>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                    Search
                                                </h4>
                                                <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                    <Link href="#" className="flex items-center gap-1 hover:text-brand relative transition-colors duration-500">
                                                        Ajax Search <span className="text-amber-500 text-[10px]">⚡</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Column 5: Models */}
                                        <div>
                                            <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                Model
                                            </h4>
                                            <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Newsletter</Link>
                                                <Link href="#" className="flex items-center gap-1 hover:text-brand relative transition-colors duration-500">
                                                    Exit <span className="text-amber-500 text-[10px]">⚡</span>
                                                </Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Christmas</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Black Friday</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Cyber Monday</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    New Year</Link>
                                            </div>
                                        </div>

                                        {/* Column 6: Add To Cart Options */}
                                        <div>
                                            <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                Add To Cart
                                            </h4>
                                            <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Cart Modal Popup</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Cart Top</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Cart Bottom</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Cart Left</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Cart Right</Link>
                                            </div>
                                        </div>

                                    </div>
                                    <img src="/links-1.jpg" alt="" />
                                </div>
                            </div>

                            <div className="group py-3 relative">
                                <Link href="/" className="hover:text-brand transition-colors duration-500 flex items-center">Shop <RiArrowDownSLine size={16} /></Link>
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">
                                    <div className="w-60 max-w-6xl h-96 overflow-y-scroll bg-white border border-gray-100 shadow-2xl rounded-md py-6 px-8">

                                        {/* Column 1: Invoice & Elements */}
                                        <div className="flex flex-col gap-5 parent-link relative">
                                            <div>
                                                <div className="flex flex-col gap-4 text-xs font-normal text-gray-500">
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Table Style</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Top Filter</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Modern</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Left side bar</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Right Side Bar
                                                    </Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        No Side Bar
                                                    </Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Category Slider
                                                    </Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Side Bar Popup
                                                    </Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Metro
                                                    </Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Full Width
                                                    </Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Load More
                                                    </Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        2 Grid
                                                    </Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        3 Grid
                                                    </Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        4 Grid
                                                    </Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        5 Grid
                                                    </Link>
                                                </div>
                                            </div>
                                            <RiTriangleFill className="rotate-180 opacity-0 sub-link fixed bottom-0 bg-white self-center text-brand" size={12} />

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="group py-3">
                                <Link href="/" className="hover:text-brand transition-colors duration-500 flex items-center">Product <RiArrowDownSLine size={16} /></Link>
                                <div className="absolute top-24 left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">
                                    <div className="w-275 max-w-6xl bg-white border border-gray-100 shadow-2xl rounded-md p-8 grid grid-cols-5 grid-rows-2 gap-6 text-left">

                                        <div>
                                            <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                Email Template
                                            </h4>
                                            <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Welcome</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Announcement</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Abandonment</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer 2</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Review</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Featured Product</Link>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                Email Template
                                            </h4>
                                            <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Welcome</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Announcement</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Abandonment</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer 2</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Review</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Featured Product</Link>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                Email Template
                                            </h4>
                                            <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Welcome</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Announcement</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Abandonment</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer 2</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Review</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Featured Product</Link>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                Email Template
                                            </h4>
                                            <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Welcome</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Announcement</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Abandonment</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer 2</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Review</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Featured Product</Link>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                Email Template
                                            </h4>
                                            <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Welcome</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Announcement</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Abandonment</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer 2</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Review</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Featured Product</Link>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                                Email Template
                                            </h4>
                                            <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Welcome</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Announcement</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Abandonment</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Offer 2</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Review</Link>
                                                <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                    Featured Product</Link>
                                            </div>
                                        </div>

                                    </div>
                                    <img src="/links-1.jpg" alt="" />
                                </div>
                            </div>

                            <div className="group py-3 relative">
                                <Link href="/" className="hover:text-brand transition-colors duration-500 flex items-center gap-1">
                                    Shop <RiArrowDownSLine size={16} />
                                </Link>

                                {/* Absolute bridge positioning container sitting safely below the header item */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">

                                    {/* Main Base Card. Using 'overflow-x-visible' ensures nested hover states can float sideways safely */}
                                    <div className="w-64 bg-white border border-gray-100 shadow-2xl rounded-md py-4 px-4 overflow-x-visible relative">
                                        <div className="flex flex-col text-xs font-normal text-gray-500">

                                            <div className="relative group/level2 w-full">
                                                {/* The main trigger block */}
                                                <div className="flex items-center justify-between px-3 py-2 text-dark hover:bg-gray-50 hover:text-brand rounded-md transition-colors duration-300 cursor-pointer">
                                                    <span className="text-sm font-medium">Table Style</span>
                                                    <span className="text-gray-400 text-[10px] transform group-hover/level2:translate-x-1 transition-transform duration-300">→</span>
                                                </div>

                                                {/* SUB-SUB MENU CARD: Positioned exactly edge-to-edge with NO gaps to maintain cursor capture */}
                                                <div className="absolute top-0 left-full pl-3 opacity-0 invisible translate-x-2 group-hover/level2:opacity-100 group-hover/level2:visible group-hover/level2:translate-x-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover/level2:pointer-events-auto">
                                                    <div className="w-52 bg-white border border-gray-100 shadow-xl rounded-md p-3 flex flex-col gap-1">
                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2 pb-1.5 border-b border-gray-50 mb-1">Table Layouts</span>
                                                        <Link href="/shop/table-basic" className="px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-brand rounded transition-colors duration-300">Basic Table</Link>
                                                        <Link href="/shop/table-bordered" className="px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-brand rounded transition-colors duration-300">Bordered Table</Link>
                                                        <Link href="/shop/table-striped" className="px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-brand rounded transition-colors duration-300">Striped Table</Link>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="relative group/level2 w-full mt-0.5">
                                                <div className="flex items-center justify-between px-3 py-2 text-dark hover:bg-gray-50 hover:text-brand rounded-md transition-colors duration-300 cursor-pointer">
                                                    <span className="text-sm font-medium">Top Filter</span>
                                                    <span className="text-gray-400 text-[10px] transform group-hover/level2:translate-x-1 transition-transform duration-300">→</span>
                                                </div>

                                                {/* SUB-SUB MENU CARD */}
                                                <div className="absolute top-0 left-full pl-3 opacity-0 invisible translate-x-2 group-hover/level2:opacity-100 group-hover/level2:visible group-hover/level2:translate-x-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover/level2:pointer-events-auto">
                                                    <div className="w-52 bg-white border border-gray-100 shadow-xl rounded-md p-3 flex flex-col gap-1">
                                                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2 pb-1.5 border-b border-gray-50 mb-1">Filter Layouts</span>
                                                        <Link href="/shop/filter-multi" className="px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-brand rounded transition-colors duration-300">Multi-Select</Link>
                                                        <Link href="/shop/filter-price" className="px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-brand rounded transition-colors duration-300">Price Range</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* =========================================================
                    STANDARD SUB LINKS (Flattened for clean, layout processing)
                   ========================================================= */}
                                            <div className="h-px bg-gray-100 my-2" /> {/* Light section divider line */}

                                            <Link href="/shop/modern" className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand rounded-md transition-colors duration-300">Modern</Link>
                                            <Link href="/shop/left-sidebar" className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand rounded-md transition-colors duration-300">Left Sidebar</Link>
                                            <Link href="/shop/right-sidebar" className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand rounded-md transition-colors duration-300">Right Sidebar</Link>
                                            <Link href="/shop/no-sidebar" className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand rounded-md transition-colors duration-300">No Sidebar</Link>
                                            <Link href="/shop/category-slider" className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand rounded-md transition-colors duration-300">Category Slider</Link>
                                            <Link href="/shop/metro" className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand rounded-md transition-colors duration-300">Metro</Link>
                                            <Link href="/shop/full-width" className="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-brand rounded-md transition-colors duration-300">Full Width</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* 5. PAGES (Standard Simple Link without Dropdown) */}
                            <div className="group py-3 relative">
                                <Link href="/" className="hover:text-brand transition-colors duration-500 flex items-center">Pages <RiArrowDownSLine size={16} /></Link>
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-500 ease-in-out z-50 pointer-events-none group-hover:pointer-events-auto">
                                    <div className="w-60 max-w-6xl bg-white border border-gray-100 shadow-2xl rounded-md py-6 px-8">

                                        {/* Column 1: Invoice & Elements */}
                                        <div className="flex flex-col gap-5 parent-link relative">
                                            <div>
                                                <div className="flex flex-col gap-4 text-xs font-normal text-gray-500">
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Table Style</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Top Filter</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Modern</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Left side bar</Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        Right Side Bar
                                                    </Link>
                                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                                        No Side Bar
                                                    </Link>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </nav>

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
                </div>

            </header>

            {/* Global Backdrop Overlay */}
            {(isLeftOpen || isRightOpen) && (
                <div
                    onClick={() => { setIsLeftOpen(false); setIsRightOpen(false); }}
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-500"
                />
            )}

            <aside className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out p-6 
    overflow-y-auto md:overflow-y-visible 
    ${isLeftOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                    <h2 className="font-bold text-xl text-dark flex items-center">
                        <button onClick={() => setIsLeftOpen(false)} className="text-dark hover:text-dark transition-colors duration-500 cursor-pointer">
                            <RiArrowLeftSLine size={32} />
                        </button>
                        Back
                    </h2>
                </div>

                {/* ========================================================================= */}
                {/* 1. MOBILE VIEW (Accordion Structure)                                     */}
                {/* ========================================================================= */}
                <div className="mt-6 flex flex-col gap-2 md:hidden">
                    {leftSidebarTree.map((l1, l1Idx) => {
                        const hasL2 = l1.subLinks && l1.subLinks.length > 0;
                        const isL1Active = activeLeftL1 === l1Idx;

                        return (
                            <div key={l1Idx} className="border-b border-gray-50 pb-2">
                                <div className="flex items-center justify-between py-2">
                                    <Link href={l1.href} onClick={() => setIsLeftOpen(false)} className="font-medium text-dark hover:text-brand relative transition-colors duration-500">
                                        {l1.title}
                                    </Link>
                                    {hasL2 && (
                                        <button onClick={() => toggleLeftL1(l1Idx)} className="text-gray-400 hover:text-dark p-1 transition-transform duration-500 cursor-pointer">
                                            {isL1Active ? <RiSubtractLine size={18} /> : <RiArrowRightSLine size={18} />}
                                        </button>
                                    )}
                                </div>

                                <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-4 ${isL1Active ? 'max-h-250 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                                    {l1.subLinks?.map((l2, l2Idx) => {
                                        const hasL3 = l2.subSubLinks && l2.subSubLinks.length > 0;
                                        const isL2Active = activeLeftL2 === `${l1Idx}-${l2Idx}`;

                                        return (
                                            <div key={l2Idx} className="my-1">
                                                <div className="flex items-center justify-between py-1.5">
                                                    <Link href={l2.href} onClick={() => setIsLeftOpen(false)} className="text-sm text-gray-700 hover:text-brand relative transition-colors duration-500">
                                                        {l2.title}
                                                    </Link>
                                                    {hasL3 && (
                                                        <button onClick={() => toggleLeftL2(l1Idx, l2Idx)} className="text-gray-400 hover:text-dark p-1 transition-transform duration-500 cursor-pointer">
                                                            {isL2Active ? <RiSubtractLine size={14} /> : <RiAddLine size={14} />}
                                                        </button>
                                                    )}
                                                </div>

                                                <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-4 flex flex-col gap-1.5 ${isL2Active ? 'max-h-125 opacity-100 my-1' : 'max-h-0 opacity-0'}`}>
                                                    {l2.subSubLinks?.map((l3, l3Idx) => (
                                                        <Link key={l3Idx} href={l3.href} onClick={() => setIsLeftOpen(false)} className="text-xs text-gray-500 hover:text-brand relative transition-colors duration-500 py-0.5">
                                                            • {l3.title}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ========================================================================= */}
                {/* 2. DESKTOP VIEW (Cascading Columns - Fixed Overlapping Contexts)         */}
                {/* ========================================================================= */}
                {/* ========================================================================= */}
                {/* MAIN LINK 2: One Level sub-links (Level 1 + Level 2 Flyout)                */}
                {/* ========================================================================= */}
                <div className="group/l1 relative border-b border-gray-50 pb-1">
                    <div className="flex items-center justify-between py-2 px-2 rounded-md hover:bg-gray-50 group-hover/l1:bg-gray-50 transition-colors duration-300 cursor-pointer">
                        <Link href="/fashion" onClick={() => setIsLeftOpen(false)} className="font-medium text-dark group-hover/l1:text-brand transition-colors duration-300 w-full text-left">
                            Fashion
                        </Link>
                        <RiArrowRightSLine size={16} className="text-gray-400 group-hover/l1:translate-x-0.5 transition-transform duration-300" />
                    </div>

                    {/* Level 2 Panel */}
                    <div className="absolute top-0 left-[calc(100%+1rem)] w-60 bg-transparent  rounded-lg shadow-xl p-3 flex flex-col gap-1
        opacity-0 invisible translate-x-2 group-hover/l1:opacity-100 group-hover/l1:visible group-hover/l1:translate-x-0 transition-all duration-300 z-50"
                    >
                        <div className="w-200 bg-white border border-white/60 shadow-2xl rounded-md p-8 text-left flex items-start gap-8
">
                            {/* Column 1: Invoice & Elements */}
                            <div className="flex flex-col gap-5 flex-1">
                                <div>
                                    <h4 className="text font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                        Invoice Template
                                    </h4>
                                    <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">

                                        <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                            Invoice 3</Link>
                                        <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                            Invoice 4</Link>
                                        <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                            Invoice 5</Link>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                        Elements
                                    </h4>
                                    <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                        <Link href="#" className="flex items-center gap-1 hover:text-brand relative transition-colors duration-500">
                                            Elements Page <span className="text-amber-500 text-[10px]">⚡</span>
                                        </Link>
                                        <Link href="#" className="flex items-center gap-1 hover:text-brand relative transition-colors duration-500">
                                            Elements Page <span className="text-amber-500 text-[10px]">⚡</span>
                                        </Link>
                                        <Link href="#" className="flex items-center gap-1 hover:text-brand relative transition-colors duration-500">
                                            Elements Page <span className="text-amber-500 text-[10px]">⚡</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Email Template Group A */}
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-dark mb-3 relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-8 after:h-0.5 after:bg-brand">
                                    Email Template
                                </h4>
                                <div className="flex flex-col gap-2 mt-4 text-xs font-normal text-gray-500">
                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                        Welcome</Link>
                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                        Announcement</Link>
                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                        Abandonment</Link>
                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                        Offer</Link>
                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                        Offer 2</Link>
                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                        Review</Link>
                                    <Link href="#" className="hover:text-brand text-sm group/text relative transition-colors duration-500">                            <span className="absolute -bottom-1 left-0 h-1 w-0 bg-[#f99c0054] rounded-full transition-all duration-300 ease-out group-hover/text:w-1/4" />
                                        Featured Product</Link>
                                </div>
                            </div>
                            <div className="flex-1">
                                <img src="/link-2.jpg" alt="" className="w-" />
                            </div>
                        </div>
                    </div>

                </div>

                {/* ========================================================================= */}
                {/* MAIN LINK 3: Two Levels sub-links (Level 1 + Level 2 + Level 3 Flyouts)   */}
                {/* ========================================================================= */}
                <div className="group/l1 relative pb-1">
                    <div className="flex items-center justify-between py-2 px-2 rounded-md hover:bg-gray-50 group-hover/l1:bg-gray-50 transition-colors duration-300 cursor-pointer">
                        <Link href="/home" onClick={() => setIsLeftOpen(false)} className="font-medium text-dark group-hover/l1:text-brand transition-colors duration-300 w-full text-left">
                            Home Decor
                        </Link>
                        <RiArrowRightSLine size={16} className="text-gray-400 group-hover/l1:translate-x-0.5 transition-transform duration-300" />
                    </div>

                    {/* Level 2 Panel */}
                    <div className="absolute top-0 left-[calc(100%+1rem)] w-60 bg-white border border-gray-100 rounded-lg shadow-xl p-3 flex flex-col gap-1
        opacity-0 invisible translate-x-2 group-hover/l1:opacity-100 group-hover/l1:visible group-hover/l1:translate-x-0 transition-all duration-300 z-50"
                    >
                        {/* Level 2 Sub Item 1 */}
                        <div className="group/l2 relative">
                            <div className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-gray-50 group-hover/l2:bg-gray-50 transition-colors duration-300 cursor-pointer">
                                <Link href="/home/furniture" onClick={() => setIsLeftOpen(false)} className="text-sm text-gray-700 group-hover/l2:text-brand transition-colors duration-300 w-full text-left">
                                    Furniture
                                </Link>
                                <RiArrowRightSLine size={14} className="text-gray-400 group-hover/l2:translate-x-0.5 transition-transform duration-300" />
                            </div>

                            {/* Level 3 Panel */}
                            <div className="absolute top-0 left-[calc(100%+0.5rem)] w-56 bg-white border border-gray-100 rounded-lg shadow-xl p-3 flex flex-col gap-1
                opacity-0 invisible translate-x-2 group-hover/l2:opacity-100 group-hover/l2:visible group-hover/l2:translate-x-0 transition-all duration-300 z-50"
                            >
                                <div className="px-2 pb-1.5 mb-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 text-left">
                                    Furniture Layouts
                                </div>
                                <Link href="/home/furniture/living-room" onClick={() => setIsLeftOpen(false)} className="block px-2 py-1.5 text-xs text-gray-500 hover:text-brand hover:bg-gray-50 rounded-md text-left">Living Room</Link>
                                <Link href="/home/furniture/bedroom" onClick={() => setIsLeftOpen(false)} className="block px-2 py-1.5 text-xs text-gray-500 hover:text-brand hover:bg-gray-50 rounded-md text-left">Bedroom Set</Link>
                                <Link href="/home/furniture/office" onClick={() => setIsLeftOpen(false)} className="block px-2 py-1.5 text-xs text-gray-500 hover:text-brand hover:bg-gray-50 rounded-md text-left">Office Desks</Link>
                            </div>
                        </div>

                        {/* Level 2 Sub Item 2 */}
                        <div className="group/l2 relative">
                            <div className="flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-gray-50 group-hover/l2:bg-gray-50 transition-colors duration-300 cursor-pointer">
                                <Link href="/home/lighting" onClick={() => setIsLeftOpen(false)} className="text-sm text-gray-700 group-hover/l2:text-brand transition-colors duration-300 w-full text-left">
                                    Lighting
                                </Link>
                                <RiArrowRightSLine size={14} className="text-gray-400 group-hover/l2:translate-x-0.5 transition-transform duration-300" />
                            </div>

                            {/* Level 3 Panel */}
                            <div className="absolute top-0 left-[calc(100%+0.5rem)] w-56 bg-white border border-gray-100 rounded-lg shadow-xl p-3 flex flex-col gap-1
                opacity-0 invisible translate-x-2 group-hover/l2:opacity-100 group-hover/l2:visible group-hover/l2:translate-x-0 transition-all duration-300 z-50"
                            >
                                <div className="px-2 pb-1.5 mb-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100 text-left">
                                    Lighting Layouts
                                </div>
                                <Link href="/home/lighting/lamps" onClick={() => setIsLeftOpen(false)} className="block px-2 py-1.5 text-xs text-gray-500 hover:text-brand hover:bg-gray-50 rounded-md text-left">Ceiling Lamps</Link>
                                <Link href="/home/lighting/led" onClick={() => setIsLeftOpen(false)} className="block px-2 py-1.5 text-xs text-gray-500 hover:text-brand hover:bg-gray-50 rounded-md text-left">LED Strips</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </aside>


            {/* RIGHT MOBILE SIDEBAR (Mobile Menu Panel) */}
            <aside className={`fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out p-6 overflow-y-auto ${isRightOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                    <h2 className="font-bold text-lg text-dark">Menu</h2>
                    <button onClick={() => setIsRightOpen(false)} className="text-gray-500 hover:text-dark transition-colors duration-500 cursor-pointer">
                        <RiCloseLine size={24} />
                    </button>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                    {/* Home Mobile Link Accordion */}
                    <div className="border-b border-gray-50 pb-2">
                        <div className="flex items-center justify-between py-2">
                            <Link href="/" onClick={() => setIsRightOpen(false)} className="font-medium text-dark hover:text-brand relative transition-colors duration-500">Home</Link>
                            <button onClick={() => toggleRightNav(0)} className="text-gray-400 hover:text-dark p-1 cursor-pointer">{activeRightNav === 0 ? <RiSubtractLine size={18} /> : <RiAddLine size={18} />}</button>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-4 flex flex-col gap-2 ${activeRightNav === 0 ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            <Link href="/" onClick={() => setIsRightOpen(false)} className="text-sm text-gray-600 hover:text-brand relative transition-colors duration-500 py-1">Main Home</Link>
                            <Link href="/" onClick={() => setIsRightOpen(false)} className="text-sm text-gray-600 hover:text-brand relative transition-colors duration-500 py-1">Fashion Store</Link>
                        </div>
                    </div>

                    {/* Feature Mobile Link Accordion */}
                    <div className="border-b border-gray-50 pb-2">
                        <div className="flex items-center justify-between py-2">
                            <Link href="/" onClick={() => setIsRightOpen(false)} className="font-medium text-dark hover:text-brand relative transition-colors duration-500">Feature</Link>
                            <button onClick={() => toggleRightNav(1)} className="text-gray-400 hover:text-dark p-1 cursor-pointer">{activeRightNav === 1 ? <RiSubtractLine size={18} /> : <RiAddLine size={18} />}</button>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-4 flex flex-col gap-2 ${activeRightNav === 1 ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            <Link href="/" onClick={() => setIsRightOpen(false)} className="text-sm text-gray-600 hover:text-brand relative transition-colors duration-500 py-1">New Arrivals</Link>
                            <Link href="/" onClick={() => setIsRightOpen(false)} className="text-sm text-gray-600 hover:text-brand relative transition-colors duration-500 py-1">Best Sellers</Link>
                        </div>
                    </div>

                    {/* Shop Mobile Link Accordion */}
                    <div className="border-b border-gray-50 pb-2">
                        <div className="flex items-center justify-between py-2">
                            <Link href="/" onClick={() => setIsRightOpen(false)} className="font-medium text-dark hover:text-brand relative transition-colors duration-500">Shop</Link>
                            <button onClick={() => toggleRightNav(2)} className="text-gray-400 hover:text-dark p-1 cursor-pointer">{activeRightNav === 2 ? <RiSubtractLine size={18} /> : <RiAddLine size={18} />}</button>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-4 flex flex-col gap-2 ${activeRightNav === 2 ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            <Link href="/" onClick={() => setIsRightOpen(false)} className="text-sm text-gray-600 hover:text-brand relative transition-colors duration-500 py-1">Grid View</Link>
                            <Link href="/" onClick={() => setIsRightOpen(false)} className="text-sm text-gray-600 hover:text-brand relative transition-colors duration-500 py-1">List View</Link>
                        </div>
                    </div>

                    {/* Product Mobile Link Accordion */}
                    <div className="border-b border-gray-50 pb-2">
                        <div className="flex items-center justify-between py-2">
                            <Link href="/products" onClick={() => setIsRightOpen(false)} className="font-medium text-dark hover:text-brand relative transition-colors duration-500">Product</Link>
                            <button onClick={() => toggleRightNav(3)} className="text-gray-400 hover:text-dark p-1 cursor-pointer">{activeRightNav === 3 ? <RiSubtractLine size={18} /> : <RiAddLine size={18} />}</button>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out pl-4 flex flex-col gap-2 ${activeRightNav === 3 ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            <Link href="/products" onClick={() => setIsRightOpen(false)} className="text-sm text-gray-600 hover:text-brand relative transition-colors duration-500 py-1">Detail Page</Link>
                        </div>
                    </div>

                    {/* Pages Mobile Link */}
                    <div className="border-b border-gray-50 pb-2">
                        <div className="flex items-center justify-between py-2">
                            <Link href="/about" onClick={() => setIsRightOpen(false)} className="font-medium text-dark hover:text-brand relative transition-colors duration-500">Pages</Link>
                        </div>
                    </div>

                    {/* Blog Mobile Link */}
                    <div className="border-b border-gray-50 pb-2">
                        <div className="flex items-center justify-between py-2">
                            <Link href="/contact" onClick={() => setIsRightOpen(false)} className="font-medium text-dark hover:text-brand relative transition-colors duration-500">Blog</Link>
                        </div>
                    </div>

                </div>
            </aside>
        </>
    );
}
