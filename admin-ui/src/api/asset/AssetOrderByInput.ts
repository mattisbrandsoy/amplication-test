import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  assetClass?: SortOrder;
  createdAt?: SortOrder;
  departmentId?: SortOrder;
  departmentName?: SortOrder;
  externalId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
