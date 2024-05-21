import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Project } from 'src/projects/models/project.model';
import { Task } from './models/task.model';

@Module({
  imports: [SequelizeModule.forFeature([Project, Task])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
