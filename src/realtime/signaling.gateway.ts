import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
    ConnectedSocket,
    MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class SignalingGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    private logger: Logger = new Logger('SignalingGateway');
    
    // Map of userId to socket.id
    private userSocketMap: Map<string, string> = new Map();

    handleConnection(client: Socket) {
        this.logger.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        // Find which user this was and remove from map
        let disconnectedUserId: string | null = null;
        for (const [userId, socketId] of this.userSocketMap.entries()) {
            if (socketId === client.id) {
                disconnectedUserId = userId;
                this.userSocketMap.delete(userId);
                this.logger.log(`User ${userId} unregistered (disconnected)`);
                break;
            }
        }

        // We don't easily know the rooms here without keeping track or iterating
        // But we can emit a global user-disconnected or rely on the specific rooms they were in if we had them.
        // For now, let's keep it simple or use a room management system if needed.
        
        this.logger.log(`Client disconnected: ${client.id}`);
    }

    @SubscribeMessage('user:register')
    handleRegister(@ConnectedSocket() client: Socket, @MessageBody() data: { userId: string }) {
        if (data.userId) {
            this.userSocketMap.set(data.userId, client.id);
            this.logger.log(`User registered: ${data.userId} -> ${client.id}`);
        }
    }

    @SubscribeMessage('call:initiate')
    handleInitiateCall(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
        const listenerSocketId = this.userSocketMap.get(data.listenerId);
        if (listenerSocketId) {
            this.logger.log(`Initiating call: ${data.callerName} calling listener ${data.listenerId}`);
            this.server.to(listenerSocketId).emit('call:incoming', data);
        } else {
            this.logger.warn(`Listener ${data.listenerId} is offline`);
            client.emit('call:error', { message: 'Listener is currently offline' });
        }
    }

    @SubscribeMessage('call:join')
    handleJoin(@ConnectedSocket() client: Socket, @MessageBody() data: { sessionId: string }) {
        client.join(data.sessionId);
        this.logger.log(`Client ${client.id} joined room: ${data.sessionId}`);
        client.to(data.sessionId).emit('call:user-joined', { userId: client.id });
    }

    @SubscribeMessage('call:leave')
    handleLeave(@ConnectedSocket() client: Socket, @MessageBody() data: { sessionId: string }) {
        client.leave(data.sessionId);
        this.logger.log(`Client ${client.id} left room: ${data.sessionId}`);
        client.to(data.sessionId).emit('call:user-left', { userId: client.id });
    }

    @SubscribeMessage('call:end')
    handleEnd(@ConnectedSocket() client: Socket, @MessageBody() data: { sessionId: string }) {
        this.server.to(data.sessionId).emit('call:ended', data);
    }
}
