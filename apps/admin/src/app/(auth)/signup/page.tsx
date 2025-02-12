import React from 'react'

import SignUpPage from '@ui/templates/signup-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Admin Register | Authentication",
  description: "Authentication forms built using the components.",
}

const SignUp = async () => {

  return (
    <div className='h-screen'>
      <SignUpPage />
    </div>
  )
}

export default SignUp
