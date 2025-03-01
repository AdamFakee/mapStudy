
export interface fetchOptions {
    method?: "GET" | "POST" | "DELETE" | "PATCH";
    header?: HeadersInit;
    body?: any;
}

export interface ApiResponse {
    status?: number;
    message: string;
}

export const fetchApi = async <T>({ url, opts }: { url: string, opts?: fetchOptions }): Promise<T> => {
    const res =  await fetch(url, {
        method: opts?.method || 'GET',
        headers: {
            'Content-type': 'application/json',
            ...(opts?.header instanceof Headers ? Object.fromEntries(opts.header.entries()) : opts?.header), // dùng cú pháp này do cái seperate object k hoạt động, ...opts?.headers k chạy :))) 
        },
        body: opts?.method !== "GET" ? JSON.stringify(opts?.body) : undefined,
    });

    // gặp lỗi 
    if (!res.ok) {
        const errorResponse = await res.json();
        console.error(errorResponse)
        return errorResponse;
    }
    // nếu gặp lỗi 204 
    const result: T = res.status === 204 ? {} : await res.json();
    return { ...result };
}