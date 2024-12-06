import { create } from 'zustand';
import { Plant } from '../types';

interface CartItem extends Plant {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (plant: Plant) => void;
  removeFromCart: (plantId: string) => void;
  updateQuantity: (plantId: string, quantity: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  addToCart: (plant) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === plant.id);
      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === plant.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...plant, quantity: 1 }] };
    }),
  removeFromCart: (plantId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== plantId),
    })),
  updateQuantity: (plantId, quantity) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === plantId ? { ...item, quantity } : item
      ),
    })),
}));