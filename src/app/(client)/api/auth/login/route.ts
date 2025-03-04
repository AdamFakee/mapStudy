import { domain } from "@/constants/domain";
import { ApiResponse, fetchApi, fetchOptions } from "@/customLib/fetchApi";
import { Tokens } from "@/types/definition";
import { NextResponse } from "next/server";

interface resultFetchLogin extends ApiResponse {
    metadata: {
        tokens: Tokens,
        data: {
            name: string,
            email: string
        }
    }
}
export async function POST ( req: Request ) {
    const formData = await req.formData();
    const body = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    if( !body ) {
        return NextResponse.json({
            status: 400,
            error: 'Thiếu thông tin'
        })
    }
    const opts: fetchOptions = { body: body, method: 'POST' }
    const url = domain + '/user/login';

    try {
        const res = await fetchApi<resultFetchLogin>({ url, opts });
        return NextResponse.json({ ...res });
    } catch (error) {
        console.log(error)
    }
}