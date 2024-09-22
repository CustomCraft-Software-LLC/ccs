type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
interface UseFetchOptions {
    method?: HttpMethod;
    body?: any;
    headers?: Record<string, string>;
}
declare const useFetch: (endpoint: string, options?: UseFetchOptions) => {
    data: any;
    statusCode: number | null;
};
export default useFetch;
