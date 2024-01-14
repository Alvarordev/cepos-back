import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from './entities/empresa.entity';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
  ) {}

  async create(_createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    const nuevaEmpresa = this.empresaRepository.create(_createEmpresaDto);
    return await this.empresaRepository.save(nuevaEmpresa);
  }

  async findAll(): Promise<Empresa[]> {
    return await this.empresaRepository.find();
  }

  async findOne(id: number): Promise<Empresa | undefined> {
    return await this.empresaRepository.findOne({
      where: [{ iCodEmpresa: id }],
    });
  }

  async update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    const empresaExistente = await this.empresaRepository.findOne({
      where: [{ iCodEmpresa: id }],
    });
    if (!empresaExistente) {
      return undefined;
    }

    const empresaActualizada = Object.assign(
      empresaExistente,
      updateEmpresaDto,
    );
    return await this.empresaRepository.save(empresaActualizada);
  }
}
