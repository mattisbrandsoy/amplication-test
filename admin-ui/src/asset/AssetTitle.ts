import { Asset as TAsset } from "../api/asset/Asset";

export const ASSET_TITLE_FIELD = "departmentName";

export const AssetTitle = (record: TAsset): string => {
  return record.departmentName || record.id;
};
