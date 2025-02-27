import { delCookie, getCookie, setCookie } from "@/utils/cookieUtil";
import { NextResponse } from "next/server";

// get cookies
export async function GET ( req: Request) {
    const url = new URL(req.url);
    const query: string | null = url.searchParams.get('query');

    if( !query || query.length === 0 ) {
        return NextResponse.json({
            status: 400,
            error: 'Thiếu query'
        })
    }

    const result = await getCookie(query);
    return NextResponse.json({
        status: 200,
        data: {
            [query]: result?.value? JSON.parse(result.value) : null
        }
    })
}

// set cookies
export async function POST ( req: Request ) {
    const { accessToken, refreshToken } = await req.json();
    if( !accessToken || !refreshToken ) {
        return NextResponse.json({
            status: 400,
            error: 'Thiếu token'
        })
    }
    await setCookie('accessToken', JSON.stringify(accessToken));
    await setCookie('refreshToken', JSON.stringify(refreshToken));
    return NextResponse.json({
        status: 200,
        message: 'Thêm cookie thành công'
    })
}

// delete cookies
export async function DELETE ( req: Request ) {
    const { name } = await req.json();
    if(!name ) {
        return NextResponse.json({
            status: 400,
            error: 'Thiếu name'
        })
    }

    await delCookie(name);
    return NextResponse.json({
        status: 200,
        message: 'Xóa cookie thành công'
    })
}