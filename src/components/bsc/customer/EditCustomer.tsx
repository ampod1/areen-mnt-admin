import React from 'react';
import { Edit } from 'react-admin';
import CustomerForm from './CustomerForm';

const EditCustomer = (props: any) => {
	return (
		<Edit {...props}>
			<CustomerForm {...props} />
		</Edit>
	);
};

export default EditCustomer;
