import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8081/api"
});

export default class ApiService {
  constructor(endpoint) {
    this.endpoint = endpoint;
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