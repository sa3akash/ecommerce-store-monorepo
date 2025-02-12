export type FormState =
  | {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
        token?: string[]
      }
      message?: string
    }
  | undefined


export type CustomState = {
  error?: boolean,
  message: string
}

export type IRole = 'admin' | 'user'