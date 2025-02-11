import { config } from '@/config';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const log = config.createLogger("MAIL_TRANSPORTER")

class MailTransport {
  public async sendMail(receiverEmail: string, subject: string, template: string) {
    const mailOptions: Mail.Options = {
      from: '"SA2 🔥" <admin@master-auth.com>',
      to: [receiverEmail],
      subject: subject,
      html: template
    };

  this.emailSender(mailOptions);
  }

  private async emailSender(mailOptions: Mail.Options) {
    const transporter: Mail = nodemailer.createTransport({
      host: config.SENDER_EMAIL_HOST!,
      port: Number(config.SENDER_EMAIL_PORT!),
      secure: config.NODE_ENV !== 'development',
      auth: {
        user: config.SENDER_EMAIL!,
        pass: config.SENDER_EMAIL_PASSWORD!
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    const info = await transporter.sendMail(mailOptions);
    log.info('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
}

export const mailTransport = new MailTransport();