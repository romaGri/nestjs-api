import { Injectable } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/models/admin';

@Injectable()
export class AuthService {

    constructor(private adminService: AdminService) {
    }
    async validateAdmin(login: string, password: string): Promise<Admin | null> {
        const admin: Admin = await this.adminService.findOneBylogin(login);

        if (admin && admin.password === password) {
            const { password, ...result } = admin;
            return result;
        }
        return null;
    }


}
