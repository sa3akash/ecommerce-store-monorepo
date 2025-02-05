'use client'
import { Button } from '@ecommerce/ui/components/ui/button'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={()=>alert('hello world!')}>Click me</Button>
    </div>
  );
}
