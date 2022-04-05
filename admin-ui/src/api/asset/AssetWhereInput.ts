import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AssetWhereInput = {
  assetClass?: StringNullableFilter;
  departmentId?: StringNullableFilter;
  departmentName?: StringNullableFilter;
  externalId?: StringFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: BooleanFilter;
  user?: UserWhereUniqueInput;
};
