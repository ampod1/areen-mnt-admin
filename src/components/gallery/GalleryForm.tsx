import React from 'react';
import {
	TextInput,
	SimpleForm,
	BooleanInput,
	SelectInput,
	ArrayInput,
	SimpleFormIterator,
} from 'react-admin';

const GalleryForm = (props: any) => {
	return (
		<SimpleForm {...props}>
			<TextInput source="title.ar" />
			<TextInput source="title.en" />
			<TextInput source="description.ar" />
			<TextInput source="description.en" />
			<ArrayInput source="media.images">
				<SimpleFormIterator>
					<TextInput source="url" />
				</SimpleFormIterator>
			</ArrayInput>
		</SimpleForm>
	);
};

export default GalleryForm;
