import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    findAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOneUser(id: string): Promise<User> {
        return this.userRepository.findOne(id);
    }

    createUser(user: User): Promise<User> 
    {
        delete user.id;
        return this.userRepository.save(user);
    }

    updateUser(user: User): Promise<User>{
        return this.userRepository.save(user);
    }

    async removeUser(id: string): Promise<void> {
        this.userRepository.delete(id);
    }
}

