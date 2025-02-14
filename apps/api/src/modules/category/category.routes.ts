import express from 'express';
import { CategoryController } from '@modules/category/category.controller';

class CategoryRoutes {
  private readonly router: express.Router;
  constructor() {
    this.router = express.Router();
  }

  public routes() {
    this.router.post('/add', CategoryController.prototype.add);
    this.router.put('/update/:slug', CategoryController.prototype.update);
    this.router.delete('/delete/:slug', CategoryController.prototype.delete);
    this.router.get('/single/:slug', CategoryController.prototype.getSingle);
    this.router.get('/all', CategoryController.prototype.getAll);

    return this.router;
  }
}

export const categoryRoutes: CategoryRoutes = new CategoryRoutes();
