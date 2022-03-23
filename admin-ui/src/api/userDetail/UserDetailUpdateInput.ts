import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserDetailUpdateInput = {
  lastLogin?: Date | null;
  userId?: UserWhereUniqueInput | null;
};
