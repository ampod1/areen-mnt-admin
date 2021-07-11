import React from 'react';
import { Create, CreateProps } from 'react-admin';
import SiteForm from './SiteForm';

const CreateSite = (props: CreateProps) => {
  return (
    <Create {...props}>
      <SiteForm {...props} />
    </Create>
  )
}

export default CreateSite
