import { config } from '@/config'
import { ServerError } from 'error-express'
import jwt from 'jsonwebtoken'



class JwtService {
  public signJwt(
    data:{authId:string},
    expireIn?: number
  ){
    return jwt.sign(data, `${config.JWT_SECRET}`,{
      expiresIn: expireIn || '1h'
    })
  }

  public async verifyJwt(token:string):Promise<string | jwt.JwtPayload>{
   return jwt.verify(token,`${config.JWT_SECRET}`)
  }
}


export const jwtService: JwtService = new JwtService()