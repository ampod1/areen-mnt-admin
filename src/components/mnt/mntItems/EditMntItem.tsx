import React from 'react';
import { Edit } from 'react-admin';
import MntItemForm from './MntItemForm';

export const EditMntItem = (props: any) => {
	return (
		<Edit {...props}>
			<MntItemForm {...props} />
		</Edit>
	);
};
