'use client'

import { useThemes } from '@ecommerce/ui/components/providers/theme-provider';
import { Button } from '@ecommerce/ui/components/ui/button'

export default function Home() {

  const {setTheme} = useThemes()

  return (
    <div>
      <h1>admin</h1>
      <Button onClick={()=>setTheme('light')}>light</Button>
      <Button onClick={()=>setTheme('dark')}>dark</Button>
    </div>
  );
}
