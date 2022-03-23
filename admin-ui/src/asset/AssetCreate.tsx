import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const AssetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Asset Class" source="assetClass" />
        <TextInput label="Department ID" source="departmentId" />
        <TextInput label="Department Name" source="departmentName" />
        <TextInput label="External_id" source="externalId" />
        <TextInput label="Name" source="name" />
        <BooleanInput label="Status" source="status" />
      </SimpleForm>
    </Create>
  );
};
