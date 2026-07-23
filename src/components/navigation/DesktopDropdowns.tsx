'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavGroup, NestedItem, SimpleLink } from '@/app/lib/types';
import { RiArrowRightSLine } from '@remixicon/react';

/* ---------- Shape 1: flat list, no titles, no images ---------- */
export function SimpleDropdown({ links }: { links: SimpleLink[] }) {
  return (
    <div className="min-w-[200px] rounded-lg border border-gray-100 bg-white py-2 shadow-xl">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Shape 2: titled groups, side by side ---------- */
export function GroupedDropdown({ groups }: { groups: NavGroup[] }) {
  return (
    <div className="flex gap-8 rounded-lg border border-gray-100 bg-white p-6 shadow-xl">
      {groups.map((group, i) => (
        <div key={i} className="min-w-[160px]">
          {group.title && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              {group.title}
            </p>
          )}
          <ul className="space-y-1.5">
            {group.links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ---------- Shape 3: Windows "New ▸" style recursive flyout ---------- */
/**
 * Renders a vertical menu. Any item that has children shows an arrow;
 * hovering it opens ANOTHER one of these menus positioned to its right,
 * exactly like Windows Explorer's right-click > New > [file type] menu.
 * Because it calls itself, it supports unlimited nesting depth.
 */
export function NestedFlyoutMenu({ items }: { items: NestedItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <ul className="min-w-[220px] rounded-lg border border-gray-100 bg-white py-2 shadow-xl">
      {items.map((item) => {
        const hasChildren = !!item.children?.length;
        return (
          <li
            key={item.id}
            className="relative"
            onMouseEnter={() => setActiveId(item.id)}
            onMouseLeave={() =>
              setActiveId((current) => (current === item.id ? null : current))
            }
          >
            {hasChildren ? (
              <div className="flex cursor-default items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                <span>{item.label}</span>
                <RiArrowRightSLine className="text-gray-400" />
              </div>
            ) : (
              <Link
                href={item.href ?? '#'}
                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                {item.label}
              </Link>
            )}

            {hasChildren && activeId === item.id && (
              <div className="absolute left-full top-0 pl-1">
                <NestedFlyoutMenu items={item.children!} />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
