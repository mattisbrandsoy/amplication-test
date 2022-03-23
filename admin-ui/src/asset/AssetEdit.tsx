import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const AssetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Asset Class" source="assetClass" />
        <TextInput label="Department ID" source="departmentId" />
        <TextInput label="Department Name" source="departmentName" />
        <TextInput label="External_id" source="externalId" />
        <TextInput label="Name" source="name" />
        <BooleanInput label="Status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
