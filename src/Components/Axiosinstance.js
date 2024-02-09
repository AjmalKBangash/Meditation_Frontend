import axios from "axios";

// Set Axios global defaults
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.common["Authorization"] = `${
  localStorage.getItem("access_token")
    ? "Bearer   " + localStorage.getItem("access_token")
    : ""
}`;
// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization =
      ` ${
        localStorage.getItem("access_token")
          ? "Bearer   " + localStorage.getItem("access_token")
          : "   "
      }` + "  ";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (
      error.response.status === 401 &&
      error.config.url === "api/token/refresh/"
    ) {
      window.location = "/signup";
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      error.response.data.code === "token_not_valid" &&
      !error.config._retry
    ) {
      // Modify the request to add a token refresh or reauthentication logic
      error.config._retry = true;
      return axios
        .post("api/token/refresh/", {
          /* your refresh token data */
          refresh: localStorage.getItem("refresh_token"),
        })
        .then((response) => {
          // If token refresh is successful, retry the original request
          if (response.data.access) {
            localStorage.setItem("access_token", response.data.access);
            error.config.headers.Authorization = `Bearer ${response.data.access}`;
            return axios(error.config);
          }
        });
    }

    return Promise.reject(error);
  }
);

export default axios;
