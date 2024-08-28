export interface IUser {
  id: number;
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}
