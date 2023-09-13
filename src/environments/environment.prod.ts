import { XConfig, xSharedConfig } from '../app/config/app.config';

export const environment = {
  production: true,
  configurations: {
    //
    // Attach Shared Config ...
    ...xSharedConfig,

    //
    // Set Production State ...
    isProd: true,

    //
    // Set Logging state ...
    enableLogging: false,
    baseLogTag: 'xClient',
  } as XConfig
};
