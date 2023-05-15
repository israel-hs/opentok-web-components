import React, { useRef, useEffect } from "react";

import "@vonage/video-publisher/video-publisher.js";
import "@vonage/video-subscribers/video-subscribers.js";
import { Members, User } from "./lib/types";
import { addMember, getMembers } from "./api/callApi";

import { apiKey, sessionId, token } from "./config";

function WebCall({ userId }: User) {
  // Get references to Web Components
  const publisher = useRef(null) as any;
  const subscribers = useRef(null) as any;
  // const screenshare = useRef(null);

  const toggleVideo = () => {
    publisher.current.toggleVideo();
  };

  const toggleAudio = () => {
    publisher.current.toggleAudio();
  };

  useEffect(() => {
    console.log(userId);

    if (userId) {
      const addMemberToCall = async () => {
        try {
          await addMember(userId);
        } catch (error) {
          console.error(error);
        }
      };

      addMemberToCall();
    }

    // let interval: number;
    // if (!connectionReady) {
    //   interval = setInterval(async () => {
    //     const { members }: Members = await getMembers();
    //     console.log("members", members);
    //     if (members.length > 1) setConnectionReady(true);
    //   }, 1500);
    // }

    const OT = (window as any).OT;

    // Initialize an OpenTok Session object
    const session = OT.initSession(apiKey, sessionId);

    // Set session and token for Web Components
    console.log("publisher.current", publisher.current);
    publisher.current.session = session;
    publisher.current.token = token;
    subscribers.current.session = session;
    subscribers.current.token = token;
    /*
    if (connectionReady) {
      subscribers.current.session = session;
      subscribers.current.token = token;
    }
    */

    // return () => {
    //   if (interval) {
    //     clearInterval(interval);
    //   }
    // };
  }, []);

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
