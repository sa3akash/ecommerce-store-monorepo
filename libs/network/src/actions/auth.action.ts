'use server';

import { FormState } from '@ecommerce/utils/src/interfaces/common';
import { LoginFormSchema, RegisterFormSchema, VerifyEmailFormSchema } from '@ecommerce/form/src/validations/auth.zod';
import { api } from '../fetch/api';
import { createSession, deleteSession, getSession } from '../sessions/session';
import { redirect } from 'next/navigation';

export async function signinAction(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const response = await api('/auth/login', {
    method: 'POST',
    body: JSON.stringify(validatedFields.data)
  });

  if (response.status === 'error') {
    return {
      success: false,
      message: response.message
    };
  }

  await createSession({
    accessToken: response.token,
    user: {
      _id: response.user._id,
      email: response.user.email,
      name: response.user.name,
      role: response.user.role
    }
  });

  return {
    success: true,
    user: response.user
  };
}

export async function signinAdminAction(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const response = await api('/auth/admin/login', {
    method: 'POST',
    body: JSON.stringify(validatedFields.data)
  });

  if (response.status === 'error') {
    return {
      success: false,
      message: response.message
    };
  }

  await createSession({
    accessToken: response.token,
    user: {
      _id: response.user._id,
      email: response.user.email,
      name: response.user.name,
      role: response.user.role
    }
  });

  return {
    success: true,
    user: response.user
  };
}

export async function signupAction(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = RegisterFormSchema.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
    password: formData.get('password')
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const response = await api('/auth/register', {
    method: 'POST',
    body: JSON.stringify(validatedFields.data)
  });

  if (response.status === 'error') {
    return {
      success: false,
      message: response.message
    };
  }

  return {
    success: true,
    message: response.message
  };
}

export async function verifyEmailAction(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = VerifyEmailFormSchema.safeParse({
    token: formData.get('token')
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const response = await api('/auth/verify-email', {
    method: 'POST',
    body: JSON.stringify(validatedFields.data)
  });

  if (response.status === 'error') {
    return {
      success: false,
      message: response.message
    };
  }

  return {
    success: true,
    message: response.message
  };
}

export async function logoutAction() {
  await deleteSession();

  redirect('/signin');
}

export async function getCurrentUserAction() {
  const session = await getSession();
  if(!session){
    redirect('/signin')
  }

  const response = await api('/auth/current', {
    method: 'GET',
    headers: {
      "authorization": `Bearer ${session.accessToken}`
    }
  });

  console.log({current:response})

  return response

}
