import { User } from "../user/User";

export type UserDetail = {
  createdAt: Date;
  id: string;
  lastLogin: Date | null;
  updatedAt: Date;
  userId?: User | null;
};
