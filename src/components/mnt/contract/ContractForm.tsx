import React from "react";
import {
  Button,
  Datagrid,
  DateField,
  DateInput,
  FormTab,
  NumberField,
  ReferenceField,
  ReferenceInput,
  ReferenceManyField,
  SelectInput,
  TabbedForm,
  TextField,
} from "react-admin";
import { GiChatBubble } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useMyDefaultStyles } from "../../../styles/default";

const AddContractItemButton = ({ record }: { record: any }) => (
  <Button
    component={Link}
    to={`/mnt_contract_item/create?contract_id=${record.id}`}
    label="Add an Item"
    variant="contained"
    title="Add an Item"
  >
    <GiChatBubble />
  </Button>
);
const ContractForm = (props: any) => {
  const defaultClss = useMyDefaultStyles();
  return (
    <TabbedForm {...props}>
      <FormTab label="Basic Info">
        <ReferenceInput
          source="unit_id"
          label="Unit Number"
          reference="mnt_unit"
          headerClassName={defaultClss.header}
        >
          <SelectInput optionText="unit_number" />
        </ReferenceInput>
        <DateInput
          source="start_date"
          label="Start Date"
          headerClassName={defaultClss.header}
        />
        <DateInput
          source="end_date"
          label="End Date"
          headerClassName={defaultClss.header}
          disabled
        />
      </FormTab>
      <FormTab label="Contract Itmes">
        <ReferenceManyField
          addLabel={false}
          reference="mnt_contract_item"
          target="contract_id"
          sort={{ field: "code", order: "ASC" }}
        >
          <Datagrid>
            <ReferenceField
              source="mnt_item_id"
              reference="mnt_item"
              label="Item"
            >
              <TextField source="label.en" />
            </ReferenceField>
            <NumberField source="period_in_monthes" />
            <DateField source="end_date" />
          </Datagrid>
        </ReferenceManyField>
        <br />
        <AddContractItemButton record={{ id: props.id } as any} />
      </FormTab>
    </TabbedForm>
  );
};

export default ContractForm;
