// lib/navData.ts
// Example data — replace with your real links / CMS data.
// This intentionally exercises all three menu shapes so you can see
// each one working end to end. Swap the content, keep the shape.

import { NavItem } from './types';

/**
 * MAIN NAV — the links in the middle of the bottom header row.
 */
export const mainNav: NavItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    // no menuType -> plain link, no dropdown
  },
  {
    id: 'new-arrivals',
    label: 'New Arrivals',
    href: '/new-arrivals',
  },
  {
    id: 'shop',
    label: 'Shop',
    menuType: 'simple',
    links: [
      { id: 'shop-all', label: 'All Products', href: '/shop' },
      { id: 'shop-best', label: 'Best Sellers', href: '/shop/best-sellers' },
      { id: 'shop-new', label: 'Just Added', href: '/shop/new' },
      { id: 'shop-clearance', label: 'Clearance', href: '/shop/clearance' },
    ],
  },
  {
    id: 'categories',
    label: 'Categories',
    menuType: 'grouped',
    groups: [
      {
        title: 'Living Room',
        links: [
          { id: 'cat-sofas', label: 'Sofas', href: '/c/sofas' },
          { id: 'cat-coffee-tables', label: 'Coffee Tables', href: '/c/coffee-tables' },
          { id: 'cat-tv-units', label: 'TV Units', href: '/c/tv-units' },
        ],
      },
      {
        title: 'Bedroom',
        links: [
          { id: 'cat-beds', label: 'Beds', href: '/c/beds' },
          { id: 'cat-wardrobes', label: 'Wardrobes', href: '/c/wardrobes' },
          { id: 'cat-nightstands', label: 'Nightstands', href: '/c/nightstands' },
        ],
      },
      {
        title: 'Lighting',
        links: [
          { id: 'cat-ceiling', label: 'Ceiling Lights', href: '/c/ceiling-lights' },
          { id: 'cat-lamps', label: 'Table Lamps', href: '/c/lamps' },
        ],
      },
    ],
  },
  {
    id: 'brands-departments',
    label: 'Departments',
    menuType: 'nested',
    // No href on the top item and no href on containers below:
    // they only exist to organize the sub-sub links.
    children: [
      {
        id: 'electronics',
        label: 'Electronics',
        children: [
          {
            id: 'phones',
            label: 'Phones',
            children: [
              { id: 'phones-iphone', label: 'iPhone', href: '/electronics/phones/iphone' },
              { id: 'phones-samsung', label: 'Samsung', href: '/electronics/phones/samsung' },
              { id: 'phones-accessories', label: 'Accessories', href: '/electronics/phones/accessories' },
            ],
          },
          {
            id: 'laptops',
            label: 'Laptops',
            children: [
              { id: 'laptops-macbook', label: 'MacBook', href: '/electronics/laptops/macbook' },
              { id: 'laptops-windows', label: 'Windows Laptops', href: '/electronics/laptops/windows' },
            ],
          },
          // a leaf item directly under Electronics (no sub-sub)
          { id: 'electronics-tv', label: 'TVs', href: '/electronics/tv' },
        ],
      },
      {
        id: 'home-appliances',
        label: 'Home Appliances',
        children: [
          { id: 'appliances-kitchen', label: 'Kitchen', href: '/appliances/kitchen' },
          {
            id: 'appliances-laundry',
            label: 'Laundry',
            children: [
              { id: 'laundry-washers', label: 'Washers', href: '/appliances/laundry/washers' },
              { id: 'laundry-dryers', label: 'Dryers', href: '/appliances/laundry/dryers' },
            ],
          },
        ],
      },
      // a leaf item directly under the top-level "Departments"
      { id: 'gift-cards', label: 'Gift Cards', href: '/gift-cards' },
    ],
  },
  {
    id: 'sale',
    label: 'Sale',
    href: '/sale',
  },
];

/**
 * SECONDARY NAV — "the other type of links" you mentioned.
 * Same rules, same components, different content/placement.
 * (Rendered as its own labeled section in the mobile sidebar,
 * and can be dropped anywhere on desktop — see Header.tsx.)
 */
export const secondaryNav: NavItem[] = [
  {
    id: 'help',
    label: 'Customer Service',
    menuType: 'simple',
    links: [
      { id: 'help-contact', label: 'Contact Us', href: '/help/contact' },
      { id: 'help-shipping', label: 'Shipping Info', href: '/help/shipping' },
      { id: 'help-returns', label: 'Returns', href: '/help/returns' },
      { id: 'help-faq', label: 'FAQ', href: '/help/faq' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    menuType: 'grouped',
    groups: [
      {
        title: 'Company',
        links: [
          { id: 'about-story', label: 'Our Story', href: '/about' },
          { id: 'about-careers', label: 'Careers', href: '/careers' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { id: 'about-terms', label: 'Terms of Service', href: '/legal/terms' },
          { id: 'about-privacy', label: 'Privacy Policy', href: '/legal/privacy' },
        ],
      },
    ],
  },
  {
    id: 'inspiration',
    label: 'Inspiration',
    menuType: 'nested',
    children: [
      {
        id: 'guides',
        label: 'Guides',
        children: [
          { id: 'guides-small-space', label: 'Small Space Living', href: '/guides/small-space' },
          { id: 'guides-color', label: 'Color Matching', href: '/guides/color' },
        ],
      },
      { id: 'lookbook', label: 'Lookbook', href: '/lookbook' },
    ],
  },
  {
    id: 'stores',
    label: 'Store Locator',
    href: '/stores',
  },
];
