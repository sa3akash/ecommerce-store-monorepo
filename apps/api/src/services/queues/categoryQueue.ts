import { BaseQueue } from './baseQueue';
import { categoryWorker } from './workers/categoryWorker';

class CategoryQueue extends BaseQueue {
  constructor() {
    super('categoryQueue');
    this.processJob('addCategory', 5, categoryWorker.addCategory);
  }

  public add(name: string, data: any): void {
    this.addJob(name, data);
  }
}

export const categoryQueue: CategoryQueue = new CategoryQueue();
