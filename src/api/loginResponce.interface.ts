import { IUser } from '../interfaces/user.interface';

export interface ILoginResponse {
  access_token: string;
  user: IUser;
}
