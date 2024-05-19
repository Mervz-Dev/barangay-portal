import { create } from "zustand";
import {
  getRequestsByUserId,
  updateRequest,
  getAllRequests,
} from "../services/form-request";

const useRequestsStore = create((set) => ({
  requests: [],
  fetchRequests: async (userId) => {
    const response = await getRequestsByUserId(userId);
    set({ requests: response });
  },
  fetchAllRequests: async () => {
    const response = await getAllRequests();
    set({ requests: response });
  },
  addNewRequest: (request) => {
    set((state) => ({
      requests: [request, ...state.requests],
    }));
  },
  updateRequest: async (request) => {
    await updateRequest(request);
    set((state) => ({
      requests: state.requests.map((req) =>
        req.id === request.id ? { ...req, ...request } : req
      ),
    }));
  },
}));

export { useRequestsStore };
