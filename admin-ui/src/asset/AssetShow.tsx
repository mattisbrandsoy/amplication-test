import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const AssetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Asset Class" source="assetClass" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Department ID" source="departmentId" />
        <TextField label="Department Name" source="departmentName" />
        <TextField label="External_id" source="externalId" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <BooleanField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
