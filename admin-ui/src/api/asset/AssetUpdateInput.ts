import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AssetUpdateInput = {
  assetClass?: string | null;
  departmentId?: string | null;
  departmentName?: string | null;
  externalId?: string;
  name?: string | null;
  status?: boolean;
  user?: UserWhereUniqueInput | null;
};
