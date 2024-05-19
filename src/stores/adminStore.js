import { create } from "zustand";
import { getAllRequests } from "../services/form-request";
import { getAllUsers } from "../services/user";

const checkSixMonthsResidency = (startDateOfResidency) => {
  const startDate = new Date(startDateOfResidency);
  const currentDate = new Date();

  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

  return startDate <= sixMonthsAgo;
};

const adminStore = create((set) => ({
  pendingRequestsCount: 0,
  approvedRequestsCount: 0,
  rejectedRequestsCount: 0,
  residentsCount: 0,
  nonResidentsCount: 0,
  businessesCount: 0,
  fetchAdminDashboard: async (userId) => {
    const requests = await getAllRequests();
    const users = await getAllUsers();

    const pendingRequests = requests.filter(
      (request) => request.status === "pending"
    );
    const approvedRequests = requests.filter(
      (request) => request.status === "approved"
    );
    const rejectedRequests = requests.filter(
      (request) => request.status === "rejected"
    );
    const residents = users.filter((user) =>
      checkSixMonthsResidency(user.startDateOfResidency)
    );
    const nonResidents = users.filter(
      (user) => !checkSixMonthsResidency(user.startDateOfResidency)
    );
    set({
      pendingRequestsCount: pendingRequests.length,
      approvedRequestsCount: approvedRequests.length,
      rejectedRequestsCount: rejectedRequests.length,
      residentsCount: residents.length,
      nonResidentsCount: nonResidents.length,
    });
  },
}));

export { adminStore };
