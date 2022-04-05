import { Asset } from "../asset/Asset";
import { Task } from "../task/Task";
import { UserDetail } from "../userDetail/UserDetail";

export type User = {
  assets?: Array<Asset>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  tasks?: Array<Task>;
  updatedAt: Date;
  userDetails?: Array<UserDetail>;
  username: string;
};
