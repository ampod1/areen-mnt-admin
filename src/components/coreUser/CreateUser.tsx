import React from 'react'
import { Create } from 'react-admin';
import UserForm from './UserForm';

export default function CreateUser(props:any) {
    return (
        <Create {...props}>
          <UserForm {...props} />
        </Create>
      );
}
