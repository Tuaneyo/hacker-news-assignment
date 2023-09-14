import axios from 'axios';

const baseURL = process.env.VUE_APP_HN_SEARCH_API_BASE_URL;

const HttpClient = axios.create({
  baseURL,
});

HttpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default HttpClient;