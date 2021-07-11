import React from "react";
import { Edit, EditProps } from "react-admin";
import ProjectForm from "./ProjectForm";

export default function ProjectEdit(props: EditProps) {
  return (
    <Edit {...props}>
      <ProjectForm {...props} />
    </Edit>
  );
}
