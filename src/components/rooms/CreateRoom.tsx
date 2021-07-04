import { Create } from "react-admin";
import React from "react";
import RoomForm from "./RoomForm";

export default function CreateRoom(props: any) {
  return (
    <Create {...props}>
      <RoomForm {...props} />
    </Create>
  );
}
