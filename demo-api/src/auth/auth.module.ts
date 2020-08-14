import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports:[AdminModule]
})
export class AuthModule {}
