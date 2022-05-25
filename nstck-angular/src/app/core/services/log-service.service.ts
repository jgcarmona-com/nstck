import { Injectable } from '@angular/core';
import { LogLevelEnum } from '@core/model/enums/log-level.enum';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private readonly isDevEnvironment: boolean;
  private readonly isLoggingEnabled: boolean;
  private readonly logLevel: LogLevelEnum;

  constructor() {
    this.logLevel =
      environment.logLevel != null ? environment.logLevel : LogLevelEnum.None;
    this.isDevEnvironment = !environment.production;
    this.isLoggingEnabled = this.logLevel !== LogLevelEnum.None;
  }

  public verbose(message: string, obj?: any): void {
    this.log(message, LogLevelEnum.Verbose, obj);
  }

  public info(message: string, obj?: any): void {
    this.log(message, LogLevelEnum.Info, obj);
  }

  public warn(message: string, obj?: any): void {
    this.log(message, LogLevelEnum.Warn, obj);
  }

  public error(message: string, obj?: any): void {
    this.log(message, LogLevelEnum.Error, obj);
  }

  private log(message: string, level: LogLevelEnum, obj?: any): void {
    if (this.isError(level)) {
      console.error(this.formatMessage(message, LogLevelEnum.Error), obj);
      return;
    }

    if (!this.shouldLogMessage(level)) {
      return;
    }

    if (level === LogLevelEnum.Warn) {
      console.warn(this.formatMessage(message, LogLevelEnum.Warn), obj);
    } else {
      this.logMessage(message, level, obj);
    }
  }

  private logMessage(message: string, level: LogLevelEnum, obj?: any): void {
    if (environment.production) {
      return;
    }
    if (obj) {
      console.log(this.formatMessage(message, level), obj);
    } else {
      console.log(this.formatMessage(message, level));
    }
  }

  protected isError(level: LogLevelEnum): boolean {
    return level === LogLevelEnum.Error;
  }

  protected formatMessage(message: string, level: LogLevelEnum): string {
    const now = new Date();
    return `(${LogLevelEnum[level]}) ${now.toUTCString()}: ${message}`;
  }

  private shouldLogMessage(level: LogLevelEnum): boolean {
    if (!this.isDevEnvironment) {
      return false;
    }
    if (!this.isLoggingEnabled) {
      return false;
    }
    return this.isLoggableLevel(level);
  }

  private isLoggableLevel(level: LogLevelEnum): boolean {
    return level >= this.logLevel;
  }
}
