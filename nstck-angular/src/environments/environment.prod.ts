import { LogLevelEnum } from '@app/core/model/enums/log-level.enum';

export const environment = {
  production: true,
  apiBaseUrl: '###{API-BaseUrl}###',
  logLevel: LogLevelEnum.Error,
};
