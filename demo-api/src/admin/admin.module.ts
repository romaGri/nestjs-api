import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminRepository } from './services/admin.repository';

@Module({
  controllers: [AdminController],
  providers: [AdminRepository],
  exports: [AdminRepository]
})

export class AdminModule { }
