'use server';

import {FormState} from '@ecommerce/utils/src/interfaces/common'
import {LoginFormSchema} from '@ecommerce/form/src/validations/login.zod'
import { api } from '../fetch/api';
import { createSession } from '../sessions/session';

export async function signinAction(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const response = await api('/auth/login',{
    method: "POST",
    body: JSON.stringify(validatedFields.data)
  })

  if(response.status === 'error'){
    return {
      success: false,
      message: response.message
    }
  }

 await createSession({
    accessToken: response.token,
    user: {
      _id: response.user._id,
      email: response.user.email,
      name: response.user.name,
      role: response.user.role,
    }
  })



  // await saveTokenToCookie(session);

  return {
    success: true,
    user: response.user
  }

  // Call the provider or db to create a user...
}