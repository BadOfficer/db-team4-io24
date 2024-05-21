import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { DeleteTaskDto } from './dto/delete-task-dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Post('create/:id')
    createTask(@Body() createTaskDto: CreateTaskDto, @Param("id") projectId: string) {
        return this.tasksService.create(createTaskDto, +projectId);
    }

    @Get(':id')
    getProject(@Param('id') id: string) {
        return this.tasksService.getTask(+id);
    }

    @Patch('update/:id')
    updateTask(@Body() updateTaskDto: UpdateTaskDto, @Param('id') id: string) {
        return this.tasksService.update(updateTaskDto, +id);
    }

    @Delete('delete/:id')
    deleteTask(@Body() deleteTaskDto: DeleteTaskDto, @Param('id') id: string) {
        return this.tasksService.delete(deleteTaskDto, +id);
    }
}
