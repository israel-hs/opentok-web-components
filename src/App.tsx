import React from "react";
import { Route, Routes } from "react-router-dom";
import GetMediaLobby from "./lib/GetMediaLobby";
import Home from "./Home";
import Member from "./lib/Member";
import Therapist from "./lib/Therapist";

const memberName = "John Kennedy";
const therapistName = "Nikita Khrushev";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/opentok-react" element={<Home />} />
      <Route
        path="/lobby/member"
        element={<GetMediaLobby memberId={memberName} linkTo={"member"} />}
      />
      <Route
        path="/lobby/therapist"
        element={
          <GetMediaLobby memberId={therapistName} linkTo={"therapist"} />
        }
      />
      <Route path="/member" element={<Member userId={memberName} />} />
      <Route path="/therapist" element={<Therapist userId={therapistName} />} />
    </Routes>
  );
};

export default App;
