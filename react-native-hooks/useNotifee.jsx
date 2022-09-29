import React from "react";
import notifee from "@notifee/react-native";
const defaultActions = [
  {
    title: "Clear All",
    pressAction: {
      id: "clearAll",
    },
  },
  {
    title: "Clear",
    pressAction: {
      id: "clear",
    },
  },
];

const actions = {
  basic: defaultActions,
  chat: [],
};

const useNotifee = ({ channelId, id = "default", type = "basic" }) => {
  return async ({
    title,
    body,
    img = "https://picsum.photos/200",
    sound = "default",
  }) => {
    const notification = {
      title,
      body,
      android: {
        channelId,
        pressAction: actions[type],
        id,
        actions: defaultActions,
      },
      ios: {
        sound,
        attachments: [
          {
            url: img,
          },
        ],
      },
    };

    await notifee.deleteChannel(channelId);
    await notifee.createChannel({
      id: channelId,
      name: channelId,
      importance: AndroidImportance.DEFAULT,
      visibility: AndroidVisibility.PRIVATE,
      vibration: true,
      sound: "notification",
      badge: true,
      bypassDnd: true,
    });
    try {
      await notifee.displayNotification(notification);
    } catch (e) {
      console.error(e);
    }
  };
};

export default useNotifee;
