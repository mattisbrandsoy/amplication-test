import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserDetailListRelationFilter } from "../userDetail/UserDetailListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  userDetails?: UserDetailListRelationFilter;
  username?: StringFilter;
};
