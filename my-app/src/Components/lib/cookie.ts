// utils/token.ts
import Cookies from "js-cookie";

export const KEY_ACCESS_TOKEN = "access_token";

export const setAccessToken = (token: string) => {
  Cookies.set(KEY_ACCESS_TOKEN, token, {
    secure: true,
    sameSite: "strict",
  });
};

export const getAccessToken = () => {
  return Cookies.get(KEY_ACCESS_TOKEN);
};

export const removeAccessToken = () => {
  Cookies.remove(KEY_ACCESS_TOKEN);
};
export const isAuthenticated = () => {
  return !!getAccessToken();
};
export const getAuthHeaders = () => {
  const token = getAccessToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
export const clearAuthData = () => {
  removeAccessToken();
};
