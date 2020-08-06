import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
    @Get()
    sayHi(): string {
        return 'hi chertila';
    }

    @Get(':id')
    personalGreeting(@Param('id') id: string): string {
        return `hi chertila #${id}`;
    }

    @Post()
    create(@Body() createUser: User) {
        return 'I will put some code here that will be create new user';
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUser: User) {
        return `that code will be updates a user by #${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a user by#${id} `;
    }
}
