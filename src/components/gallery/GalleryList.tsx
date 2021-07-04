import React from 'react';
import {
	ResourceComponentInjectedProps,
	List,
	Datagrid,
	TextField,
	ArrayField,
	SingleFieldList,
	ImageField,
} from 'react-admin';
import styles from './gallery.module.scss';
const GalleryList = (props: ResourceComponentInjectedProps) => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="title.ar" />
			<TextField source="title.en" />
			<ArrayField source="media.images" className={styles.galleryImages}>
				<SingleFieldList>
					<ImageField source="url" className={styles.galleryImage} />
				</SingleFieldList>
			</ArrayField>
			<TextField source="description.ar" />
			<TextField source="description.en" />
		</Datagrid>
	</List>
);

export default GalleryList;
