import { UserDetail as TUserDetail } from "../api/userDetail/UserDetail";

export const USERDETAIL_TITLE_FIELD = "id";

export const UserDetailTitle = (record: TUserDetail): string => {
  return record.id || record.id;
};
