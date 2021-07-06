import React from 'react'
import { Edit } from 'react-admin'
import UsertypeForm from './UsertypeForm'

export default function EditUsertype(props:any) {
    return (
        <Edit {...props}>
            <UsertypeForm  {...props}/>
        </Edit>
    )
}
