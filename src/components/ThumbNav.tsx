"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    RiCompass4Line,
    RiCompass4Fill,
    RiHeartFill,
    RiHeartLine,
    RiSearchLine,
    RiUserLine,
    RiEqualizer2Line,
    RiSearchFill,
    RiUserFill,
    RiEqualizer2Fill,
    RiShoppingCartLine,
    RiShoppingCartFill
} from "@remixicon/react";

export default function ThumbNav() {
    const pathname = usePathname();

    // Fallback active state tracking if routing isn't used
    const [activeTab, setActiveTab] = useState("home");

    const navItems = [
        { id: "home", label: "Home", href: "/aa", iconLine: RiSearchLine, iconFill: RiSearchFill },
        { id: "wishlist", label: "Wishlist", href: "/wishlist", iconLine: RiHeartLine, iconFill: RiHeartFill },
        { id: "explore", label: "Explore", href: "/explore", iconLine: RiShoppingCartLine, iconFill: RiShoppingCartFill, badge: 3 },
        { id: "cart", label: "Cart", href: "/cart", iconLine: RiUserLine, iconFill: RiUserFill },
        { id: "account", label: "Profile", href: "/account", iconLine: RiEqualizer2Line, iconFill: RiEqualizer2Fill }
    ];

    return (
        /* Pins the container strictly to the bottom of the viewport. 
           Hidden on desktop (md:hidden) and layered safely on top of content (z-50) */
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-t border-gray-100 shadow-[0_-4px_24px_rgba(0,0,0,0.04)] z-50 above-mobile:hidden pb-safe">
            <nav className="flex items-center justify-around h-16 px-2 relative">
                {navItems.map((item) => {
                    // Checks if item is active via router path or fallback local state
                    const isActive = pathname === item.href || activeTab === item.id;
                    const Icon = isActive ? item.iconLine : item.iconLine;

                    return (
                        <Link
                            key={item.id}
                            href={item.href}
                            onClick={() => setActiveTab(item.id)}
                            className="flex flex-col items-center justify-center flex-1 h-full relative group cursor-pointer"
                        >
                            {/* Icon Wrapper with a slight bounce-up effect when active */}
                            <div className={`relative transition-all duration-500 ease-out ${isActive ? "-translate-y-1 text-brand scale-110" : "text-gray-400 group-hover:text-gray-600"
                                }`}>
                                <Icon size={22} className="transition-transform duration-500" />

                                {/* Notification Badge Counter */}
                                {item.badge && item.badge > 0 && (
                                    <span className="absolute -top-1.5 -right-1.5 bg-brand text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-pulse">
                                        {item.badge}
                                    </span>
                                )}
                            </div>

                            {/* Text label underneath */}
                            <span className={`text-[10px] font-medium mt-1 tracking-tight transition-colors duration-500 ${isActive ? "text-brand font-semibold" : "text-gray-400"
                                }`}>
                                {item.label}
                            </span>

                            {/* Active visual indicator bar glowing directly underneath the item */}
                            {isActive && (
                                <span className="absolute bottom-1 w-5 h-0.75 bg-brand rounded-full transition-all duration-500" />
                            )}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
