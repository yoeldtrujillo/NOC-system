import { EmailService } from "../../../presentation/email/email.service"
import { LogSeverityLevel } from "../../entities/log.entity"
import { LogRepository } from "../../repository/log.repository"

interface SendLogEmailUseCase {
  execute: (to:string | string[]) => Promise<Boolean>
}

export class SendEmailLogs  implements SendLogEmailUseCase {

  constructor(
    private readonly emailService: EmailService,
    private readonly logRepository: LogRepository
  ){}

  async execute(to: string | string[]) {

    try {
      
      const sent = await this.emailService.sendEmailWithFileSystemLogs(to)

      if (!sent) {
        throw new Error('Error al enviar el correo')
      }

      this.logRepository.saveLog({
        level: LogSeverityLevel.low,
        message: `correo envíado a ${to}`,
        origin: 'send-email-logs.ts',
        createdAt: new Date()
      
      })

      return true;

    } catch (error) {
      this.logRepository.saveLog({
        level: LogSeverityLevel.high,
        message: `Error al enviar el correo ${error}`,
        origin: 'send-email-logs.ts',
        createdAt: new Date()
      
      })
      return false;
    }

  };

}