import { useEffect, useState } from "react";
import { UserService } from "../Services/usersServices";
import { useUserStore } from "../Store/useUserStore";

interface UseUserResult {
  isLoading: boolean;
  error: string | null;
}

function useUser(): UseUserResult {
  const setName = useUserStore((state) => state.setName);
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
  }, [setName]);

  return { isLoading, error };
}

export default useUser;
