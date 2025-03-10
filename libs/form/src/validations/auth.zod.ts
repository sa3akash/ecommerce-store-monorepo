import * as z from 'zod';



export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, {
    message: "Password field must not be empty.",
  }),
});

export const RegisterFormSchema = z.object({
  name: z.string().min(1,{message: 'name is required'}),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z.string().min(1, {
    message: "Password field must not be empty.",
  }),
});



export const VerifyEmailFormSchema = z.object({
  token: z.string().min(1,{message: 'token is required'}),
});

export type ILoginSchame = z.infer<typeof LoginFormSchema>
export type IRegisterSchame = z.infer<typeof RegisterFormSchema>
export type IVerifyEmailSchame = z.infer<typeof VerifyEmailFormSchema>



// export const SignupFormSchema = z.object({
//   name: z
//     .string()
//     .min(2, { message: 'Name must be at least 2 characters long.' })
//     .trim(),
//   email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
//   password: z
//     .string()
//     .min(8, { message: 'Be at least 8 characters long' })
//     .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
//     .regex(/[0-9]/, { message: 'Contain at least one number.' })
//     .regex(/[^a-zA-Z0-9]/, {
//       message: 'Contain at least one special character.',
//     })
//     .trim(),
// })

