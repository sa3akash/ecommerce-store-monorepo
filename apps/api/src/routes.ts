import { Application } from 'express';
import { authRoutes } from '@modules/auth/auth.routes';

export default (app: Application) => {
  const routes = () => {
    app.use('/api/v1/auth', authRoutes.routes());
  };

  routes();
};
