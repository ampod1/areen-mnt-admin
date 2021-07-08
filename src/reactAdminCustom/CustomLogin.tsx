import React from "react";
import { Login, LoginForm } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

const CustomLoginForm = withStyles({
  icon: {
    display: "none",
  },
  button: { background: "#b02626" },
})(LoginForm);

const useStyles = makeStyles({
  avatar: {
    display: "none",
  },
  button: { background: "#b02626" },
});

export default function CustomLogin() {
  const custClss = useStyles();
  return (
    <>
      <Login
        // A random image that changes everyday
        backgroundImage="https://i.imgur.com/aaxvOwJ.jpg"
        classes={custClss}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "3em 1em 1em 1em",
          }}
        >
          <img src="https://i.imgur.com/oZ1qmMo.png" alt="" />
        </div>
        <CustomLoginForm />
      </Login>
    </>
  );
}
