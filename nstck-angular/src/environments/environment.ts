import { LogLevelEnum } from '@app/core/model/enums/log-level.enum';

export const environment = {
  production: false,
  apiBaseUrl: 'https://localhost:7267/',
  logLevel: LogLevelEnum.Verbose,
};
