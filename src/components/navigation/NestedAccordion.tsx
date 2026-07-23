'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NestedItem } from '@/app/lib/types';
import { RiAddLine, RiSubtractLine } from '@remixicon/react';

/**
 * Mobile equivalent of NestedFlyoutMenu. Instead of a flyout, a container
 * with children expands in place, indented, with its own +/- toggle.
 * Recursive, so sub -> sub-sub -> sub-sub-sub all get the same treatment.
 */
export default function NestedAccordion({
  items,
  depth = 0,
}: {
  items: NestedItem[];
  depth?: number;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <ul style={{ paddingLeft: depth > 0 ? 14 : 0 }} className="border-l border-gray-100">
      {items.map((item) => {
        const hasChildren = !!item.children?.length;
        const isOpen = openId === item.id;

        return (
          <li key={item.id}>
            <div className="flex items-center justify-between">
              {hasChildren ? (
                // Container only — does not navigate anywhere.
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex-1 py-2 pl-3 text-left text-sm text-gray-700"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  href={item.href ?? '#'}
                  className="flex-1 py-2 pl-3 text-sm text-gray-600"
                >
                  {item.label}
                </Link>
              )}

              {hasChildren && (
                <button
                  type="button"
                  aria-label={isOpen ? `Collapse ${item.label}` : `Expand ${item.label}`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="p-2 text-gray-400"
                >
                  {isOpen ? <RiSubtractLine size={16} /> : <RiAddLine size={16} />}
                </button>
              )}
            </div>

            {hasChildren && isOpen && (
              <NestedAccordion items={item.children!} depth={depth + 1} />
            )}
          </li>
        );
      })}
    </ul>
  );
}
