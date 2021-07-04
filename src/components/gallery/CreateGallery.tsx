import React from 'react';
import { Create } from 'react-admin';
import GalleryForm from './GalleryForm';
const CreateGallery = (props: any) => {
	return (
		<Create {...props}>
			<GalleryForm />
		</Create>
	);
};

export default CreateGallery;
