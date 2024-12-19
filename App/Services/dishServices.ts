import { api } from "../Api/axiosConfig";
import { Dish } from "../Types/api";

export class DishService {
  static addDish({ image, ...data }: Dish) {
    return api.post<Dish>("/dish", data);
  }

  static addImageToDish(id: number) {
    return api.post<Dish>(`/dish/${id}/image`);
  }

  static getDishById(id: number) {
    return api.get<Dish>(`/dish/${id}`);
  }

  static getDish() {
    return api.get<Dish>("/dish");
  }

  static patchDish(id: number, { image, ...data }: Dish) {
    return api.patch<Dish>(`/dish/${id}`, data);
  }

  static deleteDish(id: number) {
    return api.delete<Dish>(`/dish/${id}`);
  }
}
