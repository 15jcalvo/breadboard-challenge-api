import { ApiProperty } from "@nestjs/swagger";

export class NewSumDto {
    @ApiProperty()
    a: number
    @ApiProperty()
    b: number
}