import React from 'react';
import {
	Create,
	SimpleForm,
	NumberInput,
	TextInput,
	ResourceComponentInjectedProps,
} from 'react-admin';
const CreateMeetingRoom = (props: ResourceComponentInjectedProps) => {
	return (
		<Create {...props}>
			<SimpleForm>
				<TextInput source="title.en" />
				<TextInput source="title.ar" />
				<NumberInput source="space" />
				<NumberInput source="guests.theatre" />
				<NumberInput source="guests.conference" />
				<NumberInput source="guests.wedding" />
				<NumberInput source="guests.reception" />
			</SimpleForm>
		</Create>
	);
};

export default CreateMeetingRoom;
