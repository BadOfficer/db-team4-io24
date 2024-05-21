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