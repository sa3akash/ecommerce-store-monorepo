import { create } from "zustand";
// import { persist, createJSONStorage } from "zustand/middleware";
import { SessionType } from '@ecommerce/utils/src/interfaces/common'


interface AuthState {
  session: SessionType | null;
  setSession: (data: SessionType | null) => void;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const useAuth = create<AuthState>((set, get) => ({
  loading: true,
  setLoading: (isLoading) => set((state) => ({ loading: isLoading })),
  session: null,
  setSession: (data: SessionType | null) => set((state) => ({ session: data })),
}));