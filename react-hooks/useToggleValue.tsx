import React from "react";
import useToggle from "./useToggle";

const useToggleValue = (
  initialState: boolean | undefined,
  value1: any,
  value2: any
) => {
  const [state, toggle] = useToggle(initialState);
  return [state, toggle, state ? value1 : value2];
};

export default useToggleValue;
