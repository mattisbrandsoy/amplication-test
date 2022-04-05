import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  userId?: UserWhereUniqueInput | null;
};
