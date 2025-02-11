import { IAuthRegister } from '@ecommerce/utils/src/interfaces/auth/auth.interfaces';
import { AuthModel } from './auth.model';
import { ServerError } from 'error-express';
import { authQueue } from '@/services/queues/authQueue';

class AuthService {
  public async registerAuth(registerData: IAuthRegister) {
    const existUser = await this.getAuthByEmail(registerData.email);
    if (existUser) {
      throw new ServerError('User already exist.');
    }
    // save auth data in db
    authQueue.saveAuth('saveAuthData', registerData)

    return {
      message: 'Check your email box and verify this email'
    };
  }

  public async saveAuthData(registerData: IAuthRegister){
    return AuthModel.create(registerData)
  }

  public async getAuthByEmail(email: string) {
    return AuthModel.findOne({ email });
  }
}

export const authService: AuthService = new AuthService();
