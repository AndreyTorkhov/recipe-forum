import { useEffect, useState } from "react";
import { UserService } from "../Services/usersServices";

interface UseUserResult {
  name: string | null;
  isLoading: boolean;
  error: string | null;
}

function useUser(): UseUserResult {
  const [name, setName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await UserService.getUserMe();
        setName(response.data.name);
        setError(null);
      } catch (err: any) {
        console.error("Ошибка при загрузке пользователя:", err);
        setError(err.message || "Ошибка загрузки данных");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { name, isLoading, error };
}

export default useUser;
