import { IsNumber, IsString } from "class-validator";

export class UpdateProjectDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsNumber()
    readonly userId: number;
}