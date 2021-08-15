import { createTheme } from "@material-ui/core";
import merge from "lodash/merge";
import { defaultTheme } from "react-admin";

const locale = localStorage.getItem("current_locale");

const rtlTheme = createTheme({
  direction: locale && locale === "ar" ? "rtl" : "ltr",
});
export const theme = createTheme(
  merge({}, defaultTheme, rtlTheme, {
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
