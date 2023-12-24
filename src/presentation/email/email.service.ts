import nodemailer from 'nodemailer';
import { envs } from '../../config/plugis/envs.plugins';

interface SendMailOptions {
  to: string | string[],
  subject: string,
  htmlBody: string,
  attachments?: Attachment[]
}

interface Attachment {
  filename: string,
  path: string
}

export class EmailService {

  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY
    }
  })

  constructor(

  ) {}

  async sendEmail(options: SendMailOptions):Promise<Boolean>{

  const {to, subject, htmlBody, attachments = []} = options


    try {
      const sentInformation = await this.transporter.sendMail({
        to,
        subject,
        html: htmlBody,
        attachments
      })

      return true;
      
    } catch (error) {
      
      return false;
      
    }
  }

  async sendEmailWithFileSystemLogs(to: string | string[]): Promise<Boolean> {
    const subject = 'Logs del servidor';
    const htmlBody = `
      <h1>Logs del servidor</h1>
      <p>En el archivo adjunto se encuentran los logs del servidor</p>
      <footer>Gracias!</footer>`;

    const attachments:Attachment[] = [
      {
        filename: 'logs-all.log',
        path: './logs/logs-all.log'
      },
      {
        filename: 'logs-high.log',
        path: './logs/logs-high.log'
      },
      {
        filename: 'logs-medium.log',
        path: './logs/logs-medium.log'
      }
    ]

    return this.sendEmail({to, subject, htmlBody, attachments})

  }

}