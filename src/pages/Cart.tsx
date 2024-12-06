import React from 'react';
import { useStore } from '../store/useStore';
import { Trash2 } from 'lucide-react';

export function Cart() {
  const { cart, removeFromCart, updateQuantity } = useStore();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-400">Your cart is empty</p>
      ) : (
        <div className="space-y-8">
          {cart.map((item) => (
            <div key={item.id} className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <p className="text-gray-400">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  className="bg-gray-700 text-white rounded px-2 py-1"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white">Total:</span>
              <span className="text-2xl font-bold text-green-400">
                ${total.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}