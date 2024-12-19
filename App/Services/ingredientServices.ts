import { api } from "../Api/axiosConfig";
import { Ingredient } from "../Types/api";

export class IngredientService {
  static addIngredient(name: string) {
    return api.post<Ingredient>("/ingredient", name);
  }

  static addImageToIngredient(id: number) {
    return api.post<Ingredient>(`/ingredient/${id}/image`);
  }

  static getIngredientById(id: number) {
    return api.get<Ingredient>(`/ingredient/${id}`);
  }

  static getIngredient() {
    return api.get<Ingredient>("/ingredient");
  }

  static patchIngredient(id: number, name: string) {
    return api.patch<Ingredient>(`/ingredient/${id}`, name);
  }

  static deleteIngredient(id: number) {
    return api.delete<Ingredient>(`/ingredient/${id}`);
  }
}
