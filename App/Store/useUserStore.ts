import { create } from "zustand";

interface UserState {
  id: number;
  name: string;
  setName: (name: string) => void;
  setId: (id: number) => void;
}

export const useUserStore = create<UserState>()((set) => ({
  id: 0,
  name: "",
  setName: (name) => set(() => ({ name })),
  setId: (id) => set(() => ({ id })),
}));
