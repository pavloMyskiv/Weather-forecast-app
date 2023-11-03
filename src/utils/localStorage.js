export const setInLocal = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
  return;
};

export const getFromLocal = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
