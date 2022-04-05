import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

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
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
