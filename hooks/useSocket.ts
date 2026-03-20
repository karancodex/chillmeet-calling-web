import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocket = (sessionId?: string, userId?: string, listenerId?: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001');
    
    newSocket.on('connect', () => {
      console.log('Connected to socket server');
      if (userId) {
        newSocket.emit('user:register', { userId });
      }
      if (listenerId) {
        newSocket.emit('user:register', { userId: listenerId });
      }
      if (sessionId) {
        newSocket.emit('call:join', { sessionId });
      }
    });

    setSocket(newSocket);

    return () => {
      if (sessionId) {
        newSocket.emit('call:leave', { sessionId });
      }
      newSocket.disconnect();
    };
  }, [sessionId, userId]);

  return socket;
};
