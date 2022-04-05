import { AssetCreateNestedManyWithoutUsersInput } from "./AssetCreateNestedManyWithoutUsersInput";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";
import { UserDetailCreateNestedManyWithoutUsersInput } from "./UserDetailCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  assets?: AssetCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  tasks?: TaskCreateNestedManyWithoutUsersInput;
  userDetails?: UserDetailCreateNestedManyWithoutUsersInput;
  username: string;
};
