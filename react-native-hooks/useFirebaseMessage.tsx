import React from "react";
import messaging from "@react-native-firebase/messaging";

const useFirebaseMessage = (callback: Function) => {
  React.useEffect(() => {
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      await callback(remoteMessage);
    });
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      await callback(remoteMessage);
    });
    return unsubscribe;
  }, []);
};

export default useFirebaseMessage;
