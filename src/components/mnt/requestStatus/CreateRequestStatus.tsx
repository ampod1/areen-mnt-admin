import React from 'react';
import { Create, CreateProps } from 'react-admin';
import RequestStatusForm from './RequestStatusForm';

const CreateRequestStatus = (props: CreateProps) => {
  return (
    <Create {...props}>
      <RequestStatusForm {...props} />
    </Create>
  )
}

export default CreateRequestStatus
