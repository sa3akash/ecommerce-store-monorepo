import express from 'express';
import { CategoryController } from '@modules/category/category.controller';



class CategoryRoutes {
  private readonly router : express.Router;
  constructor(){
    this.router = express.Router()
  }

  public routes(){
    this.router.post('/add', CategoryController.prototype.add)

    return this.router
  }
}


export const categoryRoutes:CategoryRoutes = new CategoryRoutes()