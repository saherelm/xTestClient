import {
  DefaultLocale,
  AvailableTranslationResources,
} from './localization.config';
import { NotificationAudioSources } from './audio.config';
import { XFrameworkCoreConfig, XPage } from 'x-framework-core';
import { XFrameworkServicesConfig } from 'x-framework-services';
import { XFrameworkComponentsConfig } from 'x-framework-components';

/**
 * Application Config ...
 */
export interface AppConfig {
  defaultLandingPage?: XPage;
  defaultBlogPage?: XPage;
}

/**
 * define Partial Configs ...
 */
export type XFrameworkCoreSharedConfig = Partial<XFrameworkCoreConfig>;
export type XFrameworkServicesSharedConfig = Partial<XFrameworkServicesConfig>;
export type XFrameworkComponentsSharedConfig =
  Partial<XFrameworkComponentsConfig>;

export type XAppSharedConfig = Partial<AppConfig>;

/**
 * Application side configuration which can inject in every where ...
 */
export type XConfig = XFrameworkCoreConfig &
  XFrameworkServicesConfig &
  XFrameworkComponentsConfig &
  AppConfig;
export type XSharedConfig = Partial<XConfig>;

/**
 * xFramework Core shared configuration instance ...
 */
export const xFrameworkCoreSharedConfig: XFrameworkCoreSharedConfig = {
  appInstanceName: 'xClient',
  appNameResource: 'app_name',
  appCompanyResource: 'company',
  appVersion: 'v1.1',
  defaultNotificationDelay: 2000,
  notificationAudioSources: NotificationAudioSources,
  availableLanguages: AvailableTranslationResources,
  defaultLanguage: DefaultLocale,
  minAllowedImageSize: 512,
  maxAllowedImageSize: 5242880,
  minAllowedImageCroppableSize: 512,
  allowedImageExtensions: ['.png', '.jpg', '.jpeg'],
  maxProfileImageSize: 5242880,
  maxProfileImagesUploadFiles: 10,
  defaultCountryCode: 'IR',
  defaultPageSize: 20,
  pageSizes: [10, 20, 40, 50, 100, 200],
  defaultActionDelay: 500,
};

/**
 * xFramework Services shared configuration instance ...
 */
export const xFrameworkServicesSharedConfig: XFrameworkServicesSharedConfig = {
  geoLocationConfig: {
    enableHighAccuracy: true,
    timeout: 5000,
  },
};

/**
 * xFramework Components shared configuration instance ...
 */
export const xFrameworkComponentsSharedConfig: XFrameworkComponentsSharedConfig =
{
  minAllowedFileSize: 512,
  maxAllowedFileSize: 20971520,
  maxAllowedSize: 966367641,
  maxUploadFiles: 10,
  defaultSearchDebounceTime: 500,
};

/**
 * application shared configuration instance ...
 */
export const xAppSharedConfig: XAppSharedConfig = {};

/**
 * filling xConfig shared by combination all configurations instances ...
 */
export const xSharedConfig: XSharedConfig = {
  ...xFrameworkCoreSharedConfig,
  ...xFrameworkServicesSharedConfig,
  ...xFrameworkComponentsSharedConfig,
  ...xAppSharedConfig,
};
