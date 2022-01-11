import express from "express";
import setupRoutes from "./routes/router.js";
import uniqid from "uniqid";
import { Server } from "socket.io";
import Messenger from "./models/messengerModel.js";

const app = express();
const port = 3001;

setupRoutes(app);

const server = app.listen(port, () => console.log(`✅ Server listening at http://localhost:${port}`));

const io = new Server(server);

const messages = Messenger.getAll();
const newMessages = Messenger.create();

io.on("connect", (socket) => {
  console.log("user connected");
  // [ONE] ::TODO connect to the DB, get all messages and send them to the client
  // under the event 'initialMessageList'
  socket.emit("initialMessageList", messages);

  // receive message from client (on)
  // messageFromClient event is emitted by client
  socket.on("messageFromClient", (newMessage) => {
    // add message to messages array
   
    // log new message from client
    console.log("new message from a client: ", newMessage);
    // add new message to messages array
    messages.push(newMessage);
    // resend this message to the client (emit)
    io.emit("messageFromServer", newMessage);
  });

  // [TWO] ::TODO listen to the 'messageFromClient' event and save the message to the DB
  // then send the new message to the client under the event 'messageFromServer'

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
