import { create } from "zustand";
import { api } from "../Api/axiosConfig";
import { Dish } from "../Types/api";

export interface DishWithDetails extends Dish {
  stepIds: number[];
  ingredientIds: number[];
  creatorName: string;
}

interface DishState {
  dishes: DishWithDetails[];
  isLoading: boolean;
  error: string | null;
  fetchDishes: () => Promise<void>;
  addDishWithDetails: (dish: DishWithDetails) => void;
  resetDishes: () => void;
}

export const useDishStore = create<DishState>()((set) => ({
  dishes: [] as DishWithDetails[], // Массив типа DishWithDetails
  isLoading: false,
  error: null,

  fetchDishes: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.get<Dish[]>("/dish");
      const fetchedDishes = response.data.map((dish) => ({
        ...dish,
        stepIds: [], // Пустой массив шагов
        ingredientIds: [], // Пустой массив ингредиентов
        creatorName: "Неизвестный", // Имя по умолчанию
      })) as DishWithDetails[];
      set({ dishes: fetchedDishes, isLoading: false });
    } catch (error: any) {
      console.error("Ошибка при загрузке блюд:", error);
      set({ error: error.message || "Ошибка загрузки блюд", isLoading: false });
    }
  },

  addDishWithDetails: (dish: DishWithDetails) =>
    set((state) => ({ dishes: [...state.dishes, dish] })),

  resetDishes: () => {
    set({ dishes: [], error: null });
  },
}));
