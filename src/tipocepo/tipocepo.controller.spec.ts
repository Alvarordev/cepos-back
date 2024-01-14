import { Test, TestingModule } from '@nestjs/testing';
import { TipocepoController } from './tipocepo.controller';
import { TipocepoService } from './tipocepo.service';

describe('TipocepoController', () => {
  let controller: TipocepoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipocepoController],
      providers: [TipocepoService],
    }).compile();

    controller = module.get<TipocepoController>(TipocepoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
