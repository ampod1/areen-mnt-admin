import React from 'react';
import { Create } from 'react-admin';
import ItemsForm from './ItemsForm';

export const CreateItem = (props: any) => {
	return (
		<Create {...props}>
			<ItemsForm {...props} />
		</Create>
	);
};
