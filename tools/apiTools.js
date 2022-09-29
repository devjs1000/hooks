export const token = (name) => {
  return {
    headers: {
      authorization: localStorage.getItem(name),
    },
  };
};
