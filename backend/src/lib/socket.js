import { Server } from "socket.io";
import http from "http";

let userSocketMap = {}; // { userId: socketId }

export const getReceiverSocketId = (userId) => {
  return userSocketMap[userId];
};

export function initSocketServer(app) {
  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173", "https://your-frontend.onrender.com"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId) userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
      delete userSocketMap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
  });

  return server;
}
