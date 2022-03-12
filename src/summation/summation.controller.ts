import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { SummationService } from './summation.service';
import { NewSumDto } from './dto/new-sum.dto'
import { Sum } from './entities/sum.entity'

@ApiTags('summation')
@Controller('/summation')
export class SummationController {
    constructor(private summationService: SummationService) {}
    @ApiOkResponse({ type: Sum })
    @Post()
    executeSum(@Body() body: NewSumDto): Sum {
        return this.summationService.executeSum(body)
    }

}
