import React from "react";
import { Edit } from "react-admin";
import RoomRatesForm from "./RoomRatesForm";

export default function EditRoomRate(props: any) {
  return (
    <Edit {...props}>
      <RoomRatesForm {...props} />
    </Edit>
  );
}
