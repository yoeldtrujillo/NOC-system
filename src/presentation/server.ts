import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infraestructure/repositories/log.respository.impl";
import { EmailService } from "./email/email.service";

const emailService = new EmailService();
const fileSystemLogRepository = new LogRepositoryImpl (new FileSystemDataSource());


export class Server {

  public static start() {

    console.log('Server started.......');
    
    // CronService.createJob(
    //   "*/5 * * * * *", 
    //   () => {
    //     const url = 'https://google.com';
    //   new CheckService(
    //     fileSystemLogRepository,
    //     () => console.log(`${url} is ok`), 
    //     (error) => console.log(error)
    //   ).execute(url)

    // }); 

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