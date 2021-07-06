import React from 'react';
import { Edit } from 'react-admin';
import ItemsForm from './ItemsForm';

export const EditItem = (props: any) => {
	return (
		<Edit {...props}>
			<ItemsForm {...props} />
		</Edit>
	);
};
