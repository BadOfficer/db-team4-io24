import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './models/task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskResponse } from './types/tasks.interface';
import { UpdateTaskDto } from './dto/update-task.dto';
import { DeleteTaskDto } from './dto/delete-task-dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task) private tasksRepository: typeof Task) {}

    async create(createTaskDto: CreateTaskDto, projectId: number): Promise<TaskResponse> {
        const isExistTask = await this.tasksRepository.findOne({where: {
            title: createTaskDto.title,
            projectId
        }})

        if(isExistTask) {
            throw new BadRequestException("Task already exist!")
        }

        const newTask = new Task();

        newTask.title = createTaskDto.title;
        newTask.description = createTaskDto.description;
        newTask.projectId = projectId;

        return await newTask.save()
    }

    async getTask(id: number): Promise<Task> {
        const isExistTask = await this.tasksRepository.findOne({where: {
            id
        }})

        if(!isExistTask) {
            throw new NotFoundException("Task not found!")
        }

        return isExistTask;
    }

    async update(updateProjectDto: UpdateTaskDto, id: number): Promise<Task> {
        const isExistTask = await this.tasksRepository.findOne({where: {
            id,
            projectId: updateProjectDto.projectId
        }})

        if(!isExistTask) {
            throw new NotFoundException("Task not found!")
        }

        isExistTask.title = updateProjectDto.title === '' ? isExistTask.title : updateProjectDto.title;
        isExistTask.description = updateProjectDto.description === '' ? isExistTask.description : updateProjectDto.description;

        return await isExistTask.save()
    }

    async delete(deleteTaskDto: DeleteTaskDto, id: number) {
        const isExistTask = await this.tasksRepository.findOne({where: {
            id,
            projectId: deleteTaskDto.projectId
        }})

        if(!isExistTask) {
            throw new NotFoundException("Task not found!")
        }

        await isExistTask.destroy();

        return `Task ${isExistTask.title} has been deleted!`
    }
}
