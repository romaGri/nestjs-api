import { Admin } from './models/admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
    private readonly admins: Admin[];

    constructor() {
        this.admins = [
            {
                id: 1,
                login:'roma',
                password:'1234'
            },
            {
                id:2, 
                login: 'neRoma',
                password: '1111'
            }
        ];
    }

    async findOneBylogin(login:string): Promise<Admin | undefined> {
        return this.admins.find(admin => admin.login === login);
    }
}