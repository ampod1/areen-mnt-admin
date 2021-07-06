import React from 'react'
import { Edit } from 'react-admin'
import UserForm from './UserForm'

export default function EditUser(props:any) {
    return (
        <Edit {...props}>
            <UserForm {...props} />
        </Edit>
    )
}
