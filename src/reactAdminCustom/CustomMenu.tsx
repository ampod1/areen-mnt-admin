import { Box, Collapse, ListItem, ListItemText } from "@material-ui/core";
import {
  AssignmentIndTwoTone,
  DnsTwoTone,
  ExpandLess,
  ExpandMore,
  LockTwoTone,
} from "@material-ui/icons";
import React, { useState } from "react";
import { MenuItemLink, MenuProps, ReduxState } from "react-admin";
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
import { useSelector } from "react-redux";

export default function CustomMenu(props: MenuProps) {
  const [openContractsSub, setOpenContractsSub] = useState(false);
  const [openUsersSub, setOpenUsersSub] = useState(false);
  const [openUnitsSub, setOpenUnitsSub] = useState(false);
  const [openCustomersSub, setOpenCustomersSub] = useState(false);
  const [openRequestsSub, setOpenRequestsSub] = useState(false);
  const isSidebarOpen = useSelector(
    (state: ReduxState) => state.admin.ui.sidebarOpen
  );
  console.log(props);
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
        <ListItem
          button
          onClick={() => {
            setOpenUsersSub(!openUsersSub);
          }}
        >
          <ListItemText primary={isSidebarOpen ? "Users" : ""} />
          {openUsersSub ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openUsersSub} timeout="auto" unmountOnExit>
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
        </Collapse>

        <ListItem
          button
          onClick={() => {
            setOpenCustomersSub(!openCustomersSub);
          }}
        >
          <ListItemText primary={isSidebarOpen ? "Customers" : ""} />
          {openCustomersSub ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCustomersSub} timeout="auto" unmountOnExit>
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
        </Collapse>
        <ListItem
          button
          onClick={() => {
            setOpenUnitsSub(!openUnitsSub);
          }}
        >
          <ListItemText primary={isSidebarOpen ? "Units" : ""} />
          {openUnitsSub ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openUnitsSub} timeout="auto" unmountOnExit>
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
            to="/mnt_address"
            exact
            leftIcon={<GiMailbox style={{ fontSize: "1.5em" }} />}
            {...props}
            primaryText="Addresses"
          />
          <MenuItemLink
            to="/mnt_customer_unit"
            exact
            leftIcon={<RiDoorLine style={{ fontSize: "1.5em" }} />}
            {...props}
            primaryText="Customer's Units"
          />
        </Collapse>
        <ListItem
          button
          onClick={() => {
            setOpenRequestsSub(!openRequestsSub);
          }}
        >
          <ListItemText primary={isSidebarOpen ? "Requests" : ""} />
          {openRequestsSub ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openRequestsSub} timeout="auto" unmountOnExit>
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
            leftIcon={
              <BsFillQuestionSquareFill style={{ fontSize: "1.5em" }} />
            }
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
        </Collapse>
        <ListItem
          button
          onClick={() => {
            setOpenContractsSub(!openContractsSub);
          }}
        >
          <ListItemText primary={isSidebarOpen ? "Unit Contracts" : ""} />
          {openContractsSub ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openContractsSub} timeout="auto" unmountOnExit>
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
      </Box>
    </div>
  );
}
