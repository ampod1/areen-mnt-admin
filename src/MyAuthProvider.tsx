import { AuthProvider } from "react-admin";

const AUTH_CONSTS = {
  LOGGED_IN: "LOGGED_IN",
};
class MyAuthProvider implements AuthProvider {
  async login({ username, password }: any) {
    console.log("%c Mo2Log login ", "background: #bada55", username, password);
    if (username === password) {
      localStorage.setItem(AUTH_CONSTS.LOGGED_IN, "true");
    }
  }

  async logout() {
    localStorage.removeItem(AUTH_CONSTS.LOGGED_IN);
  }

  async checkAuth() {
    console.log("checkAuth");
    let loggedIn = localStorage.getItem(AUTH_CONSTS.LOGGED_IN);
    if (loggedIn !== "true") throw Error("Not logged in");
  }

  async checkError() {}

  async getPermissions() {}
}

export { MyAuthProvider };
