import React from 'react';
import { Edit, EditProps } from 'react-admin';
import RequestStatusTypeForm from './RequestStatusTypeForm';

const EditRequestStatusType = (props: EditProps) => {
  return (
    <Edit {...props}>
      <RequestStatusTypeForm {...props} />
    </Edit>
  )
}

export default EditRequestStatusType
