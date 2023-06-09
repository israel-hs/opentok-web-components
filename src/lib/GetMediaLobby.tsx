import React, { useEffect, useState } from "react";
import type { Member, Members } from "./types";
import { getMembers, removeMember } from "../api/callApi";
import { Link } from "react-router-dom";
import { basePath } from "../config";

/**
 * This component is meant to wrap a Video component and initially
 * check if someone else is connected (publishing) already.
 *
 * It is meant to be extended to do other stuff like checking media
 * configuration before letting the user jump into a call.
 */

interface LobbyProps {
  memberId: Member;
  linkTo: string;
}

const Lobby: React.FC<LobbyProps> = ({ memberId, linkTo }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [connectedMembers, setConnectedMembers] = useState<Members["members"]>(
    []
  );

  useEffect(() => {
    setIsLoading(true);

    let interval: number;
    const removeMemberAndPoll = async () => {
      // first make sure that a member that is in the lobby doesn't exist in a call
      // ToDo: what if this fails?
      await removeMember(memberId);

      // poll data from the server every 2 secs
      interval = setInterval(async () => {
        try {
          const { members }: Members = await getMembers();
          setConnectedMembers(members);
          setIsLoading(false);
          console.log("members", members);
        } catch (error) {
          console.error(error);
        }
      }, 2000);
    };

    removeMemberAndPoll();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const membersList = connectedMembers.map((member) => (
    <li key={member}>{member}</li>
  ));

  return (
    <>
      {isLoading ? (
        <div>Loading data...</div>
      ) : (
        <>
          {connectedMembers.length ? (
            <div>
              The following members are already in the call:
              <ul>{membersList}</ul>
            </div>
          ) : (
            <div>There are no connected members</div>
          )}
          <Link to={`/${basePath}/${linkTo}`} reloadDocument>
            <button>{`Go to ${linkTo}`}</button>
          </Link>
        </>
      )}
    </>
  );
};

export default Lobby;
