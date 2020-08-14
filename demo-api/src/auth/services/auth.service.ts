import { Injectable } from '@nestjs/common';
import { AdminRepository } from 'src/admin/services/admin.repository';
import { Admin } from 'src/admin/models/admin';

@Injectable()
export class AuthService {

    constructor(private adminRepository: AdminRepository) {
    }
    async validateAdmin(login: string, password: string): Promise<Admin | null> {
        const admin: Admin = await this.adminRepository.findOneBylogin(login);

        if (admin && admin.password === password) {
            const { password, ...result } = admin;
            return result;
        }
        return null;
    }


}
