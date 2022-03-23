import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type AssetWhereInput = {
  assetClass?: StringNullableFilter;
  departmentId?: StringNullableFilter;
  departmentName?: StringNullableFilter;
  externalId?: StringFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: BooleanFilter;
};
