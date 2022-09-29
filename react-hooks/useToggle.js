import React from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = React.useState(initialValue);
  const toggle = (bool) => {
    setValue(bool == undefined ? (v) => !v : bool);
  };
  return [value, toggle];
};

export default useToggle;
