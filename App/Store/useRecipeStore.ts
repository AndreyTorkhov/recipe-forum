import { create } from "zustand";

interface RecipeStep {
  description: string;
  photo: string | null;
}

interface RecipeStore {
  recipeId: number | null;
  selectedIngredients: { label: string; value: number }[];
  steps: RecipeStep[];
  setRecipeId: (id: number) => void;
  setSelectedIngredients: (
    ingredients: { label: string; value: number }[]
  ) => void;
  addStep: (step: RecipeStep) => void;
  updateStep: (index: number, step: RecipeStep) => void;
  resetRecipe: () => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipeId: null,
  selectedIngredients: [],
  steps: [],
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
  resetRecipe: () =>
    set(() => ({
      recipeId: null,
      selectedIngredients: [],
      steps: [],
    })),
}));
