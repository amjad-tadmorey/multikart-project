# Navigation / Header system

## Install
```bash
npm install react-icons
```
(This uses `react-icons/ri` for Remix Icons — the standard way to use Remix Icon in React.)

## File map
```
lib/types.ts             -> data shapes (NavItem, NavGroup, SimpleLink, NestedItem)
lib/navData.ts            -> your actual link data (edit this)
components/DesktopDropdowns.tsx  -> the 3 desktop dropdown shapes
components/DesktopNavBar.tsx     -> top row, hover-triggered
components/NestedAccordion.tsx   -> recursive mobile +/- for sub -> sub-sub
components/MobileNavTree.tsx     -> top-level mobile accordion, dispatches by shape
components/MobileSidebar.tsx     -> the slide-in drawer (opened by burger)
components/Header.tsx            -> assembles everything
```

## Drop-in usage
```tsx
// app/layout.tsx
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header cartCount={3} />
        {children}
      </body>
    </html>
  );
}
```
Copy the `components/` and `lib/` folders into your project (adjust the
relative import paths, e.g. `../lib/types` → `@/lib/types` if you use
that alias).

## How the 3 shapes work

Everything is driven by `menuType` on a `NavItem` in `lib/navData.ts`:

| menuType  | desktop                                   | mobile                                             |
|-----------|--------------------------------------------|-----------------------------------------------------|
| `simple`  | plain single-column list                   | plain list under the item                           |
| `grouped` | multiple titled columns side by side       | multiple titled blocks stacked, in order            |
| `nested`  | Windows "New ▸" flyout, hover reveals next level, recursive to any depth | plus/minus tree, tapping expands the next level, recursive to any depth |

A top-level item with no `menuType` is just a normal link (e.g. `Home`, `Sale`).
A top-level item with a `menuType` but **no `href`** is a pure container —
on desktop it renders as non-clickable text that only opens its dropdown;
on mobile it's a button that only expands, never navigates — matching what
you described ("main links that don't actually point to anywhere").

Inside a `nested` menu, the same rule applies at every level: a `NestedItem`
with `children` is a container (arrow on desktop, +/- on mobile); one
without `children` is a normal clickable leaf link. Because both
`NestedFlyoutMenu` (desktop) and `NestedAccordion` (mobile) call themselves,
you can go sub → sub-sub → sub-sub-sub etc. by just nesting `children`
deeper in the data — no component changes needed.

## The "second set of links" (secondary nav)
`lib/navData.ts` exports `secondaryNav` separately from `mainNav`. It uses
the exact same `NavItem[]` shape and the exact same components, so it
behaves identically (hover shapes on desktop, +/- tree on mobile) — only
the content differs, per your description. In `Header.tsx` it's currently
placed in the mobile sidebar as a second, labeled section ("More"). If you
also want it visible on desktop, render another
`<DesktopNavBar items={secondaryNav} />` wherever it should live in your
layout (e.g. in the top info bar, or as its own row) — it needs no changes
to work there.

## Behavior notes
- **Desktop**: hovering a top-level item opens its dropdown; a small close
  delay (150ms) prevents flicker when moving the mouse from the trigger
  into the panel. Leaving the whole item+panel area closes it.
- **Mobile**: tapping a top-level item (or its +/− icon) toggles that
  section only; nested items each keep their own independent open state,
  so expanding one sub-sub branch doesn't collapse a sibling.
- Background scroll is locked while the sidebar is open, and it closes on
  overlay click or the ✕ button.
- Everything is keyboard/click based on mobile and hover based on desktop,
  per what you described — no click-to-open needed on desktop.

## Styling
Colors/spacing are plain Tailwind utility classes so you can restyle
freely. Nothing is hardcoded to a specific brand look — swap `bg-white`,
borders, radii, etc. to match your design system.
