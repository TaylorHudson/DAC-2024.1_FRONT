import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:8080/api"
});

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response?.data?.message;
    const errors = error.response?.data?.metadata?.errors;
    return Promise.reject({message, errors});
  }
);

export const httpPost = (url, body) => {
  return apiInstance.post(url, body);
}

export const httpPut = (url, body) => {
  return apiInstance.put(url, body);
}

export const httpDelete = async (url) => {
  return await apiInstance.delete(url);
}

export const httpGet = (url) => {
  return apiInstance.get(url);
}
