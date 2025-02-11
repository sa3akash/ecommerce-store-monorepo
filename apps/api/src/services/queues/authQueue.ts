import { BaseQueue } from './baseQueue';
import { authWorker } from './workers/authWorker';

class AuthQueue extends BaseQueue {
  constructor() {
    super('saveAuthData');
    this.processJob('saveAuthData', 5, authWorker.saveAuthDataInDB);
  }

  public saveAuth(name: string, data: any): void {
    this.addJob(name, data);
  }
}

export const authQueue: AuthQueue = new AuthQueue();