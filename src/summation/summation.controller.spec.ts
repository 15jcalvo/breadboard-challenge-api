import { Test, TestingModule } from '@nestjs/testing';
import { SummationController } from './summation.controller';
import { SummationService } from './summation.service';

describe('SummationController', () => {
  let controller: SummationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummationService],
      controllers: [SummationController],
    }).compile();

    controller = module.get<SummationController>(SummationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
