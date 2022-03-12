import { Module } from '@nestjs/common';
import { SummationController } from './summation.controller';
import { SummationService } from './summation.service';

@Module({
  controllers: [SummationController],
  providers: [SummationService]
})
export class SummationModule {}
