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



export interface SessionType {
  _id: string;
  name: string;
  email: string;
  role: IRole;
}