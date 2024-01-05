import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infraestructure/datasources/mongo-log.datasource";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.respository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const emailService = new EmailService();
const logRepository = new LogRepositoryImpl(
  // new FileSystemDataSource()
  new MongoLogDataSource()
  );


export class Server {

  public static async start() {

    console.log('Server started.......');
    
    // CronService.createJob(
    //   "*/5 * * * * *", 
    //   () => {
    //     const url = 'https://google.com';
    //   new CheckService(
    //     logRepository,
    //     () => console.log(`${url} is ok`), 
    //     (error) => console.log(error)
    //   ).execute(url)

    // }); 

    // const myLogs =  await logRepository.getLogs(LogSeverityLevel.high)
    // console.log(myLogs);
    

    /*Linea comentada para que no mande correos cada vez que guardo 
    new SendEmailLogs(emailService, fileSystemLogRepository ).execute('yoeldts2@gmail.com')
    */

    // emailService.sendEmail({
    //   to: 'yoeldts2@gmail.com',
    //   subject: 'Correo de prueba',
    //   htmlBody: '<h1>Correo de prueba</h1>'
    // })

    // emailService.sendEmailWithFileSystemLogs('yoeldts2@gmail.com')
  }
} 