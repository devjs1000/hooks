import React from "react";

type props = {
  event: string;
  callback: () => void;
  target?: any;
};

const useListener = (events: props[]) => {
  React.useEffect(() => {
    events?.forEach((event: props) => {
      event?.target?.addEventListener(event?.event, event?.callback);
    });

    return () => {
      events?.forEach((event: props) => {
        event?.target?.removeEventListener(event?.event, event?.callback);
      });
    };
  }, []);
};
export default useListener;
