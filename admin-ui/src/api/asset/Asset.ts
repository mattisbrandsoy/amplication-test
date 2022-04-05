import { User } from "../user/User";

export type Asset = {
  assetClass: string | null;
  createdAt: Date;
  departmentId: string | null;
  departmentName: string | null;
  externalId: string;
  id: string;
  name: string | null;
  status: boolean;
  updatedAt: Date;
  user?: User | null;
};
