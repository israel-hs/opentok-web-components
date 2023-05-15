import React from "react";
import { Link } from "react-router-dom";
import { basePath } from "./config";

const Home: React.FC = () => {
  return (
    <ul>
      <li>
        <Link to={`/${basePath}/lobby/member`}>Member Lobby</Link>
      </li>
      <li>
        <Link to={`/${basePath}/lobby/therapist`}>Therapist Lobby</Link>
      </li>
    </ul>
  );
};

export default Home;
