import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from "typeorm";
import { User } from './user/entity/user.entity'
import { rootCertificates } from 'tls';

@Module({
  imports: [UserModule, AuthModule, 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    entities: [User],
    synchronize: true,
  }),],  
})
export class AppModule {
  constructor(private connection: Connection){}
}


