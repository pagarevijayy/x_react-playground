import { Route, Switch } from "react-router-dom";
import Basic from "./Basic";
import NavBar from "./components/NavBar";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";

const App = () => {
  return (
    <div className="App text-gray-700 container mx-auto">
      <NavBar />
      <div className="px-8">
        <Switch>
          <Route path="/" exact>
            <Basic />
          </Route>
          <Route path="/all-meetups">
            <AllMeetupsPage />
          </Route>{" "}
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
