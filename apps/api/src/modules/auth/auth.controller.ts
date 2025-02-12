import { joiValidation } from '@/services/utils/joiValidation';
import { Request, Response } from 'express';
import { SignInSchema, SignUpSchema, VerifyEmailSchema } from '@modules/auth/auth.schema';
import { authService } from '@modules/auth/auth.service';
import { ServerError } from 'error-express';
import { auth } from '@/middleware/auth';

export class AuthController {
  @joiValidation(SignUpSchema)
  public async register(req: Request, res: Response) {
    const data = await authService.registerAuth(req.body);
    res.status(201).json(data);
  }

  @joiValidation(VerifyEmailSchema)
  public async verifyEmail(req: Request, res: Response) {
    const data = await authService.verifyEmail(req.body.token);
    res.status(200).json(data);
  }

  @joiValidation(SignInSchema)
  public async login(req: Request, res: Response) {
    const data = await authService.login(req.body);

    res.status(200).json(data);
  }

  public async adminLogin(req: Request, res: Response) {
    const data = await authService.login(req.body);

    if (data.user.role !== 'admin') {
      throw new ServerError('Your not and admin', 400);
    }

    res.status(200).json(data);
  }

  @auth()
  public async current(req: Request, res: Response) {
    res.status(200).json({
      user: {
        _id: req.user?._id,
        name: req.user?.name,
        email: req.user?.email,
        role: req.user?.role,
        profilePicture: req.user?.profilePicture,
        createdAt: req.user?.createdAt,
        updatedAt: req.user?.updatedAt,
      }
    });
  }
}
