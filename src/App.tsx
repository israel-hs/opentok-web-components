import React from "react";
import { Route, Routes } from "react-router-dom";
import GetMediaLobby from "./lib/GetMediaLobby";
import Home from "./Home";
import Member from "./lib/Member";
import Therapist from "./lib/Therapist";
import { basePath } from "./config";

const memberName = "John Kennedy";
const therapistName = "Nikita Khrushev";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={`/${basePath}`} element={<Home />} />
      <Route
        path={`/${basePath}/lobby/member`}
        element={<GetMediaLobby memberId={memberName} linkTo={"member"} />}
      />
      <Route
        path={`/${basePath}/lobby/therapist`}
        element={
          <GetMediaLobby memberId={therapistName} linkTo={"therapist"} />
        }
      />
      <Route
        path={`/${basePath}/member`}
        element={<Member userId={memberName} />}
      />
      <Route
        path={`/${basePath}/therapist`}
        element={<Therapist userId={therapistName} />}
      />
    </Routes>
  );
};

export default App;
