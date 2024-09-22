import { useState, useEffect } from 'react';
import axios from 'axios';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface UseFetchOptions {
  method?: HttpMethod;
  body?: any;
  headers?: Record<string, string>;
}

const useFetch = (endpoint: string, options: UseFetchOptions = {}) => {
  const { method = 'GET', body, headers } = options;

  const [data, setData] = useState<any>(null);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method,
          url: endpoint,
          headers: { 'Content-Type': 'application/json', ...(headers || {}) },
          data: body,
        });

        setData(response.data);
        setStatusCode(response.status);
        setError(null);
      } catch (fetchError) {
        const message = fetchError.response?.data || 'Network error occurred';
        setError(message);
        setStatusCode(fetchError.response?.status || null);
      }
    };

    fetchData();
  }, [endpoint, method, body, headers]);

  return { data, statusCode, error };
};

export default useFetch;