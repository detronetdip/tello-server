export interface UserDataToSign {
  uid?: string;
  name?: string;
  UserName?: string;
  email?: string;
  version?: number;
}
export interface UserModel {
  uid: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  tokenVersion: number;
}
