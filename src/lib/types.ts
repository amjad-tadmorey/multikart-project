// lib/types.ts
// Shared data shapes for the whole navigation system.
// Both the desktop hover-menus and the mobile plus/minus tree read from
// these exact same types, so you only ever maintain ONE data source.

/** A plain, final link. Always clickable, never has children. */
export interface SimpleLink {
  id: string;
  label: string;
  href: string;
}

/** A titled bucket of links, e.g. "By Room", "By Material", "Popular". */
export interface NavGroup {
  title?: string; // omit for an untitled group
  links: SimpleLink[];
}

/**
 * A node used inside a "nested" (Windows "New ▸" style) menu.
 * If it has children, it is a non-clickable container that reveals a
 * flyout on hover (desktop) or expands in place (mobile).
 * If it has no children, it's a normal clickable link.
 * `children` can itself contain nodes with further children, so this
 * supports sub ▸ sub-sub ▸ sub-sub-sub ... to any depth.
 */
export interface NestedItem {
  id: string;
  label: string;
  href?: string;
  children?: NestedItem[];
}

export type MenuType = 'simple' | 'grouped' | 'nested';

/**
 * A top-level nav item (one of the links in the header's middle row,
 * or one of the "other" left-side links).
 *
 * - href optional: if omitted, the item is just a container/trigger
 *   (matches "some main links don't actually point to anything").
 * - menuType decides which shape the dropdown/flyout takes:
 *     'simple'  -> flat list, no titles, no images            (use `links`)
 *     'grouped' -> multiple titled columns of links            (use `groups`)
 *     'nested'  -> Windows right-click "New ▸" style flyout     (use `children`)
 * - if menuType is omitted, the item is treated as a plain link with no menu.
 */
export interface NavItem {
  id: string;
  label: string;
  href?: string;
  menuType?: MenuType;
  links?: SimpleLink[];
  groups?: NavGroup[];
  children?: NestedItem[];
}

export function itemHasMenu(item: NavItem): boolean {
  if (!item.menuType) return false;
  if (item.menuType === 'simple') return !!item.links?.length;
  if (item.menuType === 'grouped') return !!item.groups?.length;
  if (item.menuType === 'nested') return !!item.children?.length;
  return false;
}
