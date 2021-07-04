import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import React, { useEffect, useState } from "react";
//@ts-ignore
import buildHasuraProvider from "ra-data-hasura";
import {
  Admin,
  EditGuesser,
  LegacyDataProvider,
  ListGuesser,
  Login,
  Resource,
} from "react-admin";
import "./App.css";
import { MyAuthProvider } from "./MyAuthProvider";
import RoomsList from "./components/rooms/RoomsList";
import MeetingRoomsList from "./components/meetings/MeetingRooms";
import EditMeetingRoom from "./components/meetings/EditMeetingRoom";
import CreateMeetingRoom from "./components/meetings/CreateMeetingRoom";
import CreateRate from "./components/rates/CreateRate";
import EditRate from "./components/rates/EditRate";
import CreateRoomRate from "./components/roomrates/CreateRoomRate";
import EditRoom from "./components/rooms/EditRoom";
import CreateRoom from "./components/rooms/CreateRoom";
import RoomRatesList from "./components/roomrates/RoomRatesList";
import EditRoomRate from "./components/roomrates/EditRoomRate";
import CreateSetting from "./components/settings/CreateSetting";
import EditSetting from "./components/settings/EditSetting";
import { theme } from "./theme";
import GalleryList from "./components/gallery/GalleryList";
import EditGallery from "./components/gallery/EditGallery";
import CreateGallery from "./components/gallery/CreateGallery";
import CustLoginPage from "./CustLoginPage";
const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret": process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
};

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: "https://caring-labrador-34.hasura.app/v1/graphql",
      headers,
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: { fetchPolicy: "network-only" },
    },
  });
};

const client = createApolloClient();
function App() {
  const [dataProvider, setDataProvider] = useState(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        client,
      });
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;
  return (
    <>
      <ApolloProvider client={client}>
        <div style={{display:"flex", justifyContent:"center", margin:"3em 1em 1em 1em"}}>
			<img src="https://i.imgur.com/e6M6rwe.png" alt="" />
		</div>
        <Admin
          authProvider={new MyAuthProvider()}
          theme={theme}
          dataProvider={dataProvider!}
          loginPage={CustLoginPage}
        >
          <Resource
            name="core_user"
            list={ListGuesser}

          />
        </Admin>
      </ApolloProvider>
    </>
  );
}

export default App;
