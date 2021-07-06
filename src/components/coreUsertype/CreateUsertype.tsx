import React from 'react'
import { Create } from "react-admin";
import UsertypeForm from './UsertypeForm';

export default function CreateUsertype(props:any) {
    return (
        <Create {...props}>
          <UsertypeForm {...props} />
        </Create>
      );
}
