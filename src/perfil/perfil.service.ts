import { Injectable } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PerfilService {
  constructor(
    @InjectRepository(Perfil)
    private perfilRepository: Repository<Perfil>,
  ) {}

  async create(_createPerfilDto: CreatePerfilDto) {
    const nuevaEmpresa = this.perfilRepository.create(_createPerfilDto);
    return await this.perfilRepository.save(nuevaEmpresa);
  }

  async findAll() {
    return await this.perfilRepository.find({
      relations: ['empresa'],
    });
  }

  async findOne(id: number) {
    return await this.perfilRepository.findOne({
      where: [{ iCodPerfil: id }],
      relations: ['empresa'],
    });
  }

  async update(id: number, updatePerfilDto: UpdatePerfilDto) {
    const perfilExistente = await this.perfilRepository.findOne({
      where: [{ iCodEmpresa: id }],
    });
    if (!perfilExistente) {
      return undefined;
    }

    const empresaActualizada = Object.assign(perfilExistente, updatePerfilDto);
    return await this.perfilRepository.save(empresaActualizada);
  }
}
