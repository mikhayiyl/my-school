import jwtDecode from "jwt-decode";
import HttpService from "./HttpService";

const authApi = "/login";
const userApi = "/users";

export function getUsers() {
  return HttpService.get(userApi);
}

export async function login(user) {
  const { data } = await HttpService.post(authApi, {
    username: user.email,
    password: user.password,
  });

  const { token: jwt } = data;

  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    return user;
  } catch (error) {
    return null;
  }
}

HttpService.setJwt(getJwt());

export function getJwt() {
  return localStorage.getItem("token");
}

export async function acceptUser(user) {
  await HttpService.put(userApi + "/" + user._id, { isAccept: true });
}
export async function rejectUser(user) {
  await HttpService.put(userApi + "/" + user._id, { isAccept: false });
}
export function deleteUser(id) {
  return HttpService.delete(userApi + "/" + id);
}

export default {
  login,
  logout,
  getUsers,
  getCurrentUser,
  getJwt,
  rejectUser,
  deleteUser,
  acceptUser,
};
