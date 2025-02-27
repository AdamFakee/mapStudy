import { domain } from "@/constants/domain";
import { ApiResponse, fetchApi, fetchOptions } from "@/customLib/fetchApi";
import { Tokens } from "@/types/definition";
import { NextResponse } from "next/server";

export interface resultFetchSignUp extends ApiResponse {
    metadata?: {
        tokens: Tokens,
        data: {
            name: string,
            email: string
        }
    },
    code?: number,
}
export async function POST ( req: Request ) {
    const formData = await req.formData();
    const body = {
        email: formData.get('email'),
        password: formData.get('password'),
        name: formData.get('fullName'),
    }
    if( !body ) {
        return NextResponse.json({
            status: 400,
            error: 'Thiếu thông tin'
        })
    }
    const opts: fetchOptions = { body: body, method: 'POST' }
    const url = domain + '/user/signup';

    try {
        const res = await fetchApi<resultFetchSignUp>({ url, opts });
        return NextResponse.json({ ...res });
    } catch (error) {
        console.log(error)
    }
}