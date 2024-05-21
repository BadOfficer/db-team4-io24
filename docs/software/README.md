# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db-io24-team4
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db-io24-team4
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db-io24-team4` DEFAULT CHARACTER SET utf8 ;
USE `db-io24-team4` ;

-- -----------------------------------------------------
-- Table `db-io24-team4`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`user` (
  `id` INT NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `nickname` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `nickname_UNIQUE` (`nickname` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`role` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`member` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_member_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_member_Role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `db-io24-team4`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_member_Role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `db-io24-team4`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`permission` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`grant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`grant` (
  `id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `permission_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Grant_Role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_grant_permission1_idx` (`permission_id` ASC) VISIBLE,
  CONSTRAINT `fk_Grant_Role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `db-io24-team4`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_grant_permission1`
    FOREIGN KEY (`permission_id`)
    REFERENCES `db-io24-team4`.`permission` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`project` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(150) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`project_member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`project_member` (
  `id` INT NOT NULL,
  `member_id` INT NOT NULL,
  `project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_project_member_member1_idx` (`member_id` ASC) VISIBLE,
  INDEX `fk_project_member_project1_idx` (`project_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_member_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `db-io24-team4`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_project_member_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `db-io24-team4`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-io24-team4`.`task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-io24-team4`.`task` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(150) NOT NULL,
  `isCompleted` TINYINT NOT NULL,
  `project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_task_project1_idx` (`project_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `db-io24-team4`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`role` (`id`, `name`) VALUES (1, `ProjectOwner`);
INSERT INTO `db-io24-team4`.`role` (`id`, `name`) VALUES (2, `Developer`);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`permission`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (1, `create_task`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (2, `delete_task`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (3, `change_task_description`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (4, `change_project_description`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (5, `add_user`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (6, `delete_user`);
INSERT INTO `db-io24-team4`.`permission` (`id`, `name`) VALUES (7, `delete_project`);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`grant`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (1, 1, 1);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (2, 1, 2);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (3, 1, 3);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (4, 1, 4);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (5, 1, 5);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (6, 1, 6);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (7, 1, 7);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (8, 2, 1);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (9, 2, 2);
INSERT INTO `db-io24-team4`.`grant` (`id`, `role_id`, `permission_id`) VALUES (10, 2, 3);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `db-io24-team4`;
INSERT INTO `db-io24-team4`.`user` (`id`, `email`, `nickname`, `password`) VALUES (1, `yellowmonkey@gmail.com`, `yellowmonkey`, `Bws3YXQ8`);
INSERT INTO `db-io24-team4`.`user` (`id`, `email`, `nickname`, `password`) VALUES (2, `wonderful@gmail.com`, `w0nderful`, `NW4Xzm4h`);
INSERT INTO `db-io24-team4`.`user` (`id`, `email`, `nickname`, `password`) VALUES (3, `denysholovin03@gmail.com`, `holovin.d`, `sDnGtCiN`);

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`member`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`member` (`id`, `user_id`, `role_id`) VALUES (1, 1, 1)
INSERT INTO `db-io24-team4`.`member` (`id`, `user_id`, `role_id`) VALUES (2, 2, 2)
INSERT INTO `db-io24-team4`.`member` (`id`, `user_id`, `role_id`) VALUES (3, 3, 2)

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`project_member`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`project_member` (`id`, `member_id`, `project_id`) VALUES (1, 1, 1)
INSERT INTO `db-io24-team4`.`project_member` (`id`, `member_id`, `project_id`) VALUES (2, 2, 1)
INSERT INTO `db-io24-team4`.`project_member` (`id`, `member_id`, `project_id`) VALUES (3, 3, 1)

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`project`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`project` (`id`, `name`, `description`) VALUES (1, `course work`, `Our course work`)

COMMIT;

-- -----------------------------------------------------
-- Data for table `db-io24-team4`.`task`
-- -----------------------------------------------------
START TRANSACTION;
USE 'db-io24-tean4';
INSERT INTO `db-io24-team4`.`task` (`id`, `name`, `description`, `isCompleted`, `project_id`) VALUES (1, `Frontend`, `Frontend part`, 0, 1)
INSERT INTO `db-io24-team4`.`task` (`id`, `name`, `description`, `isCompleted`, `project_id`) VALUES (2, `Backend`, `Backend part`, 0, 1)

COMMIT;
```

## RESTfull сервіс для управління даними
### Головний модуль
```typescript
  import { Module } from "@nestjs/common";
  import { ConfigModule } from "@nestjs/config";
  import { SequelizeModule } from "@nestjs/sequelize";
  import { ProjectsModule } from './projects/projects.module';
  import { TasksModule } from './tasks/tasks.module';
  import { UsersModule } from './users/users.module';
  import { User } from "./users/models/user.model";
  import { Project } from "./projects/models/project.model";
  import { Task } from "./tasks/models/task.model";

  @Module({
    imports: [
      ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models:[User, Project, Task],
      synchronize: true,
      autoLoadModels: true,
    }), ProjectsModule, TasksModule, UsersModule],
    controllers: [],
    providers: [],
  })
  export class AppModule {}
```

### Модель Користувача
```typescript
import { Column, DataType, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Project } from "src/projects/models/project.model";

@Table({tableName: "users"})
export class User extends Model{
    @Column({unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({unique: true, type: DataType.STRING})
    username: string;

    @Column({type: DataType.STRING})
    password: string;

    @HasMany(() => Project, {onDelete: 'CASCADE'})
    projects: Project[];
}
```

### Сервіс для обробки запитів(користувачі)
```typescript
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
```

### Контролер для обробки запитів(користувачі)
```typescript
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
```

### Модуль користуваів
```typescript
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

```

### Модель Проєкта
```typescript
import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { Task } from "src/tasks/models/task.model";
import { User } from "src/users/models/user.model";
import { UserResponse } from "src/users/types/user.interface";

@Table({tableName: 'projects'})
export class Project extends Model {
    @Column({unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsTo(() => User, {onDelete: "CASCADE"})
    user: UserResponse;
    
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @HasMany(() => Task, {onDelete: 'CASCADE'})
    tasks: Task[];
}
```
### Сервіс для обробки запитів(проєкти)
```typescript
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

```
### Контролер для обробки запитів(проєкти)
```typescript
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

```
### Модуль проєктів
```typescript
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

```

### Модель Завдання
```typescript
import { BelongsTo, Column, DataType, Default, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { Project } from "src/projects/models/project.model";

@Table({tableName: 'tasks'})
export class Task extends Model {
    @Column({unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @BelongsTo(() => Project, {onDelete: "CASCADE"})
    project: Project;
    
    @ForeignKey(() => Project)
    @Column({type: DataType.INTEGER})
    projectId: number;
}
```
### Сервіс для обробки запитів(завдання)
```typescript
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

```
### Контролер для обробки запитів(завдання)
```typescript
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

```
### Модуль завдань
```typescript
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

```