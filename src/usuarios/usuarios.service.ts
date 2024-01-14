import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EncryptionUtil } from 'src/utils/password.util';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(_createUsuarioDto: CreateUsuarioDto) {
    const { vClaveUsuario, ...userData } = _createUsuarioDto;

    const hashedPassword = await EncryptionUtil.hashPassword(vClaveUsuario);
    const nuevaEmpresa = this.usuarioRepository.create({
      ...userData,
      vClaveUsuario: hashedPassword,
    });
    return await this.usuarioRepository.save(nuevaEmpresa);
  }

  async findAll() {
    return await this.usuarioRepository.find({
      relations: ['empresa', 'perfil'],
    });
  }

  async findOne(id: number) {
    return await this.usuarioRepository.findOne({
      where: [{ iCodUsuario: id }],
      relations: ['empresa', 'perfil'],
    });
  }

  async findByUser(vAliasUsuario: string, vClaveUsuario: string) {
    return await this.usuarioRepository.findOne({
      where: [{ vAliasUsuario: vAliasUsuario, vClaveUsuario: vClaveUsuario }],
      relations: ['empresa', 'perfil'],
    });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioExistente = await this.usuarioRepository.findOne({
      where: [{ iCodUsuario: id }],
    });
    if (!usuarioExistente) {
      return undefined;
    }

    const usuarioActualizado = Object.assign(
      usuarioExistente,
      updateUsuarioDto,
    );
    return await this.usuarioRepository.save(usuarioActualizado);
  }
}
