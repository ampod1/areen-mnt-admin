import { Chip, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import {
  ChipField,
  ReferenceInput,
  ReferenceManyField,
  SelectInput,
  SimpleForm,
  SingleFieldList,
  TextInput,
  useLocale,
} from "react-admin";
import { RiMapPinUserLine } from "react-icons/ri";
import { useMyDefaultStyles } from "../../styles/default";

const UserCities = (props: any) => {
  return (
    <div>
      {/**
      <Chip
        label="City"
        icon={
          <RiMapPinUserLine style={{ fontSize: "1.5em", padding: ".5em" }} />
        }
        onDelete={() => {}}
        color="primary"
      />
       */}
      <ReferenceManyField
        reference="mnt_user_city"
        target="user_id"
        label=""
        {...props}
      >
        <div style={{ margin: "1em" }}>
          <SingleFieldList>
            <ChipField source="city_id" />
          </SingleFieldList>
        </div>
      </ReferenceManyField>
    </div>
  );
};

export default function UserForm(props: any) {
  const defaultClss = useMyDefaultStyles();
  const lang = useLocale();
  return (
    <SimpleForm {...props}>
      <Grid container spacing={3} className={defaultClss.fullwidth}>
        <Grid item xs={6}>
          {" "}
          <TextInput
            source="email"
            label="custom_root.main.email"
            headerClassName={defaultClss.header}
            className={defaultClss.fullwidth}
          />
          <TextInput
            source="name.full"
            label="custom_root.main.name"
            headerClassName={defaultClss.header}
            className={defaultClss.fullwidth}
          />
          <ReferenceInput
            source="user_type_id"
            label="custom_root.main.user_type"
            reference="core_usertype"
            headerClassName={defaultClss.header}
            className={defaultClss.fullwidth}
          >
            <SelectInput optionText={`label.${lang}`} />
          </ReferenceInput>
          <ReferenceInput
            source="customer_id"
            label="custom_root.main.customer_name"
            reference="bsc_customer"
            headerClassName={defaultClss.header}
            className={defaultClss.fullwidth}
          >
            <SelectInput optionText="name.full" />
          </ReferenceInput>
          <TextInput
            source="phone"
            label="custom_root.main.phone"
            headerClassName={defaultClss.header}
            className={defaultClss.fullwidth}
          />
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ width: "100%", padding: "1em", margin: "1em" }}>
            <Typography variant="h5">User's Cities</Typography>
            <UserCities />
          </Paper>
        </Grid>
      </Grid>
    </SimpleForm>
  );
}
