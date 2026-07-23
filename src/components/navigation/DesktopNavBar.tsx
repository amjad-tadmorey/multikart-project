'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { SimpleDropdown, GroupedDropdown, NestedFlyoutMenu } from './DesktopDropdowns';
import { itemHasMenu, NavItem } from '@/app/lib/types';
import { RiArrowDownSLine } from '@remixicon/react';

// Small delay before closing on mouseleave so moving the cursor from the
// trigger down into the panel doesn't cause it to flicker shut.
const CLOSE_DELAY = 150;

export default function DesktopNavBar({ items }: { items: NavItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenId(id);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenId(null), CLOSE_DELAY);
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => {
          const hasMenu = itemHasMenu(item);
          const isOpen = openId === item.id;

          return (
            <li
              key={item.id}
              className="relative"
              onMouseEnter={() => hasMenu && open(item.id)}
              onMouseLeave={() => hasMenu && scheduleClose()}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-black"
                >
                  {item.label}
                  {hasMenu && (
                    <RiArrowDownSLine
                      className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>
              ) : (
                // Container-only item: not actually a link.
                <span className="flex cursor-default items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700">
                  {item.label}
                  {hasMenu && (
                    <RiArrowDownSLine
                      className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </span>
              )}

              {hasMenu && isOpen && (
                <div
                  className="absolute left-0 top-full z-50 pt-2"
                  onMouseEnter={() => open(item.id)}
                  onMouseLeave={scheduleClose}
                >
                  {item.menuType === 'simple' && <SimpleDropdown links={item.links!} />}
                  {item.menuType === 'grouped' && <GroupedDropdown groups={item.groups!} />}
                  {item.menuType === 'nested' && <NestedFlyoutMenu items={item.children!} />}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
