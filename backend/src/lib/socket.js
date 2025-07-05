// ✅ backend/src/lib/socket.js
import { Server } from "socket.io";

const userSocketMap = {}; // { userId: socketId }

export const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: [process.env.CLIENT_URL],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId) userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
      delete userSocketMap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
  });

  return io;
};

export const getReceiverSocketId = (userId) => userSocketMap[userId];
