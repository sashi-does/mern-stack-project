import React from 'react';
import { Category } from '../types';

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: Category | 'All';
  onSelect: (category: Category | 'All') => void;
}

export function CategoryTabs({ categories, activeCategory, onSelect }: CategoryTabsProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
      <button
        onClick={() => onSelect('All')}
        className={`px-4 py-2 rounded-lg whitespace-nowrap ${
          activeCategory === 'All'
            ? 'bg-green-600 text-white'
            : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
        }`}
      >
        All Plants
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${
            activeCategory === category
              ? 'bg-green-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}