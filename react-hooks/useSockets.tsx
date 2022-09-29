import React, { useEffect } from "react";
import socketio from 'socket.io-client';
import { addPurchaser, addSeller, addCategory, addGroup, addParty, addStock, addTransit, addUsers } from "../actions/list.action";
import { useDispatch } from "react-redux";
const api = process.env.REACT_APP_API;

const useSocket = () => {
    const dispatch = useDispatch()
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

    useEffect(() => {
        socket.on("refreshStock", () => dispatch(addStock()));
        socket.on("refreshParty", () => dispatch(addParty()));
        socket.on("refreshCategory", () => dispatch(addCategory()));
        socket.on("refreshSecurity", () => dispatch(addGroup()));
        socket.on("refreshUser", () => dispatch(addUsers()));
        socket.on("refreshBuy", () => dispatch(addPurchaser()));
        socket.on("refreshSell", () => dispatch(addSeller()));
        socket.on("refreshTransit", () => {
            dispatch(addTransit());
            dispatch(addSeller())
            dispatch(addPurchaser())
        });

        return () => {
            socket.removeAllListeners();
        };
    }, []);

    return ''
}

export default useSocket;