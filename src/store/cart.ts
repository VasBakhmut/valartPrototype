"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = { id: string; kind: "lock" | "quote"; name: string; price: number; image?: string; quantity: number; details?: string };
type CartState = { items: CartItem[]; add: (item: CartItem) => void; remove: (id: string) => void; setQuantity: (id: string, quantity: number) => void; clear: () => void };

export const useCart = create<CartState>()(persist((set) => ({
  items: [],
  add: (item) => set((state) => {
    const found = state.items.find((entry) => entry.id === item.id);
    return { items: found ? state.items.map((entry) => entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry) : [...state.items, item] };
  }),
  remove: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  setQuantity: (id, quantity) => set((state) => ({ items: state.items.map((item) => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item) })),
  clear: () => set({ items: [] }),
}), { name: "valart-cart-v1" }));
