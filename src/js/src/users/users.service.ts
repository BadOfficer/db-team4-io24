import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponse } from './types/user.interface';
import * as bcrypt from "bcrypt";
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private usersRepository: typeof User) {}

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }

    async createUser(createUserDto: CreateUserDto): Promise<UserResponse> {
        const isExistUser = await this.usersRepository.findOne({where: {username: createUserDto.username}});

        if(isExistUser) {
            throw new BadRequestException("User with this email already exist");
        }

        const password = await this.hashPassword(createUserDto.password);

        return await this.usersRepository.create({
            username: createUserDto.username,
            password: password
        })
    }

    async updateUser(updateUSerDto: UpdateUserDto, id: number): Promise<UserResponse> {
        const isExistUserName = await this.usersRepository.findOne({where: {username: updateUSerDto.username}})
        const isExistUserId = await this.usersRepository.findOne({where: {id}})

        if(!isExistUserId) {
            throw new NotFoundException("User with this username not found");
        }

        if(isExistUserName) {
            throw new BadRequestException("User with this username already exist!")
        }

        const confirmedPassword = await bcrypt.compare(updateUSerDto.oldPassword, isExistUserId.password)

        if(confirmedPassword) {
            const newPassword = updateUSerDto.newPassword === '' ? isExistUserId.password : await this.hashPassword(updateUSerDto.newPassword);

            isExistUserId.username = updateUSerDto.username;
            isExistUserId.password = newPassword;

            return await isExistUserId.save();
        }

        throw new BadRequestException("Password don't confirmed");
    }

    async deleteUser(id: number): Promise<string> {
        const isExistUser = await this.usersRepository.findOne({where: {id}})

        if(!isExistUser) {
            throw new NotFoundException("User not found");
        }
        await isExistUser.destroy()

        return `User - ${isExistUser.username} has been deleted`
    }

    async getUser(id: number): Promise<UserResponse> {
        const isExistUser = await this.usersRepository.findOne({where: {id}})

        if(!isExistUser) {
            throw new NotFoundException("User not found");
        }

        return isExistUser;
    }
}
