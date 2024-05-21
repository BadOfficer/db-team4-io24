import { IsNumber, IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsNumber()
    readonly projectId: number;
}