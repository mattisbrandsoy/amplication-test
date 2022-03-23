import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserDetailCreateInput = {
  lastLogin?: Date | null;
  userId?: UserWhereUniqueInput | null;
};
