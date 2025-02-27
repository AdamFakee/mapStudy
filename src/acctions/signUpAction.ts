'use server'

import { signupValidate } from "@/validations/user/signupValidate";
import { domainNextServer } from "@/constants/domain";
import { fetchOptions } from "@/customLib/fetchApi";
import { resultFetchSignUp } from "@/app/api/auth/signup/route";

export type State = {
    errors?: any
    message?: string;
};


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
    const opts: fetchOptions = {
            method: 'POST',
            body: formData
        }
    const url = domainNextServer + '/api/auth/signup';
    const res = await fetch(url, opts)
    const resutl: resultFetchSignUp = await res.json();

    // 409: conflict 
    if( resutl.code === 409 ) {
        return {
            message: 'exist user',
            error: {
                email: ['Email đã tồn tại']
            }
        }
    }
    return resutl;
}