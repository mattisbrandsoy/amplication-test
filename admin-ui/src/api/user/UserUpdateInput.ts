import { AssetUpdateManyWithoutUsersInput } from "./AssetUpdateManyWithoutUsersInput";
import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";
import { UserDetailUpdateManyWithoutUsersInput } from "./UserDetailUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  assets?: AssetUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  tasks?: TaskUpdateManyWithoutUsersInput;
  userDetails?: UserDetailUpdateManyWithoutUsersInput;
  username?: string;
};
