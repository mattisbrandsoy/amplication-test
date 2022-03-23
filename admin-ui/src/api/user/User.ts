import { UserDetail } from "../userDetail/UserDetail";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  userDetails?: Array<UserDetail>;
  username: string;
};
