import dotenv from 'dotenv';
import bunyan from 'bunyan';

dotenv.config();

class Config {
  public PORT = process.env.PORT;
  public NODE_ENV = process.env.NODE_ENV;
  public CLIENT_URL = process.env.CLIENT_URL;
  public DATABASE_URL = process.env.DATABASE_URL;
  public REDIS_URL = process.env.REDIS_URL;
  public SENDER_EMAIL_HOST = process.env.SENDER_EMAIL_HOST;
  public SENDER_EMAIL_PORT = process.env.SENDER_EMAIL_PORT;
  public SENDER_EMAIL = process.env.SENDER_EMAIL;
  public SENDER_EMAIL_PASSWORD = process.env.SENDER_EMAIL_PASSWORD;
  public JWT_SECRET = process.env.JWT_SECRET;
  public SESSION_SECRET_KEY = process.env.SESSION_SECRET_KEY;

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined || value === null) {
        throw new Error(`${key} env is not defined.`);
      }
    }
  }

  public createLogger(name: string): bunyan {
    return bunyan.createLogger({
      name: name,
      level: 'debug'
    });
  }
}

export const config: Config = new Config();
