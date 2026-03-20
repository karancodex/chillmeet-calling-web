import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('sessions')
export class SessionsController {
    constructor(private readonly sessionsService: SessionsService) { }

    @UseGuards(JwtAuthGuard)
    @Post('start')
    async start(@Request() req: any, @Body('bookingId') bookingId: string) {
        const { session, listenerId } = await this.sessionsService.startSession(bookingId, req.user.id);
        const token = await this.sessionsService.generateToken(session.id, req.user.name);
        return { session, token, listenerId };
    }

    @UseGuards(JwtAuthGuard)
    @Post('end')
    async end(@Body('sessionId') sessionId: string) {
        return this.sessionsService.endSession(sessionId);
    }
}
