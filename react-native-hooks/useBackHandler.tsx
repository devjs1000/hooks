import React, { useEffect } from "react";
import { Alert, BackHandler } from "react-native";

const useBackHandler = ({
  yesCallBack = () => {
    BackHandler.exitApp();
  },
  noCallBack = () => {},
  message = "EXIT!",
}) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert(message, "", [
        {
          text: "Cancel",
          onPress: () => noCallBack(),
          style: "cancel",
        },
        {
          text: "YES",
          onPress: () => yesCallBack(),
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
};

export default useBackHandler;
