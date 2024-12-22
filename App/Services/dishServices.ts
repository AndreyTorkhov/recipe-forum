import { api } from "../Api/axiosConfig";
import { Dish } from "../Types/api";

export class DishService {
  static addDish(data: {
    name: string;
    description: string;
    creatorId: number;
    instructionIds: number[];
    ingredientIds: number[];
  }) {
    return api.post<Dish>("/dish", data);
  }

  static addImageToDish(id: number, imageUri: string) {
    const formData = new FormData();
    formData.append("image", {
      uri: imageUri,
      name: imageUri.split("/").pop(),
      type: "image/jpeg",
    } as unknown as Blob);

    return api.post<Dish>(`/dish/${id}/add-image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
