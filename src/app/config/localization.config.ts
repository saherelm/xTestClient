/**
 * this files contains all configurations and declarations about the
 * supported locales and languages and also available string resources
 * inside an xFramework based app.
 */
import { XLanguageDescriptor } from "x-framework-core";

/**
 * contains all string resources titles which defined in application.
 */
export enum AppResourceIDs {
    //
    appNameResource = 'appNameResource',
    appCompanyResource = 'appCompanyResource', 
    //
    default_loading = 'default_loading',
    english = 'english',
    persian = 'persian',
}

/**
 * define all available localizations which this client had supports for them ...
 */
export const AvailableTranslationResources: XLanguageDescriptor[] = [
    //
    // Persian ...
    {
        name: 'persian',
        locale: 'fa-IR',
        language: 'fa',
        direction: 'rtl',
        resources: [
            //
            // App Resource Ids ...
            {
                id: 'appNameResource',
                value: 'برنامه آزمایشی',
            },
            {
                id: 'appCompanyResource',
                value: 'فن آوران ساحر علم',
            },
            {
                id: 'default_loading',
                value: 'بارگزاری',
            },
            {
                id: 'english',
                value: 'انگلیسی',
            },
            {
                id: 'persian',
                value: 'فارسی',
            },
        ],    
    },
    //
    // English ...
    {
        name: 'english',
        locale: 'en-US',
        language: 'en',
        direction: 'ltr',
        resources: [
            //
            // App Resource Ids ...
            {
                id: 'appNameResource',
                value: 'xTestClient',
            },
            {
                id: 'appCompanyResource',
                value: 'SaherElm IT Center',
            },
            {
                id: 'default_loading',
                value: 'Loading',
            },
            {
                id: 'english',
                value: 'English',
            },
            {
                id: 'persian',
                value: 'Persian',
            },
        ],
    },
];