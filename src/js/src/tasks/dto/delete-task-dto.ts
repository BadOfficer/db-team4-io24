import { IsNumber, IsString } from "class-validator";

export class DeleteTaskDto {
    @IsNumber()
    readonly projectId: number;
}