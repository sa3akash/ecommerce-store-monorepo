import React from 'react'
import { Button } from '../ui/button'
import { Icons } from '../icons'

const ContinueWithSocial = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" className="w-full">
              <Icons.google />
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <Icons.gitHub />
              Github
            </Button>
          </div>
  )
}

export default ContinueWithSocial