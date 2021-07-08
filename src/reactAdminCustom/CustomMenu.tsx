import { Box } from "@material-ui/core";
import {
  AssignmentIndTwoTone,
  DnsTwoTone,
  LockTwoTone,
} from "@material-ui/icons";
import React from "react";
import { MenuItemLink, MenuProps } from "react-admin";
import {
  RiCustomerService2Line,
  RiDashboard2Line,
  RiCommunityFill,
  RiBuilding2Fill,
  RiDoorLine,
} from "react-icons/ri";
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
        <MenuItemLink
          to="/mnt_project"
          exact
          leftIcon={<RiBuilding2Fill style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Projects"
        />
        <MenuItemLink
          to="/mnt_unit"
          exact
          leftIcon={<RiCommunityFill style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Units"
        />
        <MenuItemLink
          to="/mnt_customer_unit"
          exact
          leftIcon={<RiDoorLine style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Customer's Units"
        />
      </Box>
    </div>
  );
}
