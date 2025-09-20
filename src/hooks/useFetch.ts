import { useState, useEffect } from "react";
export default function useFetch<T>(fetchFunction: () => Promise<T[]>) {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const fetchedData = await fetchFunction();
        setData(fetchedData);
      } catch (error: unknown) {
        setError(error instanceof Error ? error.message : "Can't fetch data");
      }
      setIsLoading(false);
    }
    fetchData();
  }, [fetchFunction]);
  return { data, error, isLoading };
}
