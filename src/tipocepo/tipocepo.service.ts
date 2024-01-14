import { Injectable } from '@nestjs/common';
import { CreateTipocepoDto } from './dto/create-tipocepo.dto';
import { UpdateTipocepoDto } from './dto/update-tipocepo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipocepo } from './entities/tipocepo.entity';

@Injectable()
export class TipocepoService {
  constructor(
    @InjectRepository(Tipocepo)
    private tipoCepoRepository: Repository<Tipocepo>,
  ) {}

  async create(_createTipocepoDto: CreateTipocepoDto) {
    const nuevaEmpresa = this.tipoCepoRepository.create(_createTipocepoDto);
    return await this.tipoCepoRepository.save(nuevaEmpresa);
  }

  async findAll() {
    return await this.tipoCepoRepository.find({
      relations: ['empresa'],
    });
  }

  async findOne(id: number) {
    return await this.tipoCepoRepository.findOne({
      where: [{ iCodTipoCepo: id }],
      relations: ['empresa'],
    });
  }

  async update(id: number, updateTipocepoDto: UpdateTipocepoDto) {
    const tipoCepoExistente = await this.tipoCepoRepository.findOne({
      where: [{ iCodTipoCepo: id }],
    });
    if (!tipoCepoExistente) {
      return undefined;
    }

    const tipoCepoActualizado = Object.assign(
      tipoCepoExistente,
      updateTipocepoDto,
    );
    return await this.tipoCepoRepository.save(tipoCepoActualizado);
  }
}
