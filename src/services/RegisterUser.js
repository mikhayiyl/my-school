import http from "../services/HttpService";
import config from "../config.json";
const userApi = config.ApiUrl + "/register";

export function register(user) {
  return http.post(userApi, {
    // form Details
    name: user.username,
    email: user.email,
    password: user.password,

    // personal details
    occupation: user.occupation,
    city: user.city,
    age: user.age,
    phone: user.phone,
    // programming details
    level: user.level,
    language: user.language,
    list: user.list,
    experience: user.experience,
    // auth
    isAdmin: false,
    isAccept: false,
  });
}
