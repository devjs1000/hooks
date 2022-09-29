import React, { useEffect } from "react";
import socketio from "socket.io-client";

type props = {
  api: string;
};

const useSocket = ({ api }: props) => {
  const socket = socketio(api, {
    upgrade: true,
    transports: ["websocket"],
    rejectUnauthorized: false,
    xhr: false,
    jsonp: false,
    forceNew: true,
    reconnection: true,
    reconnectionAttempts: "Infinity",
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    randomizationFactor: 0.5,
    timeout: 30000,
    autoConnect: true,
    autoReconnect: true,
    secure: false,
  });
  return socket;
};

export default useSocket;
