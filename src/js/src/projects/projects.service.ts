import { BadRequestException, Body, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Project } from './models/project.model';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { DeleteProjectDto } from './dto/delete-project-dto';

@Injectable()
export class ProjectsService {
    constructor(@InjectModel(Project) private projectsRepository: typeof Project) {}

    async create(createProjectDto: CreateProjectDto, userId: number): Promise<Project> {
        const isExistProject = await this.projectsRepository.findOne({where: {
            title: createProjectDto.title,
            userId
        }})

        if(isExistProject) {
            throw new BadRequestException("Project already exist!")
        }

        const newProject = new Project();

        newProject.title = createProjectDto.title;
        newProject.description = createProjectDto.description;
        newProject.userId = userId;

        return await newProject.save()
    }

    async getProject(id: number): Promise<Project> {
        const isExistProject = await this.projectsRepository.findOne({where: {
            id
        }})

        if(!isExistProject) {
            throw new NotFoundException("Project not found!")
        }

        return isExistProject;
    }

    async update(updateProjectDto: UpdateProjectDto, id: number): Promise<Project> {
        const isExistProject = await this.projectsRepository.findOne({where: {
            id,
            userId: updateProjectDto.userId
        }})

        if(!isExistProject) {
            throw new NotFoundException("Project not found!")
        }

        isExistProject.title = updateProjectDto.title === '' ? isExistProject.title : updateProjectDto.title;
        isExistProject.description = updateProjectDto.description === '' ? isExistProject.description : updateProjectDto.description;

        return await isExistProject.save()
    }

    async delete(deleteProjectDto: DeleteProjectDto, id: number) {
        const isExistProject = await this.projectsRepository.findOne({where: {
            id,
            userId: deleteProjectDto.userId
        }})

        if(!isExistProject) {
            throw new NotFoundException("Project not found!")
        }

        await isExistProject.destroy();

        return `Project ${isExistProject.title} has been deleted!`
    }
}
