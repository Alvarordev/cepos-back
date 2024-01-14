import { Test, TestingModule } from '@nestjs/testing';
import { TipocepoService } from './tipocepo.service';

describe('TipocepoService', () => {
  let service: TipocepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipocepoService],
    }).compile();

    service = module.get<TipocepoService>(TipocepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
