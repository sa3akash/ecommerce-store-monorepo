import React, { Suspense } from 'react'
import { VerifyEmailForm } from '../components/organisms/VerifyEmailForm'

const VerifyEmail = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
    <div className="w-full max-w-sm">
    <Suspense fallback={<>Loading...</>}>
      <VerifyEmailForm />
    </Suspense>
    </div>
  </div>
  )
}

export default VerifyEmail