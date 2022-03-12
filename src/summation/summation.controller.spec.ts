import { Test, TestingModule } from '@nestjs/testing';
import { SummationController } from './summation.controller';

describe('SummationController', () => {
  let controller: SummationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SummationController],
    }).compile();

    controller = module.get<SummationController>(SummationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
