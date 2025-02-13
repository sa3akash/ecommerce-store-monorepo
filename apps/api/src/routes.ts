import { Application } from 'express';
import { authRoutes } from '@modules/auth/auth.routes';
import { categoryRoutes } from '@/modules/category/category.routes';

export default (app: Application) => {
  const routes = () => {
    app.use('/api/v1/auth', authRoutes.routes());
    app.use('/api/v1/category', categoryRoutes.routes());
  };

  routes();
};
