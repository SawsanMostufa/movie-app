import axios from "axios";
import { changeLoader } from "../store/actions/loader";
import store from "../store/store";
const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",

  // headers:{
  //     "auth":"455s5s5s55s5"
  // },
  // params:{

  // }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(changeLoader(true));
    
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(changeLoader(false));
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;
