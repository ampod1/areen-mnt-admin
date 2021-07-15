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
				label="Address"
				headerClassName={defaultClss.header}
			/>
			<NumberInput
				source="lng"
				label="Longitude"
				headerClassName={defaultClss.header}
			/>
			<NumberInput
				source="lat"
				label="Latitude"
				headerClassName={defaultClss.header}
			/>
			<ReferenceInput
				source="unit_id"
				reference="mnt_unit"
				label="Unit Number"
				headerClassName={defaultClss.header}
			>
				<SelectInput optionText="unit_number" />
			</ReferenceInput>
		</SimpleForm>
	);
};

export default AddressForm;
