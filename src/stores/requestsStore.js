import { create } from "zustand";
import { getRequestsByUserId } from "../services/form-request";

const useRequestsStore = create((set) => ({
  requests: [],
  fetchRequests: async (userId) => {
    const response = await getRequestsByUserId(userId);
    set({ requests: response });
  },
  addNewRequest: (request) => {
    set((state) => ({
      requests: [request, ...state.requests],
    }));
  },
}));

export { useRequestsStore };
