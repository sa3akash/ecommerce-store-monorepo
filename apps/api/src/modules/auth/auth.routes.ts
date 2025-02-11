import express from 'express';

class AuthRoutes {
  private readonly router: express.Router;
  constructor(){
    this.router = express.Router()
  }
  public routes () {
    this.router.post('/register', )

    return this.router;
  }
}

export const authRoutes: AuthRoutes = new AuthRoutes();