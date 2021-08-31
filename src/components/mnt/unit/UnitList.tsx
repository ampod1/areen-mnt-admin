import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  Datagrid,
  DateField,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  TextInput,
  TextField,
  useLocale,
} from "react-admin";
import { useMyDefaultStyles } from "../../../styles/default";
import { GET_PROJECTS_AND_CITIES } from "./../../../query/mnt_projects";
import ListActions from "./../../../reactAdminCustom/ListActions";
import ProjectFilterList from "./../../../reactAdminCustom/ProjectFilter";

export default function UnitList(props: ListProps) {
  const defaultClss = useMyDefaultStyles();
  const lang = useLocale();
  const [projects, setProjects] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const { data, loading } = useQuery(GET_PROJECTS_AND_CITIES, {
    onError(err) {
      console.log(err.message);
    },
    onCompleted() {
      setProjects([...data?.mnt_project]);
      setCities([...data?.mnt_city]);
    },
  });
  const Filters = [
    <TextInput
      source={`unit_number`}
      alwaysOn
      label="custom_root.main.search"
    />,
  ];

  return (
    <List
      sort={{ field: "code", order: "ASC" }}
      {...props}
      actions={<ListActions />}
      filters={Filters}
      aside={<ProjectFilterList projects={projects} cities={cities} />}
    >
      <Datagrid rowClick="edit">
        <NumberField
          label="custom_root.main.code"
          source="code"
          headerClassName={defaultClss.header}
        />
        <NumberField
          source="unit_number"
          label="custom_root.main.unit_number"
          headerClassName={defaultClss.header}
        />
        <ReferenceField
          source="project_id"
          reference="mnt_project"
          label="custom_root.main.project"
          headerClassName={defaultClss.header}
        >
          <TextField source={`label.${lang}`} />
        </ReferenceField>
        <ReferenceField
          source="city_id"
          reference="mnt_city"
          label="custom_root.main.city"
          headerClassName={defaultClss.header}
        >
          <TextField source={`label.${lang}`} />
        </ReferenceField>
        <DateField
          source="created_at"
          label="custom_root.main.created_at"
          headerClassName={defaultClss.header}
        />
      </Datagrid>
    </List>
  );
}
