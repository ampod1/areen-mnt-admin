import { Box } from "@material-ui/core";
import {
  AssignmentIndTwoTone,
  DnsTwoTone,
  LockTwoTone,
} from "@material-ui/icons";
import React from "react";
import { MenuItemLink, MenuProps } from "react-admin";
import { RiCustomerService2Line, RiDashboard2Line } from "react-icons/ri";
export default function CustomMenu(props: MenuProps) {
  return (
    <div className="">
      <Box m={2} py={2}>
        <MenuItemLink
          to="/"
          exact
          leftIcon={<RiDashboard2Line style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Home"
        />
        <MenuItemLink
          to="/core_user"
          exact
          leftIcon={<AssignmentIndTwoTone style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Users"
        />
        <MenuItemLink
          to="/core_usertype"
          exact
          leftIcon={<LockTwoTone style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="User Roles"
        />
        <MenuItemLink
          to="/bsc_customer"
          exact
          leftIcon={<RiCustomerService2Line style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Customers"
        />
        <MenuItemLink
          to="/mnt_item"
          exact
          leftIcon={<DnsTwoTone style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Maintenance Items"
        />
      </Box>
    </div>
  );
}
