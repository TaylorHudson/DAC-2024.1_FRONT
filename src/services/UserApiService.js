import ApiService from "./ApiService";

export default class UserApiService extends ApiService {

  constructor() {
    super("/user");
  }

  create(body) {
    return this.post("", body);
  }

  update(body) {
    return this.put("", body);
  }

  delete(id) {
    return super.delete(`/${id}`);
  }

  findAll() {
    return this.get("");
  }

  findById(id) {
    return this.get(`/${id}`);
  }

}