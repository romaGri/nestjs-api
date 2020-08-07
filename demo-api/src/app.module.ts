import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UserModule, AuthModule, TypeOrmModule.forRoot(), AdminModule],
  exports: [TypeOrmModule]
})
export class AppModule {}


