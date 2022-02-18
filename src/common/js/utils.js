import cookie from 'js-cookie';
export const getLocal = (name) => {
  return cookie.get(name);
};
export const setLocal = (name, value) => {
  cookie.set(name, value);
};
export const getcook = (name) => {
  return cookie.get(name);
};
export const setcook = (name, value) => {
  cookie.set(name, value);
};