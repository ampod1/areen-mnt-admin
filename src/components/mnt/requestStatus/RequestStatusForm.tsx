import React from 'react';
import { ReferenceInput, SelectInput, SimpleForm } from 'react-admin';

const RequestStatusForm = (props: any) => {
  return (
    <SimpleForm {...props}>
      <ReferenceInput source="req_status_type_id" reference="mnt_request_status_type">
        <SelectInput optionText="label.en" />
      </ReferenceInput>
      <ReferenceInput source="request_id" reference="mnt_request">
        <SelectInput optionText="code" />
      </ReferenceInput>
    </SimpleForm>
  )
}

export default RequestStatusForm
