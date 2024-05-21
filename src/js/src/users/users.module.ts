import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { Project } from 'src/projects/models/project.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Project])],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
