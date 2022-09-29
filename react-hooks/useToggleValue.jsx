import React from "react";
import useToggle from "./useToggle";

const useToggleValue = (initialState, value1, value2) => {
  const [state, toggle] = useToggle(initialState);

  return [state, toggle, state ? value1 : value2];
};

export default useToggleValue;
