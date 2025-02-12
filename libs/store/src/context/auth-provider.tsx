import React, { createContext, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react';

import { getCurrentUserAction } from '@ecommerce/network/src/actions/auth.action';
import { IRole } from '@ecommerce/utils/src/interfaces/common';
import { useRouter } from 'next/navigation';

export type UserType = {
  _id: string;
  profilePicture: string;
  name: string;
  role: IRole;
  email: string;
  createdAt: string;
  updatedAt: string;
};

type AuthContextType = {
  user?: UserType;
  isLoading: boolean;
  refetch: () => void;
  setUser: (data: UserType) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  const getSession = useCallback(async () => {
    try {
      const data = await getCurrentUserAction();
      setUser(data.user);
    } catch (error) {
      console.log(error);
      router.push('/signin');
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    if (!user) {
      getSession();
    }
  }, [getSession, user]);

  return <AuthContext.Provider value={{ user, refetch: getSession, isLoading, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const conext = useContext(AuthContext) as AuthContextType;
  if (!conext) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return conext;
};
