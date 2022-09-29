import React from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = React.useState(initialValue);
  const toggle = (bool?: boolean) => {
    setValue(bool == undefined ? (v?: boolean) => !v : bool);
  };
  return [value, toggle];
};

export default useToggle;
