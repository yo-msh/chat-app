import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

// Create a server and pass the express
const server = http.createServer(app);

// Create an instance of the Server class and pass the server
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

// This function is used to get the socket id of the receiver
export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

// This object is used to store the mapping of userId to socketId
const userSocketMap = {}; // {userId: socketId}

// io.on() is used to listen to the events. can be used only on server side
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != "undefined") userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  // socket.on() is used to listen to the events. can be used both on client and server side
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
