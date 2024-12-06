import React from 'react';
import { Link } from 'react-router-dom';
import { Plant } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  plant: Plant;
}

export function ProductCard({ plant }: ProductCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img
        src={plant.image}
        alt={plant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{plant.name}</h3>
        <p className="text-gray-400 mb-2">{plant.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-400 font-bold">${plant.price.toFixed(2)}</span>
          <span className={`px-2 py-1 rounded-full text-sm ${
            plant.stockStatus === 'In Stock'
              ? 'bg-green-500/20 text-green-400'
              : plant.stockStatus === 'Low Stock'
              ? 'bg-yellow-500/20 text-yellow-400'
              : 'bg-red-500/20 text-red-400'
          }`}>
            {plant.stockStatus}
          </span>
        </div>
        <Link
          to={`/product/${plant.id}`}
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2"
        >
          <span>View Details</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}