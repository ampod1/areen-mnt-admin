import { withStyles } from "@material-ui/core/styles";
import {  LoginForm } from "react-admin";

const MyLoginForm = withStyles({
  icon: {
    display: "none",
  },
  button: { background: "#b02626" },
})(LoginForm);

export default MyLoginForm;
