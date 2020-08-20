import { User } from '../../entities/user/UserModel';
import { HttpService } from 'src/utils/services/HttpService';

const URLS = {
  SIGNUP: '/auth/signup',
  SIGNIN: '/auth/signin',
  SIGNOUT: '/auth/signout'
};

export class UserService {
  public constructor(private readonly httpService: HttpService) {}

  public signup(
    login: User['username'],
    email: User['email'],
    password: string,
    repeatPassword: string
  ) {
    return this.httpService.post(URLS.SIGNUP, {
      login,
      email,
      password,
      repeatPassword
    });
  }

  public async logIn(
    login: User['username'] | User['email'],
    password: string
  ): Promise<User> {
    return this.httpService.post(URLS.SIGNIN, { login, password });
  }

  public async logOut(userId: User['id']): Promise<void> {
    return this.httpService.post(URLS.SIGNOUT, { userId });
  }
}
