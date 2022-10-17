import { IsString, ArrayNotEmpty, IsArray } from "class-validator";
export class CreateCoffeeDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly brand: string;

    @ArrayNotEmpty()
    @IsArray()
    @IsString({each: true})
    readonly flavors: string[];
}
 