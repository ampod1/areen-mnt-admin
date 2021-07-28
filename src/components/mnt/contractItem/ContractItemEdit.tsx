import React from 'react';
import { Edit, EditProps } from 'react-admin';
import ContractItemForm from './ContractItemForm';

export default function ContractItemEdit(props: EditProps) {
	return (
		<Edit {...props}>
			<ContractItemForm {...props} />
		</Edit>
	);
}
