import React from "react";
import { Edit } from "react-admin";
import RoomForm from "./RoomForm";

export default function EditRoom(props: any) {
  return (
    <Edit {...props}>
      <RoomForm {...props} />
    </Edit>
  );
}
