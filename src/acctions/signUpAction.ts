'use server'

import { signupValidate } from "@/validations/user/signupValidate";
import { domain } from "@/constants/domain";
import { fetchApi, fetchOptions } from "@/customLib/fetchApi";
import { Tokens } from "@/types/definition";

export type State = {
    errors?: unknown
    message?: string;
};

export interface resultFetchSignUp {
    status?: number | string;
    message: string;
    metadata?: {
        tokens: Tokens,
        data: {
            name: string,
            email: string
        }
    },
    code?: number,
}

export const signUpAction = async (preState: State, formData: FormData) => {
    const validationFields = signupValidate.safeParse({
        fullName:formData.get('fullName'),
        confirmPassword: formData.get('confirmPassword'),
        password:formData.get('password'),
        email:formData.get('email'),
        phone:formData.get('phone'),
        birthYear:formData.get('birthYear'),
        facebook:formData.get('facebook'),
        gender:formData.get('gender'),
    })
    if(!validationFields.success) {
        return {
            validationFields: validationFields,
            error: validationFields.error.flatten().fieldErrors,
            message: 'wrong validation'
        }
    }
    try {
        const opts: fetchOptions = {
            method: 'POST',
            body: {
                email: formData.get('email'),
                password: formData.get('password'),
                name: formData.get('fullName'),
            }
        }
        const url = domain + '/user/signup';
        const res = await fetchApi<resultFetchSignUp>({ url, opts });

        if (res.status === "error") {
            console.log(res)
            if (res.code === 409) {
                return {
                    message: 'Email đã tồn tại trong hệ thống',
                    error: { email: ['Email này đã được sử dụng'] }
                }
            }
            // Xử lý các lỗi khác
            return {
                message: 'Đã xảy ra lỗi, vui lòng thử lại sau',
                error: { email: ['Có lỗi xảy ra trong quá trình đăng ký'] }
            }
        }
        return res;
    } catch (e) { 
        console.log('er::',e)
        return {
            message: 'Kết nối thất bại, vui lòng thử lại sau',
            error: { email: ['Không thể kết nối đến máy chủ'] }
        }
    }
}