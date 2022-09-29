import { useEffect, useState } from "react";
import { AppState, AppStateStatus } from "react-native";

const useOffline = ({ callback }: hookProps) => {
  const [eve, setEve] = useState({ start: 0, end: 0 });

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === "background") {
        eve.start = new Date().getTime();
      } else if (nextAppState === "active") {
        if (eve.start > 0) {
          setEve({ ...eve, end: new Date().getTime() });
        }
        const diff = eve.end - eve.start;

        if (diff / 1000 > 60 * 5) {
          setEve({ start: 0, end: 0 });
          callback();
        }
      }
    };
    AppState.addEventListener("change", handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, []);
};

interface hookProps {
  callback: Function;
}

export default useOffline;
