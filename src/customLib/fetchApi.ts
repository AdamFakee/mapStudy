
export interface fetchOptions {
    method?: "GET" | "POST" | "DELETE" | "PATCH";
    header?: HeadersInit;
    body?: any;
}

export interface ApiResponse {
    status: number;
    message: string;
}

export const fetchApi = async <T>({ url, opts }: { url: string, opts?: fetchOptions }): Promise<T> => {
    const res = await fetch(url, {
        method: opts?.method || 'GET',
        headers: {
            'Content-type': 'application/json',
            ...opts?.header,
        },
        body: opts?.method !== "GET" ? JSON.stringify(opts?.body) : undefined,
    });

    const result: T = await res.json();
    return { ...result };
}