import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { DeleteProjectDto } from './dto/delete-project-dto';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsService: ProjectsService) {}

    @Post('create/:id')
    create(@Body() createProjectDto: CreateProjectDto, @Param('id') id: string) {
        return this.projectsService.create(createProjectDto, +id);
    }

    @Get(':id')
    getProject(@Param('id') id: string) {
        return this.projectsService.getProject(+id);
    }

    @Patch('update/:id')
    updateProject(@Body() updateProjectDto: UpdateProjectDto, @Param('id') id: string) {
        return this.projectsService.update(updateProjectDto, +id);
    }

    @Delete('delete/:id')
    deleteProject(@Body() deleteProjectDto: DeleteProjectDto, @Param('id') id: string) {
        return this.projectsService.delete(deleteProjectDto, +id);
    }
}
