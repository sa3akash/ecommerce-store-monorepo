import { BaseQueue } from './baseQueue';
import { categoryWorker } from './workers/categoryWorker';

class CategoryQueue extends BaseQueue {
  constructor() {
    super('categoryQueue');
    this.processJob('addCategory', 5, categoryWorker.addCategory);
    this.processJob('updateCategory', 5, categoryWorker.updateCategory);
    this.processJob('deleteCategory', 5, categoryWorker.deleteCategory);
  }

  public add(name: string, data: any): void {
    this.addJob(name, data);
  }
}

export const categoryQueue: CategoryQueue = new CategoryQueue();
