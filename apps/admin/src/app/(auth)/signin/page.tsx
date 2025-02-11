import React from 'react'
import SignInPage from '@ecommerce/ui/templates/signin-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Admin Login | Authentication",
  description: "Authentication forms built using the components.",
}

const SignIn = () => {
  return (
    <SignInPage />
  )
}

export default SignIn