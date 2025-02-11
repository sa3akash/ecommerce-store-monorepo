import { config } from '@/config';
import { authService } from '@/modules/auth/auth.service';
import { emailTemplates } from '@/services/emails';
import { mailTransport } from '@/services/emails/mailTransporter';
import { jwtService } from '@/services/utils/jwtService';
import { IAuthRegister } from '@ecommerce/utils/src/interfaces/auth/auth.interfaces';
import { DoneCallback, Job } from 'bull';

class AuthWorker {
  async saveAuthDataInDB(job: Job, done: DoneCallback): Promise<void> {
    try {
      const data = job.data as IAuthRegister;
      // save data in db
      const authData = await authService.saveAuthData(data);

      const token = jwtService.signJwt({ authId: `${authData._id}` });

      const template = emailTemplates.verifyEmail(`${config.CLIENT_URL}/verify-email?token=${token}`);

      await mailTransport.sendMail(data.email, 'Verify your email address', template);
      // add method to save data in db
      job.progress(100).then();
      done(null, job.data);
    } catch (err) {
      done(err as Error);
    }
  }

  async verifyEmail(job: Job, done: DoneCallback): Promise<void> {
    try {
      const data = job.data as {authId:string};
      // save data in db
      const authData = await authService.verifyEmailById(data.authId);

      // todo: thanks email send

      // const template = emailTemplates.verifyEmail(`${config.CLIENT_URL}/verify-email?token=${token}`);

      // await mailTransport.sendMail(data.email, 'Verify your email address', template);
      // add method to save data in db
      job.progress(100).then();
      done(null, job.data);
    } catch (err) {
      done(err as Error);
    }
  }
}

export const authWorker: AuthWorker = new AuthWorker();
