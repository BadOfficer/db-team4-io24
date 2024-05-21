import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/models/user.model';
import { Project } from './models/project.model';
import { Task } from 'src/tasks/models/task.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Project, Task])],
  providers: [ProjectsService],
  controllers: [ProjectsController]
})
export class ProjectsModule {}
