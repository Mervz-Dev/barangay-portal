import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/userStore";

const RedirectPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useUserStore;

  useEffect(() => {
    console.log("Redirecting...", isAuthenticated);
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return null;
};

export default RedirectPage;
