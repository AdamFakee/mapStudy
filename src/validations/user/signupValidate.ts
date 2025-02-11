import { z } from 'zod';

// Định nghĩa kiểu enumGender
const enumGender = ["male", "female"] as const;

const warnForEmptyInput = 'must be type something'

// Tạo schema đăng ký sử dụng Zod
export const signupValidate = z.object({
    fullName: z.string().min(2, { message: 'Full name length must be at least 2 characters' }),
    accountName: z.string().min(5, { message: 'Account name length must be at least 5 characters' }),
    password: z.string().min(1, {message: warnForEmptyInput}).regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, { message: 'password must be at least 8 characters, at least one letter and one number'}),
    confirmPassword: z.string().min(1, {message: warnForEmptyInput}),
    email: z.string().min(1, {message: warnForEmptyInput}).email({ message: 'Must be a valid email' }),
    phone: z.string()
        .length(10, { message: "phone must be exactly 10 characters" })
        .regex(/(0[3|5|7|8|9])+([0-9]{8})\b/g, { message: "Must be a valid phone number" }),
    birthYear: z.string()
        .length(4, { message: 'Year of birth must be exactly 4 characters' })
        .regex(/^\d{4}$/, { message: 'Birth year must be 4 numbers' }).transform(data => Number(data)), 
    facebook: z.string().min(1, {message: warnForEmptyInput}).url({ message: 'Link contact must be a valid URL' }),
    gender: z.enum(enumGender, { message: 'Gender must be either "male" or "female"' }),
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "password did not match",
        path: ['confirmPassword']
      });
    }
  });;

