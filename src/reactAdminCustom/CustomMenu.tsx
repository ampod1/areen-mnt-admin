import { Box } from "@material-ui/core";
import {
  AssignmentIndTwoTone,
  DnsTwoTone,
  LockTwoTone
} from "@material-ui/icons";
import React from "react";
import { MenuItemLink, MenuProps } from "react-admin";
import { BiBuildingHouse } from 'react-icons/bi';
import { BsCardChecklist } from 'react-icons/bs';
import { GrStatusGood } from 'react-icons/gr';
import { IoHammerSharp } from "react-icons/io5";
import {
  RiBuilding2Fill, RiClipboardFill, RiCommunityFill, RiCustomerService2Line,
  RiDashboard2Line, RiDoorLine
} from "react-icons/ri";

export default function CustomMenu(props: MenuProps) {
  return (
    <div style={{width:"100%"}}>
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
          to="/mnt_site"
          exact
          leftIcon={<BiBuildingHouse style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Sites"
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
        <MenuItemLink
          to="/mnt_request"
          exact
          leftIcon={<RiClipboardFill style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Customer's Requests"
        />
        <MenuItemLink
          to="/mnt_request_assign"
          exact
          leftIcon={<IoHammerSharp style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Technicians Tasks"
        />
         <MenuItemLink
          to="/mnt_request_status_type"
          exact
          leftIcon={<GrStatusGood style={{ fontSize: "1.5em", color: '#ccc' }} />}
          {...props}
          primaryText="Request Status Types"
        />
        <MenuItemLink
          to="/mnt_request_status"
          exact
          leftIcon={<BsCardChecklist style={{ fontSize: "1.5em", color: '#ccc' }} />}
          {...props}
          primaryText="Request Status"
        />
      </Box>
    </div>
  );
}
