import React, { useRef, useEffect } from "react";

import "@vonage/video-publisher/video-publisher.js";
import "@vonage/video-subscribers/video-subscribers.js";
import { User } from "./lib/types";
import { addMember } from "./api/callApi";

import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router";

function WebCall({ userId, someKey }: User & { someKey: number }) {
  // const location = useLocation();
  // const navigate = useNavigate();
  // Get references to Web Components
  const publisher = useRef(null) as any;
  const subscribers = useRef(null) as any;
  // const screenshare = useRef(null);

  // These values normally come from the backend in a production application, but for this demo, they are hardcoded

  const apiKey = "45828062";
  const sessionId =
    "2_MX40NTgyODA2Mn5-MTY4NDA4Nzk3ODM5MX5pbjcray8rNEpMckZoUG9oSEcvWUs4dmF-UH5-";
  const token =
    "T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9NDIzODc5NjRjMGE1OWZkMGE3NzYyMWViY2MxNmU3NDlkOTAzMGVmNTpzZXNzaW9uX2lkPTJfTVg0ME5UZ3lPREEyTW41LU1UWTROREE0TnprM09ETTVNWDVwYmpjcmF5OHJORXBNY2tab1VHOW9TRWN2V1VzNGRtRi1VSDUtJmNyZWF0ZV90aW1lPTE2ODQwOTQ3Mzgmbm9uY2U9MC4zMjUwMzI5NDYxNzQxMTE1JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2ODQxODExMzg=";

  const toggleVideo = () => {
    publisher.current.toggleVideo();
  };

  const toggleAudio = () => {
    publisher.current.toggleAudio();
  };

  useEffect(() => {
    console.log(userId);
    console.log(location);
    console.log("someKey", someKey);

    const addMemberToCall = async () => {
      try {
        await addMember(userId);
      } catch (error) {
        console.error(error);
      }
    };

    addMemberToCall();

    const OT = (window as any).OT;

    // Initialize an OpenTok Session object
    const session = OT.initSession(apiKey, sessionId);

    // Set session and token for Web Components
    console.log("publisher.current", publisher.current);
    publisher.current.session = session;
    publisher.current.token = token;
    subscribers.current.session = session;
    subscribers.current.token = token;
  }, [someKey]);

  return (
    <div className="App">
      <div className="App-container">
        <section className="App-section-publisher">
          <fieldset>
            <legend>Publisher</legend>
            <video-publisher
              width="360px"
              height="240px"
              ref={publisher}
            ></video-publisher>
          </fieldset>
          <button onClick={toggleVideo}>toggle Video</button>
          <button onClick={toggleAudio}>toggle Audio</button>
        </section>
        <section className="App-section-subscribers">
          <fieldset>
            <legend>Subscribers</legend>
            <video-subscribers
              width="360px"
              height="240px"
              ref={subscribers}
            ></video-subscribers>
          </fieldset>
        </section>
      </div>
    </div>
  );
}

export default WebCall;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "video-publisher": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        width: string;
        height: string;
      };
      "video-subscribers": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        width: string;
        height: string;
      };
    }
  }
}
