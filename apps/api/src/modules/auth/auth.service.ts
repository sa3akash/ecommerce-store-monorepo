import { IAuthRegister, IAuthLogin } from '@ecommerce/utils/src/interfaces/auth/auth.interfaces';
import { AuthModel } from '@modules/auth/auth.model';
import { ServerError } from 'error-express';
import { authQueue } from '@/services/queues/authQueue';
import { jwtService } from '@/services/utils/jwtService';
import { emailQueue } from '@/services/queues/emailQueue';
import { config } from '@/config';
import { emailTemplates } from '@/services/emails';

class AuthService {
  public async registerAuth(registerData: IAuthRegister) {
    const existUser = await this.getAuthByEmail(registerData.email);
    if (existUser) {
      throw new ServerError('User already exist.');
    }
    // save auth data in db
    authQueue.saveAuth('saveAuthData', registerData);
    return {
      message: 'Check your email box and verify this email'
    };
  }

  public async verifyEmail(token: string) {
    const { authId } = (await jwtService.verifyJwt(token)) as { authId: string };
    if (!authId) throw new ServerError('Invalid token.', 400);

    const user = await this.getAuthByAuthId(authId);
    if (!user) throw new ServerError('User does not exist.', 400);
    if (user.varified) throw new ServerError('User already verified.', 400);

    authQueue.verifyEmail('verifyAuthEmail', {
      authId
    });

    return {
      message: 'Email successfully verified.'
    };
  }

  public async login(data: IAuthLogin) {
    const existUser = await this.getAuthByEmail(data.email);
    if (!existUser || !(await existUser.comparePassword(data.password))) {
      throw new ServerError('Invalid creadentials', 400);
    }
    if (!existUser.varified) {
      const token = jwtService.signJwt({ authId: `${existUser._id}` });
      const template = emailTemplates.verifyEmail(`${config.CLIENT_URL}/verify-email?token=${token}`);
      emailQueue.sendEmail('sendEmail', {
        receiverEmail: existUser.email,
        template,
        subject: 'Verify your email address'
      });
      throw new ServerError('Your email not verified. check email and verify.', 400);
    }

    // todo: if two fa enable then work

    const token = jwtService.signJwt(
      {
        authId: `${existUser._id}`,
        role: existUser.role
      },
      864000
    );

    return {
      user: {
        _id: existUser._id,
        name: existUser.name,
        email: existUser.email,
        profilePicture: existUser.profilePicture,
        role: existUser.role,
        varified: existUser.varified
      },
      token
    };
  }


  // ======================

  public async saveAuthData(registerData: IAuthRegister) {
    const isAdmin = registerData.email === config.ADMIN_EMAIL;

    return AuthModel.create({
      ...registerData,
      role: isAdmin ? 'admin' : 'user'
    });
  }

  public async getAuthByEmail(email: string) {
    return AuthModel.findOne({ email });
  }
  public async getAuthByAuthId(authId: string) {
    return AuthModel.findById(authId);
  }

  public async verifyEmailById(id: string) {
    return AuthModel.findByIdAndUpdate(
      id,
      {
        $set: {
          varified: true
        }
      },
      { new: true }
    );
  }
}

export const authService: AuthService = new AuthService();
