import React from 'react';
import { Edit, EditProps } from 'react-admin';
import RequestStatusForm from './RequestStatusForm';

const EditRequestStatus = (props: EditProps) => {
  return (
    <Edit {...props}>
      <RequestStatusForm {...props} />
    </Edit>
  )
}

export default EditRequestStatus
