// BNC Builders - Desktop Navigation Component

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavItem } from '@/lib/types';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface NavigationProps {
  items: NavItem[];
}

export function Navigation({ items }: NavigationProps) {
  return (
    <nav className="flex items-center">
      {items.map((item) => (
        <NavItemComponent key={item.href + item.label} item={item} />
      ))}
    </nav>
  );
}

interface NavItemComponentProps {
  item: NavItem;
}

function NavItemComponent({ item }: NavItemComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="px-4 py-2 text-dark hover:text-gold font-medium transition-colors relative group"
      >
        {item.label}
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 px-4 py-2 text-dark hover:text-gold font-medium transition-colors relative group"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
        <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="bg-white shadow-lg rounded-lg py-2 min-w-[240px] border-t-2 border-t-gold border-x border-b border-gray-100">
          {item.children.map((child) => (
            <DropdownItem key={child.href + child.label} item={child} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface DropdownItemProps {
  item: NavItem;
}

function DropdownItem({ item }: DropdownItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="block px-4 py-2.5 text-dark hover:bg-gold/10 hover:text-gold transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-2.5 text-dark hover:bg-gold/10 hover:text-gold transition-colors"
      >
        {item.label}
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Nested Dropdown */}
      <div
        className={`absolute top-0 left-full pl-2 transition-all duration-200 ${
          isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-2'
        }`}
      >
        <div className="bg-white shadow-lg rounded-lg py-2 min-w-[220px] border-t-2 border-t-gold border-x border-b border-gray-100">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 text-dark hover:bg-gold/10 hover:text-gold transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
