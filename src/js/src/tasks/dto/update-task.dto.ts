import { IsNumber, IsString } from "class-validator";

export class UpdateTaskDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsNumber()
    readonly projectId: number;
}