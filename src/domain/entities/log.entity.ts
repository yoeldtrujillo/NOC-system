export enum LogSeverityLevel {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export interface LogEntitiesOptions {
  level: LogSeverityLevel;
  message: string;
  origin: string;
  createdAt?: Date;
}


export class LogEntity {

  public level: LogSeverityLevel;
  public message: string;
  public createdAt: Date;
  public origin: string;

  constructor(option:LogEntitiesOptions ) {
    const {level, message, origin, createdAt = new Date} = option;
    this.level = level;
    this.message = message;
    this.createdAt = createdAt
    this.origin = origin;
  }

  static fromJson = (json:string):LogEntity => {

    const {message, level, createdAt} = JSON.parse(json);

    const log = new LogEntity({
      message,
      level,
      createdAt,
      origin: 'log.entity.ts'
    
    });

    log.createdAt = new Date(createdAt);

    return log;

  }


  static fromObject = (object: {[key: string]:any}): LogEntity => {

    const {message, level, createdAt, origin} = object
    const log = new LogEntity({
      message,
      level,
      createdAt,
      origin
    })

    return log;

  }

}