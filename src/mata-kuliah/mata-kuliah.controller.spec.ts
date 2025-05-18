import { Test, TestingModule } from '@nestjs/testing';
import { MataKuliahController } from './mata-kuliah.controller';
import { MataKuliahService } from './mata-kuliah.service';

describe('MataKuliahController', () => {
  let controller: MataKuliahController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MataKuliahController],
      providers: [MataKuliahService],
    }).compile();

    controller = module.get<MataKuliahController>(MataKuliahController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
