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