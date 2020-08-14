import { Injectable } from '@nestjs/common';
import { AdminRepository } from 'src/admin/services/admin.repository';
 
@Injectable()
export class AuthService {

    constructor(private adminRepository: AdminRepository) {
        
    }

    async validateAdmin(login: string, password: string):Promise<any>{
        return null;
    }
}
