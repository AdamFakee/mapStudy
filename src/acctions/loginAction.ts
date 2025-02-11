'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



export const loginAction = async (preState: null, formData: FormData) => {
    console.log('action login up')
    revalidatePath('/login');
    redirect('/')
}