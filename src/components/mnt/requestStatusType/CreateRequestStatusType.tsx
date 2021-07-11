import React from 'react';
import { Create, CreateProps } from 'react-admin';
import RequestStatusTypeForm from './RequestStatusTypeForm';

const CreateRequestStatusType = (props: CreateProps) => {
  return (
    <Create {...props}>
       <RequestStatusTypeForm {...props} />
    </Create>
  )
}

export default CreateRequestStatusType
