import React, { useCallback } from "react";
import {
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  useDataProvider,
  useMutation,
} from "react-admin";

export default function RequestForm(props: any) {
  const [mutate] = useMutation();
  const dataProvider = useDataProvider();
  const save = useCallback(
    async (data) => {
      console.log("props", props);
      const { technician_id } = data;
      delete data.technician_id;
      console.log("save", data);
      let payload: any = { data };
      try {
        if (props.type == "update") {
          payload = { data: { ...data }, id: data.id };
        }
        const returnedData = await mutate(
          {
            type: props.type,
            resource: "mnt_request",
            payload,
          },
          { returnPromise: true }
        );
        console.log(returnedData);
        const { id } = returnedData.data;
        // Remove old assingments
        dataProvider.deleteMany("mnt_request_assign", {
            ids:["0"]
        } , {
          fetch: "DELETE_MNT_REQUEST_ASSIGN_MUTATION",
        });

        await mutate({
          type: "create",
          resource: "mnt_request_assign",
          payload: { data: { request_id: id, technician_id } },
        });
      } catch (error) {
        if (error.body.errors) {
          return error.body.errors;
        }
      }
    },
    [mutate]
  );
  return (
    <SimpleForm {...props} save={save}>
      <ReferenceInput source="unit_id" reference="mnt_unit">
        <SelectInput optionText="unit_number" />
      </ReferenceInput>
      <ReferenceInput source="customer_id" reference="bsc_customer">
        <SelectInput optionText="name.full" />
      </ReferenceInput>

      <ReferenceInput source="technician_id" reference="core_user">
        <SelectInput optionText="name.full" />
      </ReferenceInput>
      <TextInput source="notes" />
    </SimpleForm>
  );
}
