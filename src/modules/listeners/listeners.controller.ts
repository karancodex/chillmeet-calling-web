import { Controller, Post, Get, Param, Body, UseGuards, Request, Patch } from '@nestjs/common';
import { ListenersService } from './listeners.service';
import { ApplyListenerDto } from './dto/listener.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from '../../guards/roles.decorator';
import { UserRole } from '../../database/entities/user.entity';

@Controller('listeners')
export class ListenersController {
    constructor(private readonly listenersService: ListenersService) { }

    @UseGuards(JwtAuthGuard)
    @Post('apply')
    async apply(@Request() req: any, @Body() applyDto: ApplyListenerDto) {
        return this.listenersService.apply(req.user.id, applyDto);
    }

    @Get()
    async findAll() {
        return this.listenersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.listenersService.findOne(id);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    @Patch(':id/approve')
    async approve(@Param('id') id: string) {
        return this.listenersService.approve(id);
    }
}
