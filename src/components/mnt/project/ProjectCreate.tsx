import React from "react";
import { Create, CreateProps } from "react-admin";
import ProjectForm from "./ProjectForm";

export default function ProjectCreate(props: CreateProps) {
  return (
    <Create {...props}>
      <ProjectForm {...props} />
    </Create>
  );
}
