import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/create')
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Patch("/update/:id")
    update(@Body() UpdateUserDto: UpdateUserDto, @Param('id') id: string) {
        return this.usersService.updateUser(UpdateUserDto, +id);
    }

    @Delete('/delete/:id')
    delete(@Param('id') id: string) {
        return this.usersService.deleteUser(+id);
    }

    @Get('/:id')
    getUser(@Param('id') id: string) {
        return this.usersService.getUser(+id);
    }
}
