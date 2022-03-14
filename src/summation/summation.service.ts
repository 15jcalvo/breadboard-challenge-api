import { Injectable } from '@nestjs/common';
import { NewSumDto } from './dto/new-sum.dto'
import { Sum } from './entities/sum.entity'

@Injectable()
export class SummationService {
    private sums: Sum[] = [{ a: 1, b: 2, c: 3}]

    executeSum(newSumDto: NewSumDto): Sum {
        const newSum = {a: Number(newSumDto.a), b: Number(newSumDto.b), c: Number(newSumDto.a) + Number(newSumDto.b)}
        return newSum
    }
}
