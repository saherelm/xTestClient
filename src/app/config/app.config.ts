/**
 * all commonly configurations for xFramework and it's related packages
 * done in this file ...
 */
import { NotificationAudioSources } from './audio.config';
import { XFrameworkCoreConfig, XPage } from 'x-framework-core';
import { XFrameworkServicesConfig } from 'x-framework-services';
import { XFrameworkComponentsConfig } from 'x-framework-components';

/**
 * Commonly Application Configuration ...
 */
export interface AppConfig {
    //
    defaultLandingPage?: XPage;
    defaultBlogPage?: XPage;
    forceLogin: boolean;
}

/**
 * define all Partial implementation of packages config interfaces ...
 */
export type XFrameworkCoreSharedConfig = Partial<XFrameworkCoreConfig>;
export type XFrameworkServicesSharedConfig = Partial<XFrameworkServicesConfig>;
export type XFrameworkComponentsSharedConfig =
    Partial<XFrameworkComponentsConfig>;
export type XAppSharedConfig = Partial<AppConfig>;

/**
 * combine all configurations in one type and create a shared type for Partial ...
 */
export type XConfig = XFrameworkCoreConfig &
  XFrameworkServicesConfig &
  XFrameworkComponentsConfig &
  AppConfig;
export type XSharedConfig = Partial<XConfig>;

//
//#region xFrameworkCore Configuration ...
/**
 * before configuring xFrameworkCore package, you had to configure some other things such as:
 * 
 * - audio's;
 * - localizations implementations;
 */
export const xFrameworkCoreSharedConfig: XFrameworkCoreSharedConfig = {
    appInstanceName: 'xTestClient',
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
    poweredValue: 'SaherElmITCenter',
    secretKey: 'SaherElm@09121694056@Hadi_Khazaee_Asl@yahoo.com',
  };  
//#endregion