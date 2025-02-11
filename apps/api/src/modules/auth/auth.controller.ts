import { joiValidation } from "@/services/utils/joiValidation";
import { Request, Response } from "express";
import { SignUpSchema, VerifyEmailSchema } from "@modules/auth/auth.schema";
import { authService } from "./auth.service";


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

}