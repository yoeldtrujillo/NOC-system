import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServiceUseCase {
  execute(url: string): Promise<Boolean>;

}

type SuccessCallback = (() => void) | undefined;
type ErrorCallback = ((error: string) => void) | undefined;


export class CheckService implements CheckServiceUseCase {

  private origin = 'check-service.ts';

  constructor(
    private readonly logRepository: LogRepository,
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  
  ) {}

  async execute(url: string): Promise<Boolean> {

    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw new Error(`Error on check service ${url}`)
      }
      const message = `Service ${url} is working`;
      const log = new LogEntity({
        level: LogSeverityLevel.low,
        message,
        origin: this.origin
      
      });

      this.logRepository.saveLog(log)
      this.successCallback && this.successCallback();
      return true;

    } catch (error) {

      const errorMessage = `${error} in ${url}`;
      const log = new LogEntity({
        level: LogSeverityLevel.high,
        message: errorMessage,
        origin: this.origin
      });

      this.logRepository.saveLog(log)
      this.errorCallback && this.errorCallback(`${errorMessage}`)
      return false;

    }
  }
}
