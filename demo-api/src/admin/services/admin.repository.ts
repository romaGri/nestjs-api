import { Admin } from '../models/admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminRepository {
    private readonly admins: Admin[];

    constructor() {
        this.admins = [
            {
                id: 1,
                login:'roma',
                password:'1234'
            }
        ];
    }

    async findOneBylogin(login:string): Promise<Admin | undefined> {
        return this.admins.find(admin => admin.login === login);
    }
}