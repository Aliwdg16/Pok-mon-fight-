import { useState, useEffect } from "react";
import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();
// const env = process.env.DEPLOY_URL;

function useFetchData() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_DEPLOY_URL}/pokemon`
        );
        setEntries(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { entries, isLoading };
}

export default useFetchData;
