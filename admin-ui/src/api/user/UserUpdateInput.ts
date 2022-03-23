import { UserDetailUpdateManyWithoutUsersInput } from "./UserDetailUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  userDetails?: UserDetailUpdateManyWithoutUsersInput;
  username?: string;
};
