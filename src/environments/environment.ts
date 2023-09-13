import { XConfig, xSharedConfig } from '../app/config/app.config';

export const environment = {
  production: false,
  configurations: {
    //
    // Attach Shared Config ...
    ...xSharedConfig,

    //
    // Set Production State ...
    isProd: false,

    //
    // Set Logging state ...
    enableLogging: true,
    baseLogTag: 'xClient',
  } as XConfig,
};
