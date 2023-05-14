import React from "react";
import WebCall from "../WebCall";
import { User } from "./types";

// there might be some logic we want to incorporate to the Therapist only
const Therapist: React.FC<User & { someKey: number }> = ({
  userId,
  someKey,
}) => {
  return <WebCall userId={userId} someKey={someKey} />;
};

export default Therapist;
