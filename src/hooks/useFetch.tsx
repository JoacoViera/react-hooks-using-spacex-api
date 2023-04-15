import { useState, useEffect } from 'react';

interface State<T> {
  data?: T;
  loading?: boolean;
  error?: Error;
}

function useFetch<T = unknown>(url: string): State<T> {
  const [data, setData] = useState<T | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        const jsonResponse = await response.json();
        setData(jsonResponse);
        setLoading(false);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };

    void fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
