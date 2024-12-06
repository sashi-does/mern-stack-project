import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Sprout, LogOut } from 'lucide-react';
import { useStore } from '../store/useStore';
import { useAuthStore } from '../store/useAuthStore';

export function Navbar() {
  const cart = useStore((state) => state.cart);
  const { user, logout } = useAuthStore();
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Sprout className="h-6 w-6" />
          <span>FarmingHub</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-green-400">Products</Link>
          <Link to="/chatbot" className="hover:text-green-400">Planting Guide</Link>
          {user ? (
            <>
              <span className="text-gray-400">Hello, {user.name}</span>
              <button
                onClick={logout}
                className="hover:text-green-400 flex items-center space-x-1"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-green-400">Login</Link>
          )}
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 hover:text-green-400" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}