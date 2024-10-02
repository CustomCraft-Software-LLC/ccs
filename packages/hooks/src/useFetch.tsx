import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';


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
      } catch (error) {
        const axiosError = error as AxiosError;
        setStatusCode(axiosError.response?.status || 500);
      }
    };

    fetchData();
  }, [endpoint, method, body, headers]);

  return { data, statusCode };
};

export default useFetch;