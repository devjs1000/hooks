export const createAction = (type) => {
  return (val) => ({ type, payload: val });
};
