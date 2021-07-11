import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import merge from "lodash/merge";
import { defaultTheme } from "react-admin";

export const theme = createMuiTheme(
  merge({}, defaultTheme, {
    palette: {
      // Your theme goes here
      // Write the following code to have an orange app bar. We'll explain it later in this article.
      secondary: {
        main: "#b02626", // Not far from orange
      },
    },
    sidebar: {
      closedWidth: 80,
      width: 260,
    },
  })
);
