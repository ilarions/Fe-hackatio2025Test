import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:9000/game";

class SocketService {
  private socket: Socket | null = null;

  connect() {
    if (!this.socket) {
      this.socket = io(SOCKET_URL, {
        transports: ["websocket"],
      });

      this.socket.on("connect", () => {
        console.log("✅ WebSocket подключен");
      });

      this.socket.on("disconnect", () => {
        console.log("❌ WebSocket отключен");
      });
    }
  }

  disconnect() {
    this.socket?.disconnect();
    this.socket = null;
  }

  sendMessage(event: string, data: any) {
    this.socket?.emit(event, data);
  }

  onMessage(event: string, callback: (data: any) => void) {
    this.socket?.on(event, callback);
  }
}

const socketService = new SocketService();
export default socketService;
