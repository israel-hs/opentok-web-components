import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <ul>
      <li>
        <Link to="/lobby/member">Member Lobby</Link>
      </li>
      <li>
        <Link to="/lobby/therapist">Therapist Lobby</Link>
      </li>
    </ul>
  );
};

export default Home;
