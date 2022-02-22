import axios from "axios";
import { toast } from "react-toastify";
axios.defaults.baseURL = process.env.REACT_APP_URL;
function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log(error);

    toast.error("An Expected Error Occured");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
  setJwt,
};
