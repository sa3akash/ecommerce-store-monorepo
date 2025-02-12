import express from 'express';
import { AuthController } from './auth.controller';

class AuthRoutes {
  private readonly router: express.Router;
  constructor(){
    this.router = express.Router()
  }
  public routes () {
    this.router.post('/register', AuthController.prototype.register)
    this.router.post('/verify-email', AuthController.prototype.verifyEmail)
    this.router.post('/login', AuthController.prototype.login)
    this.router.post('/admin/login', AuthController.prototype.adminLogin)
    this.router.get('/current', AuthController.prototype.current)

    return this.router;
  }
}

export const authRoutes: AuthRoutes = new AuthRoutes();