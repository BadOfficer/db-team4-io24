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