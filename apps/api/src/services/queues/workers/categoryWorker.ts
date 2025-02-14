import { categoryServices } from '@/modules/category/category.services';
import { DoneCallback, Job } from 'bull';

class CategoryWorker {
  async addCategory(job: Job, done: DoneCallback): Promise<void> {
    try {
      // save data in db
      await categoryServices.saveCategory(job.data)
      // add method to save data in db
      job.progress(100).then();
      done(null, job.data);
    } catch (err) {
      done(err as Error);
    }
  }
  async updateCategory(job: Job, done: DoneCallback): Promise<void> {
    try {
      // save data in db
      await categoryServices.updateCategory(job.data)
      // add method to save data in db
      job.progress(100).then();
      done(null, job.data);
    } catch (err) {
      done(err as Error);
    }
  }

  async deleteCategory(job: Job, done: DoneCallback): Promise<void> {
    try {
      // save data in db
      await categoryServices.deleteCategory(job.data)
      // add method to save data in db
      job.progress(100).then();
      done(null, job.data);
    } catch (err) {
      done(err as Error);
    }
  }
}

export const categoryWorker: CategoryWorker = new CategoryWorker();