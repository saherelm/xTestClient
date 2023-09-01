/**
 * define sound resources files to several types of xFramework
 * action types ...
 */
import { XNotificationSound, XActionType } from 'x-framework-core';

export const NotificationAudioSources: XNotificationSound[] = [
  {
    type: XActionType.User,
    resourcePath: './assets/audio/user_notification.wav',
  },
  {
    type: XActionType.System,
    resourcePath: './assets/audio/system_notification.wav',
  },
  {
    type: XActionType.Capture,
    resourcePath: './assets/audio/capture_notification.wav',
  },
];
