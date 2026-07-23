'use client';

import { useState } from 'react';
import Link from 'next/link';
import DesktopNavBar from './DesktopNavBar';
import MobileSidebar from './MobileSidebar';
import { RiMenuLine, RiShoppingCartLine } from '@remixicon/react';
import { mainNav, secondaryNav } from '@/app/lib/navData';

export default function Header({ cartCount = 0 }: { cartCount?: number }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full bg-white">
      {/* ---- Top part: general site info ---- */}
      <div className="hidden border-b border-gray-100 bg-gray-50 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs text-gray-500">
          <p>Free shipping on orders over $50</p>
          <div className="flex items-center gap-4">
            <Link href="/help/contact" className="hover:text-gray-800">
              Help
            </Link>
            <Link href="/stores" className="hover:text-gray-800">
              Store Locator
            </Link>
          </div>
        </div>
      </div>

      {/* ---- Bottom part: the important row ---- */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        {/* Left: burger (mobile) + logo */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
            className="p-2 text-gray-700 lg:hidden"
          >
            <RiMenuLine size={24} />
          </button>
          <Link href="/" className="text-xl font-bold tracking-tight">
            YourLogo
          </Link>
        </div>

        {/* Middle: desktop nav (hidden below lg, replaced by sidebar) */}
        <DesktopNavBar items={mainNav} />

        {/* Right: cart */}
        <Link href="/cart" className="relative p-2 text-gray-700 hover:text-black">
          <RiShoppingCartLine size={24} />
          {cartCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
              {cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* ---- Mobile sidebar: holds both link sets as a plus/minus tree ---- */}
      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        mainNav={mainNav}
        secondaryNav={secondaryNav}
      />
    </header>
  );
}
