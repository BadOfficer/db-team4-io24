import { IsNumber, IsString } from "class-validator";

export class DeleteProjectDto {
    @IsNumber()
    readonly userId: number;
}