import { domain } from "@/constants/domain";
import { ApiResponse, fetchApi, fetchOptions } from "@/customLib/fetchApi";
import { NextResponse } from "next/server";

interface resultFetchLogout extends ApiResponse {
    code?: number,
}
export async function DELETE ( req: Request ) {
    const email = req.headers.get('x-client-email');
    const accessToken = req.headers.get('authorization')
    const header = new Headers();
    if(email) {
        header.append('x-client-email', email)
    } else {
        return NextResponse.json({
            status: 401,
            message: 'Unauthorized'
        })
    }
    if(accessToken) {
        header.append('authorization', accessToken);
    } else {
        return NextResponse.json({
            status: 401,
            message: 'Unauthorized'
        })
    }

    const opts: fetchOptions = {
        header,
        method: 'POST'
    };
    const url = domain + '/user/logout';

    try {
        const res = await fetchApi<resultFetchLogout>({ url, opts });
        if(res.status !== 200) {
            return NextResponse.json({
                status: 500,
                message: 'Error when logout'
            })
        }
        return NextResponse.json({
            status: 200,
            message: 'Logout successfully'
        });

    } catch (error) {
        console.log(error)
    }
}