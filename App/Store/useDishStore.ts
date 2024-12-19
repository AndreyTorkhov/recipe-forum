import { create } from "zustand";
import { api } from "../Api/axiosConfig";
import { Dish } from "../Types/api";

interface DishState {
  dishes: Dish[];
  isLoading: boolean;
  error: string | null;
  fetchDishes: () => Promise<void>;
  resetDishes: () => void;
}

export const useDishStore = create<DishState>()((set) => ({
  dishes: [],
  isLoading: false,
  error: null,

  fetchDishes: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.get<Dish[]>("/dish");
      set({ dishes: response.data, isLoading: false });
    } catch (error: any) {
      console.error("Ошибка при загрузке блюд:", error);
      set({ error: error.message || "Ошибка загрузки блюд", isLoading: false });
    }
  },

  resetDishes: () => {
    set({ dishes: [], error: null });
  },
}));
