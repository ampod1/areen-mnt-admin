import React from 'react';
import { Edit } from 'react-admin';
import GalleryForm from './GalleryForm';
const EditGallery = (props: any) => {
	return (
		<Edit {...props}>
			<GalleryForm />
		</Edit>
	);
};

export default EditGallery;
