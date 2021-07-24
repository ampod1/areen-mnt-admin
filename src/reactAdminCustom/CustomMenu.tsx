import { Box, Collapse, ListItem, ListItemText } from "@material-ui/core";
import {
  AssignmentIndTwoTone,
  DnsTwoTone,
  ExpandLess,
  ExpandMore,
  LockTwoTone,
} from "@material-ui/icons";
import React, { useState } from "react";
import { MenuItemLink, MenuProps } from "react-admin";
import { BiBuildingHouse } from "react-icons/bi";
import { BsFillQuestionSquareFill, BsPersonLinesFill } from "react-icons/bs";
import { GiMailbox } from "react-icons/gi";
import { IoAlbums, IoHammerSharp, IoNewspaperSharp } from "react-icons/io5";
import {
  RiBuilding2Fill,
  RiClipboardFill,
  RiCommunityFill,
  RiCustomerService2Line,
  RiDashboard2Line,
  RiDoorLine,
} from "react-icons/ri";

export default function CustomMenu(props: MenuProps) {
  const [openContracts, setOpenContracts] = useState(false);
  return (
    <div style={{ width: "100%" }}>
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
          primaryText="User Types"
        />
        <MenuItemLink
          to="/bsc_customer"
          exact
          leftIcon={<RiCustomerService2Line style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Customers"
        />
        <MenuItemLink
          to="/bsc_customer_type"
          exact
          leftIcon={<BsPersonLinesFill style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Customer Types"
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
          leftIcon={<BsFillQuestionSquareFill style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Request Status Types"
        />
        <MenuItemLink
          to="/mnt_request_status"
          exact
          leftIcon={<IoAlbums style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Request Status"
        />
        <ListItem
          button
          onClick={() => {
            setOpenContracts(!openContracts);
          }}
        >
          <ListItemText primary="Units Contracts" />
          {openContracts ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openContracts} timeout="auto" unmountOnExit>
          <MenuItemLink
            to="/mnt_contract"
            exact
            leftIcon={<IoNewspaperSharp style={{ fontSize: "1.5em" }} />}
            {...props}
            primaryText="Units Contracts"
          />
          <MenuItemLink
            to="/mnt_item"
            exact
            leftIcon={<DnsTwoTone style={{ fontSize: "1.5em" }} />}
            {...props}
            primaryText="Maintenance Items"
          />
        </Collapse>

        <MenuItemLink
          to="/mnt_address"
          exact
          leftIcon={<GiMailbox style={{ fontSize: "1.5em" }} />}
          {...props}
          primaryText="Addresses"
        />
      </Box>
    </div>
  );
}
