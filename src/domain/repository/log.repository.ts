import { LogEntity, LogSeverityLevel } from "../entities/log.entity";

//Las clases abstractas no se pueden instanciar y sirven para definir una estructura de clases
export abstract class LogRepository {
  abstract saveLog( log: LogEntity): Promise<void>;
  abstract getLogs( severityLevel:  LogSeverityLevel): Promise<LogEntity[]>;
}