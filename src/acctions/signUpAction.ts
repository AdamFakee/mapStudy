'use server'

import { signupValidate } from "@/validations/user/signupValidate";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
    errors?: any
    message?: string;
};


export const signUpAction = async (preState: State, formData: FormData) => {
    const validationFields = signupValidate.safeParse({
        fullName:formData.get('fullName'),
        accountName:formData.get('accountName'),
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
    
    revalidatePath('/signup');
    redirect('/s')
}