import React, { useCallback, useEffect, useState } from "react";
import {
  DateInput,
  DateTimeInput,
  FormDataConsumer,
  GetListParams,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  useDataProvider,
  useMutation,
} from "react-admin";
import { CONFIGS } from "../../../configs";
import { AUTH_CONSTS } from "../../../MyAuthProvider";
import { useMyDefaultStyles } from "../../../styles/default";

const TechnicianInput = (props: any) => {
  // TIP # to change choises for example according to form
  // it's like a form spy
  // const { values } = useFormState();
  return (
    <>
      <ReferenceInput
        {...props}
        filter={{ user_type_id: CONFIGS.BUSINESS_CONFIGS.TECHNICIAN_TYPE_UUID }}
      >
        <SelectInput optionText="name.full" />
      </ReferenceInput>
    </>
  );
};

export default function RequestForm(props: any) {
  const defaultClss = useMyDefaultStyles();
  const [mutate] = useMutation();
  const dataProvider = useDataProvider();
  // Override record with state
  const [customRecord, setCustomRecord] = useState<any>(null);

  useEffect(() => {
    const getTechnician = async () => {
      console.log("will get initial Technician id only once ");
      const list = await dataProvider.getList("mnt_request_assign", {
        filter: { request_id: props.id },
      } as GetListParams);
      const [first] = list.data;
      console.log("first", first);
      if (first) {
        props.record.technician_id = first.technician_id;
        props.record.assign_date = first.assign_date;
      }
      setCustomRecord(props.record);
    };
    if (props.id) getTechnician();
  }, []);

  const save = useCallback(
    async (data) => {
      const { technician_id, assign_date } = data;

      // Optimistic set record
      setCustomRecord({ ...data });
      if (technician_id) {
        delete data.technician_id;
        // delete assigned_by
        // Change request status to assigned
        // TODO remove static ids
        data.request_status_id = "90d8232e-ee6d-40ce-ac37-9fd3cbc86212";
      }
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
        // 1 - Get assignments
        const list = await dataProvider.getList("mnt_request_assign", {
          filter: { request_id: props.id },
        } as GetListParams);
        const ids = list.data.map((one) => one.id);
        if (ids.length > 0)
          await dataProvider.deleteMany("mnt_request_assign", {
            ids,
          });
        const assigned_by = localStorage.getItem(AUTH_CONSTS.USER_UUID);
        console.log("will add mnt_request_assign + assigned_by", assigned_by);
        if (technician_id)
          await mutate({
            type: "create",
            resource: "mnt_request_assign",
            payload: {
              data: { request_id: id, technician_id, assign_date, assigned_by },
            },
          });
      } catch (error: any) {
        if (error?.body?.errors) {
          return error.body.errors;
        }
      }
    },
    [mutate]
  );
  return (
    <SimpleForm {...props} save={save} initialValues={customRecord}>
      <ReferenceInput
        source="unit_id"
        reference="mnt_unit"
        headerClassName={defaultClss.header}
        label="custom_root.main.unit_number"
      >
        <SelectInput optionText="unit_number" />
      </ReferenceInput>
      <ReferenceInput
        source="customer_id"
        reference="bsc_customer"
        headerClassName={defaultClss.header}
        label="custom_root.main.customer_name"
      >
        <SelectInput optionText="name.full" />
      </ReferenceInput>
      <TechnicianInput
        source="technician_id"
        reference="core_user"
        label="custom_root.main.technician"
        key={customRecord?.technician_id}
      />
      <FormDataConsumer label="custom_root.main.assign_date">
        {({ formData, ...rest }) => {
          if (formData.technician_id)
            return <DateTimeInput source="assign_date" {...rest} />;
        }}
      </FormDataConsumer>
      <TextInput
        label="custom_root.main.notes"
        source="notes"
        headerClassName={defaultClss.header}
      />
    </SimpleForm>
  );
}
