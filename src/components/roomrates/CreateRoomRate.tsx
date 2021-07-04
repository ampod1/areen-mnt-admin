import React from "react";
import { Create } from "react-admin";
import RoomRatesForm from "./RoomRatesForm";

export default function CreateRoomRate(props: any) {
  return (
    <Create {...props}>
      <RoomRatesForm {...props} />
    </Create>
  );
}
