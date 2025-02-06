import SignUpCard from "../../../components/organisms/SignUpCard"
import React from 'react'
import { cn } from "../../../lib/utils"

type SignUpTemplateProps = React.HTMLAttributes<HTMLDivElement>

const SignUpTemplate = ({className, ...prop}:SignUpTemplateProps) => {
  return (
    <div className={cn('bg-gradient-to-l from-[#154734] to-[#154734] h-full flex items-center justify-center min-h-screen w-full p-4',className)} {...prop}>
      <SignUpCard/>
    </div>
  )
}

export default SignUpTemplate