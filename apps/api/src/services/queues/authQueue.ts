import { BaseQueue } from './baseQueue';
import { authWorker } from './workers/authWorker';

class AuthQueue extends BaseQueue {
  constructor() {
    super('authQueue');
    this.processJob('saveAuthData', 5, authWorker.saveAuthDataInDB);
    this.processJob('verifyAuthEmail', 5, authWorker.verifyEmail);
  }

  public saveAuth(name: string, data: any): void {
    this.addJob(name, data);
  }

  public verifyEmail(name: string, data: any): void {
    this.addJob(name, data);
  }
}

export const authQueue: AuthQueue = new AuthQueue();