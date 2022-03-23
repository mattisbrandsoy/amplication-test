import { UserDetailCreateNestedManyWithoutUsersInput } from "./UserDetailCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  userDetails?: UserDetailCreateNestedManyWithoutUsersInput;
  username: string;
};
