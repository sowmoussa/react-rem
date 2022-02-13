import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesMeetupPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new">
            <NewMeetupPage />
          </Route>
          <Route path="/favourites">
            <FavouritesMeetupPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
