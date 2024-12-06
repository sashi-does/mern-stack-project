import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { SearchBar } from '../components/SearchBar';
import { CategoryTabs } from '../components/CategoryTabs';
import { plants } from '../data/plants';
import { Category } from '../types';

const categories: Category[] = ['Vegetables', 'Fruits', 'Herbs', 'Flowers', 'Trees'];

export function Products() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesSearch = plant.name.toLowerCase().includes(search.toLowerCase()) ||
        plant.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || plant.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-6">
        <h1 className="text-3xl font-bold text-white">Available Plants</h1>
        <SearchBar value={search} onChange={setSearch} />
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
      </div>
      
      {filteredPlants.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400">No plants found matching your criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
}