import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { UserDetailListRelationFilter } from "../userDetail/UserDetailListRelationFilter";

export type UserWhereInput = {
  assets?: AssetListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
  userDetails?: UserDetailListRelationFilter;
  username?: StringFilter;
};
