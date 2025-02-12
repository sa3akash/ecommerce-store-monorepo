import { joiValidation } from "@/services/utils/joiValidation";
import { Request, Response } from "express";
import { SignInSchema, SignUpSchema, VerifyEmailSchema } from "@modules/auth/auth.schema";
import { authService } from "@modules/auth/auth.service";


export class AuthController {
  @joiValidation(SignUpSchema)
  public async register(req:Request,res:Response) {
    const data = await authService.registerAuth(req.body);
    res.status(201).json(data)
  }

  @joiValidation(VerifyEmailSchema)
  public async verifyEmail(req:Request,res:Response) {
    const data = await authService.verifyEmail(req.body.token);
    res.status(200).json(data)
  }

  @joiValidation(SignInSchema)
  public async login(req:Request,res:Response){
    const data = await authService.login(req.body);

    res.status(200).json(data)
  }

}