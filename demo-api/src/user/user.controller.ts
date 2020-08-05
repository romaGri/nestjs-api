import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    sayHi(): string {
        return 'hi pityx';
    }
}
