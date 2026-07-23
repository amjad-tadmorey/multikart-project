'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import MobileNavTree from './MobileNavTree';
import { NavItem } from '@/app/lib/types';
import { RiCloseLine } from '@remixicon/react';

export default function MobileSidebar({
  isOpen,
  onClose,
  mainNav,
  secondaryNav,
}: {
  isOpen: boolean;
  onClose: () => void;
  mainNav: NavItem[];
  secondaryNav: NavItem[];
}) {
  // Lock background scroll while the sidebar is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-y-0 left-0 z-50 flex w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
          <Link href="/" onClick={onClose} className="text-lg font-bold">
            YourLogo
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-gray-500 hover:text-gray-900"
          >
            <RiCloseLine size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pb-6">
          <MobileNavTree items={mainNav} />
          <div className="mt-2 border-t border-gray-100" />
          <MobileNavTree items={secondaryNav} sectionTitle="More" />
        </div>
      </aside>
    </>
  );
}
