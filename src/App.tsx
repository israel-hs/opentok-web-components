import React from "react";
// import { Route, Routes } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

// import Home from "./Home";
// import Lobby from "./lib/Lobby";
// import { useNavigate } from "react-router-dom";

import GetMediaLobby from "./lib/GetMediaLobby";
import Home from "./Home";
import Member from "./lib/Member";
import Therapist from "./lib/Therapist";

const memberName = "John Kennedy";
const therapistName = "Nikita Khrushev";

const App: React.FC = () => {
  const history = useHistory();
  // const navigate = useNavigate();

  // const navigateTo = (route: string) => {
  //   navigate(`/opentok-react/${route}`, { state: {} });
  // };

  return (
    <Router>
      <Switch>
        <Route exact path="/opentok-react/" component={Home} />
        <Route
          path="/opentok-react/lobby/member"
          render={() => (
            <GetMediaLobby memberId={memberName} linkTo={"member"} />
          )}
        />
        <Route
          path="/opentok-react/lobby/therapist"
          render={() => (
            <GetMediaLobby memberId={therapistName} linkTo={"therapist"} />
          )}
        />
        <Route
          path="/opentok-react/member"
          render={() => (
            <Member userId={memberName} someKey={Math.random() * 100} />
          )}
        />
        <Route
          path="/opentok-react/therapist"
          render={() => (
            <Therapist userId={therapistName} someKey={Math.random() * 100} />
          )}
        />
      </Switch>
    </Router>
    // <Routes>
    //   <Route path="/opentok-react/" element={<Home />} />
    //   <Route
    //     path="/opentok-react/lobby/member"
    //     element={
    //       <GetMediaLobby
    //         memberId={memberName}
    //         linkTo={"member"}
    //         addToCall={() => navigateTo("member")}
    //       />
    //     }
    //   />
    //   <Route
    //     path="/opentok-react/lobby/therapist"
    //     element={
    //       <GetMediaLobby
    //         memberId={therapistName}
    //         linkTo={"therapist"}
    //         addToCall={() => navigateTo("therapist")}
    //       />
    //     }
    //   />
    //   <Route
    //     path="/opentok-react/member"
    //     Component={() => <Member userId={memberName} />}
    //   />
    //   <Route
    //     path="/opentok-react/therapist"
    //     element={<Therapist userId={therapistName} />}
    //   />
    // </Routes>
  );
};

export default App;
