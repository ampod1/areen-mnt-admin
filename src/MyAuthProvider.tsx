import { AuthProvider } from "react-admin";
import { gql } from "@apollo/client";
import { initializeApollo } from "./apollo/apolloClient";

export const USER_FIELDS_FRAGMENT = gql`
  fragment UserFields on core_user {
    id
    code
    email
    created_at
    updated_at
    name
    ext_data
    media
    phone
    user_type_id
  }
`;
export const USER_LOGIN = gql`
  ${USER_FIELDS_FRAGMENT}
  query login($email: String, $password: String) {
    core_user(
      where: {
        email: { _eq: $email }
        passwired: { _eq: $password }
        # value to be added to the host env
        user_type_id: { _eq: "15caa97f-a548-417f-af37-27460ed6049e" }
      }
    ) {
      ...UserFields
    }
    mnt_city {
      id
      label
    }
  }
`;
// TODO move configs and constants outsite auth
export const AUTH_CONSTS = {
  LOGGED_IN: "LOGGED_IN",
  USER_UUID: "USER_UUID",
  MNT_CITIES: "MNT_CITIES",
};

class MyAuthProvider implements AuthProvider {
  async login({ username: email, password }: any) {
    const client = initializeApollo();
    const resp = await client.query({
      query: USER_LOGIN,
      variables: {
        email,
        password,
      },
    });
    console.log(resp?.data?.core_user);
    if (
      resp &&
      resp?.data &&
      resp?.data?.core_user &&
      resp?.data?.core_user?.length > 0
    ) {
      console.log(resp?.data?.core_user);

      localStorage.setItem(AUTH_CONSTS.LOGGED_IN, "true");
      localStorage.setItem(AUTH_CONSTS.USER_UUID, resp?.data?.core_user[0].id);
      if (resp?.data?.mnt_city) {
        console.log(resp?.data?.mnt_city);
        localStorage.setItem(
          AUTH_CONSTS.MNT_CITIES,
          JSON.stringify(resp?.data?.mnt_city)
        );
      }
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
