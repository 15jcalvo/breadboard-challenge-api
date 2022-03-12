import { SummationService } from './summation.service';
import { NewSumDto } from './dto/new-sum.dto';
import { Sum } from './entities/sum.entity';
export declare class SummationController {
    private summationService;
    constructor(summationService: SummationService);
    executeSum(body: NewSumDto): Sum;
}
