import { api } from "../Api/axiosConfig";
import { Instruction } from "../Types/api";

export class InstructionService {
  static addInstruction(data: Omit<Instruction, "id">) {
    return api.post<Instruction>("/instruction", data);
  }

  static addImageToInstruction(id: number, imageUri: string) {
    const formData = new FormData();
    const imageName = imageUri.split("/").pop();

    formData.append("image", {
      uri: imageUri,
      name: imageName || "photo.jpg",
      type: "image/jpeg",
    } as unknown as Blob);

    console.log("Добавляем изображение к шагу:", {
      id,
      formData,
    });

    return api.post<Instruction>(`/instruction/${id}/add-image`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static getInstructionById(id: number) {
    return api.get<Instruction>(`/instruction/${id}`);
  }

  static getStepsById(id: number) {
    return api.get<Instruction>(`/instruction/${id}/steps`);
  }

  static getInstruction() {
    return api.get<Instruction>("/instruction");
  }

  static patchInstruction(id: number, { image, ...data }: Instruction) {
    return api.patch<Instruction>(`/instruction/${id}`, data);
  }

  static deleteInstruction(id: number) {
    return api.delete<Instruction>(`/instruction/${id}`);
  }
}
