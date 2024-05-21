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
