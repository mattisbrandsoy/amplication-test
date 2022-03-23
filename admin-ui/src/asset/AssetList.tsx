import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AssetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Assets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Asset Class" source="assetClass" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Department ID" source="departmentId" />
        <TextField label="Department Name" source="departmentName" />
        <TextField label="External_id" source="externalId" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <BooleanField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
