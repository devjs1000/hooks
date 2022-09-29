import React from "react";
import messaging from "@react-native-firebase/messaging";

const useFCMToken = (callback: Function) => {
  async function onAppBootstrap() {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken(); // Save the token
    await callback({ token });
  }
  React.useEffect(() => {
    onAppBootstrap();
  }, []);
};

export default useFCMToken;
