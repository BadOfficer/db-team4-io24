import { IsNumber, IsString } from "class-validator";

export class CreateProjectDto {
    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;

    @IsNumber()
    readonly userId: number;
}