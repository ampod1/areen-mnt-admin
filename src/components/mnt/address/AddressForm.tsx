import React from 'react';
import {
	NumberInput,
	ReferenceInput,
	SelectInput,
	SimpleForm,
	TextInput,
} from 'react-admin';
import { useMyDefaultStyles } from '../../../styles/default';

const AddressForm = (props: any) => {
	const defaultClss = useMyDefaultStyles();
	return (
		<SimpleForm {...props}>
			<TextInput
				source="address"
				label="custom_root.main.address"
				headerClassName={defaultClss.header}
			/>
			<NumberInput
				source="lng"
				label="custom_root.main.lng"
				headerClassName={defaultClss.header}
			/>
			<NumberInput
				source="lat"
				label="custom_root.main.lat"
				headerClassName={defaultClss.header}
			/>
			<ReferenceInput
				source="unit_id"
				reference="mnt_unit"
				label="custom_root.main.unit_number"
				headerClassName={defaultClss.header}
			>
				<SelectInput optionText="unit_number" />
			</ReferenceInput>
		</SimpleForm>
	);
};

export default AddressForm;
