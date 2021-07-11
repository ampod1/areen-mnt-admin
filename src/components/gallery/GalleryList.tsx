import React from 'react';
import {
	ArrayField, Datagrid, ImageField, List, ResourceComponentInjectedProps, SingleFieldList, TextField
} from 'react-admin';
import { useMyDefaultStyles } from '../../styles/default';
import styles from './gallery.module.scss';
const GalleryList = (props: ResourceComponentInjectedProps) => {
	const defaultClss = useMyDefaultStyles();
	return (
		<List {...props}>
			<Datagrid rowClick="edit">
				<TextField source="code" headerClassName={defaultClss.header} />
				<TextField source="title.ar" label="الاسم" headerClassName={defaultClss.header} />
				<TextField source="title.en" label="Name" />
				<ArrayField source="media.images" label="Images" headerClassName={defaultClss.header} className={styles.galleryImages}>
					<SingleFieldList>
						<ImageField source="url" className={styles.galleryImage} />
					</SingleFieldList>
				</ArrayField>
				<TextField label="وصف" headerClassName={defaultClss.header} source="description.ar" />
				<TextField label="description" headerClassName={defaultClss.header} source="description.en" />
			</Datagrid>
		</List>
	)
};

export default GalleryList;
