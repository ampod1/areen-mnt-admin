import React from "react";
import {
  ArrayField,
  Datagrid,
  ImageField,
  List,
  ResourceComponentInjectedProps,
  SingleFieldList,
  TextField,
  SearchInput,
  useLocale,
} from "react-admin";
import { useMyDefaultStyles } from "../../styles/default";
import styles from "./gallery.module.scss";
import ListActions from "./../../reactAdminCustom/ListActions";

const GalleryList = (props: ResourceComponentInjectedProps) => {
  const defaultClss = useMyDefaultStyles();
  const lang = useLocale();
  const Filters = [
    <SearchInput
      source={`title.${lang}`}
      alwaysOn
      placeholder="Enter customer name"
    />,
  ];
  return (
    <List
      sort={{ field: "code", order: "ASC" }}
      {...props}
      actions={<ListActions />}
      filters={Filters}
    >
      <Datagrid rowClick="edit">
        <TextField source="code" headerClassName={defaultClss.header} />
        <TextField
          source="title.ar"
          label="الاسم"
          headerClassName={defaultClss.header}
        />
        <TextField source="title.en" label="Name" />
        <ArrayField
          source="media.images"
          label="Images"
          headerClassName={defaultClss.header}
          className={styles.galleryImages}
        >
          <SingleFieldList>
            <ImageField source="url" className={styles.galleryImage} />
          </SingleFieldList>
        </ArrayField>
        <TextField
          label="وصف"
          headerClassName={defaultClss.header}
          source="description.ar"
        />
        <TextField
          label="description"
          headerClassName={defaultClss.header}
          source="description.en"
        />
      </Datagrid>
    </List>
  );
};

export default GalleryList;
