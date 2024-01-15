import { Injectable } from "@nestjs/common";
import { CreateMultaDto } from "./dto/create-multa.dto";
import { UpdateMultaDto } from "./dto/update-multa.dto";
import { Multa } from "./entities/multa.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class MultaService {
  constructor(
    @InjectRepository(Multa)
    private multaRepository: Repository<Multa>,
  ) {}

  async create(_createMultaDto: CreateMultaDto) {
    const nuevaEmpresa = this.multaRepository.create(_createMultaDto);
    return await this.multaRepository.save(nuevaEmpresa);
  }

  async findAll() {
    return await this.multaRepository.find({
      relations: ["empresa", "tipocepo", "usuariobloqueo", "usuariodesbloqueo"],
    });
  }

  async findOne(id: number) {
    return await this.multaRepository.findOne({
      where: [{ iCodMulta: id }],
      relations: ["empresa", "tipocepo", "usuariobloqueo", "usuariodesbloqueo"],
    });
  }

  async update(id: number, updateMultaDto: UpdateMultaDto) {
    const multaExistente = await this.multaRepository.findOne({
      where: [{ iCodTipoCepo: id }],
    });
    if (!multaExistente) {
      return undefined;
    }

    const tipoCepoActualizado = Object.assign(multaExistente, updateMultaDto);
    return await this.multaRepository.save(tipoCepoActualizado);
  }
}
