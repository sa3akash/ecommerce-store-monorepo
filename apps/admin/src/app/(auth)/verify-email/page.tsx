import React from 'react'
import VerifyEmailPage from '@ui/templates/verify-email-page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Admin Verify Email | Authentication",
  description: "Authentication forms built using the components.",
}

const VerifyEmail = () => {
  return (
    <VerifyEmailPage />
  )
}

export default VerifyEmail