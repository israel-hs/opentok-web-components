import React from "react";
import WebCall from "../WebCall";
import { User } from "./types";

// there might be some logic we want to incorporate to the Member
// as opposed to the Therapist
const Member: React.FC<User> = ({ userId }) => {
  return <WebCall userId={userId} />;
};

export default Member;
