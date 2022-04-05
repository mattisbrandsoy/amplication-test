import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";
import { UserDetailUpdateManyWithoutUsersInput } from "./UserDetailUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  tasks?: TaskUpdateManyWithoutUsersInput;
  userDetails?: UserDetailUpdateManyWithoutUsersInput;
  username?: string;
};
