import { create } from "zustand";

const defaultUser = {
  id: "",
  fullname: "",
  birthdate: null,
  birthplace: "",
  startDateOfResidency: null,
  email: "",
};

const useUserStore = create((set) => ({
  isLoading: true,
  isAuthenticated: false,
  ...defaultUser,
  onLogin: (user) => {
    set((state) => ({
      ...state,
      ...user,
      isLoading: false,
      isAuthenticated: true,
    }));
  },
  onLogout: () => {
    set(() => ({
      ...defaultUser,
      isLoading: false,
      isAuthenticated: false,
    }));
  },
  setLoading: (loading) => {
    set({ isLoading: loading });
  },
}));

export { useUserStore };
