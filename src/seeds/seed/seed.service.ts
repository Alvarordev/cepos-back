import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Empresa } from 'src/empresa/entities/empresa.entity';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class SeedService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) {}

  async seedEmpresas() {
    // const tableNames = await this.dataSource.query(
    //   `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`,
    // );

    // for (const { table_name } of tableNames) {
    //   await this.dataSource.query(
    //     `SELECT setval(pg_get_serial_sequence('${table_name}', 'id'), coalesce(max(id), 0)+1, false) FROM ${table_name}`,
    //   );
    // }

    await this.empresaRepository.clear();

    await this.empresaRepository.save([
      {
        vNombreEmpresa: 'Empresa 1',
        iCodigoUsuarioCreacion: 1,
      },
      {
        vNombreEmpresa: 'Empresa 2',
        iCodigoUsuarioCreacion: 1,
      },
      { vNombreEmpresa: 'Empresa 3', iCodigoUsuarioCreacion: 1 },
      { vNombreEmpresa: 'Empresa 4', iCodigoUsuarioCreacion: 1 },
    ]);
  }
}
