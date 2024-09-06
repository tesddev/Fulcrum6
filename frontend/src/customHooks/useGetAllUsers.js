import { useState, useEffect, useCallback } from "react"; // Import useCallback
import { axiosInstance } from "../api/axiosInstance.config"; // Assuming axiosInstance is pre-configured
import { endpoints } from "../api/endpoints"; // Ensure the endpoints are correctly defined
import useNotification from "./useNotification";

const useGetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { onNotify } = useNotification();

  // Function to fetch all users
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(endpoints.users.getAllUsers);
      
      if (response.data?.responseCode === "00") {
        setUsers(response.data.users || []); // Assuming response.data.users contains the list of users
      } else {
        onNotify("error", "Error occurred", response?.data?.responseMessage);
      }
    } catch (error) {
      console.error(error);
      onNotify("error", "Error occurred", error.response?.data?.responseMessage || "Failed to fetch users");
    } finally {
      setLoading(false); // Ensure loading is stopped in both success and error cases
    }
  }, [onNotify]);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users, loading, fetchUsers };
};

export default useGetAllUsers;
