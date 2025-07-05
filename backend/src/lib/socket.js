// ✅ backend/src/lib/socket.js
import { Server } from "socket.io";

const userSocketMap = {}; // { userId: socketId }

let ioInstance;

export const initSocket = (server) => {
  ioInstance = new Server(server, {
    cors: {
      origin: [process.env.CLIENT_URL],
      credentials: true,
    },
  });

  ioInstance.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId) userSocketMap[userId] = socket.id;

    ioInstance.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
      delete userSocketMap[userId];
      ioInstance.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
  });

  return ioInstance;
};

export const getReceiverSocketId = (userId) => userSocketMap[userId];
export { ioInstance as io };
