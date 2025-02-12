import React from 'react'
import LoginForm from '../components/organisms/SignInForm'

const SignInPage = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
    <div className="w-full max-w-sm">
      <LoginForm />
    </div>
  </div>
  )
}

export default SignInPage