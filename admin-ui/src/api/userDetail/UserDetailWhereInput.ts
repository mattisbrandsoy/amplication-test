import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserDetailWhereInput = {
  id?: StringFilter;
  lastLogin?: DateTimeNullableFilter;
  userId?: UserWhereUniqueInput;
};
