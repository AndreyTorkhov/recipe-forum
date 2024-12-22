import { create } from "zustand";

interface FavoriteState {
  favoriteDishes: number[]; // Хранит ID избранных рецептов
  toggleFavorite: (id: number) => void; // Добавляет/удаляет из избранного
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favoriteDishes: [],
  toggleFavorite: (id) =>
    set((state) => ({
      favoriteDishes: state.favoriteDishes.includes(id)
        ? state.favoriteDishes.filter((dishId) => dishId !== id) // Удаляем, если уже в избранном
        : [...state.favoriteDishes, id], // Добавляем, если нет в избранном
    })),
}));
