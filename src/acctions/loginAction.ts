'use server'
import { domainNextServer } from "@/constants/domain";
import { ApiResponse } from "@/customLib/fetchApi";
import { Tokens } from "@/types/definition";

interface resultFetch extends ApiResponse {
    metadata: {
        tokens: Tokens,
        data: {
            name: string,
            email: string,
            thumbnail: string
        }
    }
}

export const loginAction = async (preState: resultFetch, formData: FormData) => {
    const opts = {
        method: 'POST',
        body: formData
    }
    const url = domainNextServer + '/api/auth/login';
    const res = await fetch(url, opts)
    const resutl: resultFetch = await res.json();
    return resutl;
}