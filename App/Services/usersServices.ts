import { api } from "../Api/axiosConfig";
import { User } from "../Types/api";

export class UserService {
  static getUserMe() {
    return api.get<User>("/user/me");
  }

  static addImage(image: string) {
    return api.post<User>("/user/add-image", image);
  }
}
