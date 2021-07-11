import React from "react";
import { Layout, Sidebar, SidebarProps } from "react-admin";
import CustomMenu from "./CustomMenu";

const CustomSidebar = (props: SidebarProps) => {
  return <Sidebar {...props}/>;
};

export default function CustomLayout(props: any) {
  return <Layout {...props} menu={CustomMenu} sidebar={CustomSidebar} />;
}
