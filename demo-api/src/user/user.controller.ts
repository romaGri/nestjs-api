import { Controller, Get, Param, Body, Post, Put, Delete, NotFoundException } from '@nestjs/common';
import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { CreateDto, UpdateDto } from './dto';
import { PassThrough } from 'stream';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Get()
    getAllUsers(): Promise<User[]> {
        return this.userService.findAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string): Promise<User> {
        return this.userService.findOneUser(id);
    }

    @Post()
    create(@Body() createDto: CreateDto): Promise<User> {
        const user = new User();
        user.firstName = createDto.firstName;
        user.lastName = createDto.lastName;
        user.isActive = createDto.isActive;
        return this.userService.createUser(user);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() updateDto: UpdateDto): Promise<User> {
        const user = await this.userService.findOneUser(id);
        if(user === undefined){
            throw new NotFoundException(`User with id ${id} not found`);
        }
        user.firstName = updateDto.firstName;
        user.lastName = updateDto.lastName;
        user.isActive = updateDto.isActive; 

        return this.userService.updateUser(user);;
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.userService.removeUser(id);
    }
}
