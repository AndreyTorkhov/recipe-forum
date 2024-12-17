import { api } from "./axiosConfig";
import { Instruction } from "../Types/api";

export class InstructionService {
  static addInstruction({ image, ...data }: Instruction) {
    return api.post<Instruction>("/instruction", data);
  }

  static addImageToInstruction(id: number) {
    return api.post<Instruction>(`/instruction/${id}/image`);
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
