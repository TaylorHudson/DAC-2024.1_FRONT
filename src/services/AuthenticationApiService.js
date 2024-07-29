import ApiService, { LOGGED_USER, ACCESS_TOKEN } from "./ApiService";
import StorageService from "./StorageService";

export default class AuthenticationApiService extends ApiService {
  
  constructor() {
    super("/auth");
    this.storageService = new StorageService();
  }

  async login(email, password) {
    const body = {
      email,
      password
    };

    try {
      const response = await this.post("/login", body);
      const username = response.data.username;
      const accessToken = response.data.accessToken;

      this.storageService.setItem(LOGGED_USER, username);
      this.storageService.setItem(ACCESS_TOKEN, accessToken);
      this.registerToken(accessToken);
      return username;
    } catch (error) {
      return null;
    }
  }

  logout = () => {
    this.storageService.removeItem(LOGGED_USER);
    this.storageService.removeItem(ACCESS_TOKEN);
    return this.post("/logout");
  }

  getLoggedUser() {
    return this.storageService.getItem(LOGGED_USER);
  }

  getAccessToken() {
    return this.storageService.getItem(ACCESS_TOKEN);
  }

  isTokenValid(accessToken) {
    const body = {
      accessToken
    };
    return this.post("", body);
  }

  async isAuthenticated() {
    const username = this.getLoggedUser();
    const accessToken = this.getAccessToken();

    if(!username || !accessToken) {
      return false;
    }

    const response = await this.isTokenValid(accessToken);
    return response.data.isValid;
  }

}