import { ApiProperty } from "@nestjs/swagger";

export class Sum {
    @ApiProperty()
    a: number;
    @ApiProperty()
    b: number;
    @ApiProperty()
    c: number;
}