import {
    XIconNames,
    XNavigatorListItem,
    toNavigatiorListItem,
  } from 'x-framework-components';
  import { XPage, XResourceIDs } from 'x-framework-core';
  import { AppResourceIDs } from './localization.config';
  
  //
  //#region Route Config ...
  export enum BaseRoutes {
    Default = '',
    Unknown = '**',
  }
  
  export enum StartupRoutes {
    Default = 'startup',
  }
  
  export enum LandingRoutes {
    Default = '#',
  }
  
  export enum ThemesRoutes {
    Default = 'themes',
    Themes = 'themes',
    ThemeManager = 'manager',
  }
  
  export enum NotAuthorizedRoutes {
    Default = 'not-authorized',
  }
  
  export enum ErrorRoutes {
    Default = 'error',
  }
  
  export enum AppRoutes {
    Default = BaseRoutes.Default,
    Startup = StartupRoutes.Default,
    Landing = LandingRoutes.Default,
    Themes = ThemesRoutes.Default,
    NotAuthorized = NotAuthorizedRoutes.Default,
    Error = ErrorRoutes.Default,
    Unknown = BaseRoutes.Unknown,
  }
  //#endregion
  
  //
  //#region Page Configs ...
  export enum PageName {
    //
    //#region Startup ...
    Startup = AppRoutes.Startup,
    //#endregion
  
    //
    //#region Landing ...
    Landing = AppRoutes.Landing,
    //#endregion
    
    //
    //#region NotAuthorized ...
    NotAuthorized = AppRoutes.NotAuthorized,
    //#endregion
  
    //
    //#region Error ...
    Error = AppRoutes.Error,
    //#endregion
  
    //
    //#region Themes ...
    Themes = AppRoutes.Themes,
    ThemeManager = ThemesRoutes.ThemeManager,
    //#endregion
  }
  
  export type PageNames = keyof typeof PageName;
  
  export type PageNameIdentifier = PageName | PageNames | string;
  
  export type PageIndexType = {
    [key in PageNames]?: XPage;
  };
  
  export const PageIndex: PageIndexType = {
    //
    //#region Startup ...
    Startup: {
      id: `${PageName.Startup}`,
      name: `${PageName.Startup}`,
      title: AppResourceIDs.startup_page_title,
      description: AppResourceIDs.startup_page_description,
      baseRoute: `${AppRoutes.Startup}`,
      route: ['/', `${AppRoutes.Startup}`],
      icon: XIconNames.friendship_unknown,
    },
    //#endregion
  
    //
    //#region Landing ...
    Landing: {
      id: `${PageName.Landing}`,
      name: `${PageName.Landing}`,
      title: XResourceIDs.app_name,
      description: XResourceIDs.company,
      baseRoute: `${AppRoutes.Landing}`,
      route: ['/', `${AppRoutes.Landing}`],
      icon: XIconNames.friendship_unknown,
    },
    //#endregion
    
    //
    //#region Error Page ...
    Error: {
      id: `${PageName.Error}`,
      name: `${PageName.Error}`,
      title: AppResourceIDs.error_page_title,
      description: AppResourceIDs.error_page_description,
      baseRoute: `${AppRoutes.Error}`,
      route: ['/', `${AppRoutes.Error}`],
      icon: XIconNames.error,
    },
    //#endregion
  
    //
    //#region Not Authorized Page ...
    NotAuthorized: {
      id: `${PageName.NotAuthorized}`,
      name: `${PageName.NotAuthorized}`,
      title: AppResourceIDs.not_authorized_page_title,
      description: AppResourceIDs.not_authorized_page_description,
      baseRoute: `${AppRoutes.NotAuthorized}`,
      route: ['/', `${AppRoutes.NotAuthorized}`],
      icon: XIconNames.friendship_block,
    },
    //#endregion
  
    //
    //#region Theme ...
    Themes: {
      icon: XIconNames.color_palette,
      id: `${PageName.Themes}`,
      name: `${PageName.Themes}`,
      title: AppResourceIDs.themes,
      baseRoute: `${AppRoutes.Themes}`,
      route: ['/', `${AppRoutes.Themes}`],
      description: AppResourceIDs.themes_description,
      childs: [
        //
        // ThemeManager ...
        {
          icon: XIconNames.color_palette,
          id: `${PageName.ThemeManager}`,
          name: `${PageName.ThemeManager}`,
          title: AppResourceIDs.theme_manager,
          baseRoute: `${ThemesRoutes.ThemeManager}`,
          description: AppResourceIDs.theme_manager_description,
          route: ['/', `${AppRoutes.Themes}`, `${ThemesRoutes.ThemeManager}`],
        },
      ],
    },
    //#endregion
  };
  
  //
  // a Const of Available Pages ...
  export const Pages = {
    //
    //#region Startup ...
    Startup: PageIndex.Startup,
    //#endregion
  
    //
    //#region Landing ...
    Landing: PageIndex.Landing,
    //#endregion
    
    //
    //#region Error ...
    Error: PageIndex.Error,
    //#endregion
  
    //
    //#region Notuthorized ...
    NotAuthorized: PageIndex.NotAuthorized,
    //#endregion
  
    //
    //#region Theme ...
    Themes: PageIndex.Themes,
    ThemeManager: PageIndex.Themes.childs[0],
    //#endregion
  };
  
  //
  //#region Navigator Pages ...
  export const NavPageItems: XNavigatorListItem[] = [
    //
    //#region Project ...
    // {
    //   ...toNavigatiorListItem(PageIndex.Project),
    // },
    //#endregion
  
    //
    //#region Theme ...
    {
      ...toNavigatiorListItem(PageIndex.Themes),
    },
    //#endregion
  ];
  //#endregion
  //#endregion
  