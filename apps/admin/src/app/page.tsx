'use client';

import { useThemes } from '@store/context/theme-provider';
import { Button } from '@components/ui/button';
import { logoutAction } from '@ecommerce/network/src/actions/auth.action';
import { useAuth } from '@store/context/auth-provider';

export default function Home() {
  const { setTheme } = useThemes();

  const { user, isLoading } = useAuth();

  return (
    <div>
      <h1>Name - {isLoading ? "Loading...": user?.name}</h1>
      <Button onClick={() => setTheme('light')}>light</Button>
      <Button onClick={() => setTheme('dark')}>dark</Button>
      <div>
          <Button onClick={logoutAction}>Logout</Button>
        </div>
    </div>
  );
}
