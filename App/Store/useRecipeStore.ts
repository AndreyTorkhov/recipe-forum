import { create } from "zustand";

interface RecipeStep {
  description: string;
  photo: string | null;
}

interface RecipeStore {
  recipeId: number | null;
  selectedIngredients: { label: string; value: number }[];
  steps: RecipeStep[];
  stepIds: number[]; // Массив для хранения ID шагов
  setRecipeId: (id: number) => void;
  setSelectedIngredients: (
    ingredients: { label: string; value: number }[]
  ) => void;
  addStep: (step: RecipeStep) => void;
  updateStep: (index: number, step: RecipeStep) => void;
  addStepId: (id: number) => void; // Добавление ID шага
  resetStepIds: () => void; // Сброс ID шагов
  resetRecipe: () => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipeId: null,
  selectedIngredients: [],
  steps: [],
  stepIds: [], // Изначально массив пустой
  setRecipeId: (id) => set(() => ({ recipeId: id })),
  setSelectedIngredients: (ingredients) =>
    set(() => ({ selectedIngredients: ingredients })),
  addStep: (step) => set((state) => ({ steps: [...state.steps, step] })),
  updateStep: (index, step) =>
    set((state) => {
      const updatedSteps = [...state.steps];
      updatedSteps[index] = step;
      return { steps: updatedSteps };
    }),
  addStepId: (id) => set((state) => ({ stepIds: [...state.stepIds, id] })),
  resetStepIds: () => set(() => ({ stepIds: [] })),
  resetRecipe: () =>
    set(() => ({
      recipeId: null,
      selectedIngredients: [],
      steps: [],
      stepIds: [],
    })), // Сбрасываем всё
}));
