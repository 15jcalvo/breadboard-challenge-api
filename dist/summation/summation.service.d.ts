import { NewSumDto } from './dto/new-sum.dto';
import { Sum } from './entities/sum.entity';
export declare class SummationService {
    private sums;
    executeSum(newSumDto: NewSumDto): Sum;
}
