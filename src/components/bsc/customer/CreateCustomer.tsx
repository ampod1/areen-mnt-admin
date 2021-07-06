import React from 'react';
import CustomerForm from './CustomerForm';
import { Create } from 'react-admin';

const CreateCustomer = (props: any) => {
	return (
		<Create {...props}>
			<CustomerForm {...props} />
		</Create>
	);
};

export default CreateCustomer;
