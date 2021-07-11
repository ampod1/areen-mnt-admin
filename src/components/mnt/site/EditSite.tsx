import React from 'react';
import { Edit, EditProps } from 'react-admin';
import SiteForm from './SiteForm';

const EditSite = (props: EditProps) => {
  return (
    <Edit {...props}>
      <SiteForm {...props} />
    </Edit>
  )
}

export default EditSite
