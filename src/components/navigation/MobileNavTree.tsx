'use client';

import { useState } from 'react';
import Link from 'next/link';
import NestedAccordion from './NestedAccordion';
import { itemHasMenu, NavItem } from '@/app/lib/types';
import { RiAddLine, RiSubtractLine } from '@remixicon/react';

export default function MobileNavTree({
  items,
  sectionTitle,
}: {
  items: NavItem[];
  sectionTitle?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div>
      {sectionTitle && (
        <p className="px-4 pb-2 pt-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
          {sectionTitle}
        </p>
      )}
      <ul className="divide-y divide-gray-100">
        {items.map((item) => {
          const hasMenu = itemHasMenu(item);
          const isOpen = openId === item.id;

          return (
            <li key={item.id}>
              <div className="flex items-center justify-between">
                {hasMenu ? (
                  // "Main links that don't point to anything" — pure container.
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex-1 px-4 py-3 text-left text-[15px] font-medium text-gray-800"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href ?? '#'}
                    className="flex-1 px-4 py-3 text-[15px] font-medium text-gray-800"
                  >
                    {item.label}
                  </Link>
                )}

                {hasMenu && (
                  <button
                    type="button"
                    aria-label={isOpen ? `Collapse ${item.label}` : `Expand ${item.label}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="p-3 text-gray-500"
                  >
                    {isOpen ? <RiSubtractLine size={18} /> : <RiAddLine size={18} />}
                  </button>
                )}
              </div>

              {hasMenu && isOpen && (
                <div className="bg-gray-50 pb-3">
                  {/* Shape 1: flat list */}
                  {item.menuType === 'simple' && (
                    <ul>
                      {item.links!.map((link) => (
                        <li key={link.id}>
                          <Link
                            href={link.href}
                            className="block px-6 py-2 text-sm text-gray-600"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Shape 2: titled groups stacked vertically */}
                  {item.menuType === 'grouped' && (
                    <div className="space-y-3 pt-2">
                      {item.groups!.map((group, i) => (
                        <div key={i}>
                          {group.title && (
                            <p className="px-6 py-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
                              {group.title}
                            </p>
                          )}
                          <ul>
                            {group.links.map((link) => (
                              <li key={link.id}>
                                <Link
                                  href={link.href}
                                  className="block px-6 py-2 text-sm text-gray-600"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Shape 3: nested plus-tree, sub -> sub-sub -> ... */}
                  {item.menuType === 'nested' && (
                    <div className="pl-4 pt-1">
                      <NestedAccordion items={item.children!} />
                    </div>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
