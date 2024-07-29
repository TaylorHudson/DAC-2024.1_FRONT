import axios from "axios";

import StorageService from "./StorageService";

export const LOGGED_USER = "loggedUser";
export const ACCESS_TOKEN = "accessToken";

const httpClient = axios.create({
  baseURL: "http://localhost:8081/api",
  withCredentials: true,
});

export default class ApiService {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.storageService = new StorageService();
    const accessToken = this.storageService.getItem(ACCESS_TOKEN);
    this.registerToken(accessToken);
  }

  registerToken(token) {
    if (token) {
      httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  post(url, params) {
    return httpClient.post(this.buildUrl(url), params);
  }

  put(url, params) {
    return httpClient.put(this.buildUrl(url), params);
  }

  get(url) {
    return httpClient.get(this.buildUrl(url));
  }

  delete(url) {
    return httpClient.delete(this.buildUrl(url));
  }

  buildUrl(url) {
    return `${this.endpoint}${url}`;
  }
}