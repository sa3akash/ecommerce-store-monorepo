import { authService } from '@/modules/auth/auth.service';
import { IAuthRegister } from '@ecommerce/utils/src/interfaces/auth/auth.interfaces';
import { DoneCallback, Job } from 'bull';

class AuthWorker {
  async saveAuthDataInDB(job: Job, done: DoneCallback): Promise<void> {
    try {
      const data = job.data as IAuthRegister;
      // save data in db
      authService.saveAuthData(data)
      // await mailTransport.sendMail(receiverEmail, subject, template);
      // add method to save data in db
      job.progress(100).then();
      done(null, job.data);
    } catch (err) {
      done(err as Error);
    }
  }
}

export const authWorker: AuthWorker = new AuthWorker();