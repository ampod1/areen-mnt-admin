import React from "react";
import {
  Button,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  useLocale,
} from "react-admin";
import { FaFileContract } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function UnitForm(props: any) {
  const lang = useLocale();

  return (
    <>
      <SimpleForm {...props}>
        <NumberInput
          label="custom_root.main.unit_number"
          source="unit_number"
        />
        <ReferenceInput
          label="custom_root.main.project"
          source="project_id"
          reference="mnt_project"
        >
          <SelectInput optionText={`label.${lang}`} />
        </ReferenceInput>
        <Button
          component={Link}
          to={{
            pathname: `/mnt_contract/GET_ID`,
          }}
          label="Unit Contract"
          variant="contained"
          title="Unit Contract"
        >
          <FaFileContract />
        </Button>
      </SimpleForm>
    </>
  );
}
