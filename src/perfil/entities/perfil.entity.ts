import { Empresa } from 'src/empresa/entities/empresa.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Perfil {
  @PrimaryGeneratedColumn()
  iCodPerfil: number;

  @Column()
  iCodEmpresa: number;

  @Column()
  vDescripcionPerfil: string;

  @Column({
    default: true,
  })
  bEstadoRegistro: boolean;

  @Column()
  iCodigoUsuarioCreacion: number;

  @Column({
    type: 'timestamp without time zone',
    default: () => 'now()',
  })
  dtFechaCreacion: Date;

  @Column({
    nullable: true,
  })
  iCodigoUsuarioModificacion: number;

  @Column({
    type: 'timestamp without time zone',
    nullable: true,
  })
  dtFechaModificacion: Date;

  @ManyToOne(() => Empresa, (empresa) => empresa.perfiles)
  @JoinColumn({ name: 'iCodEmpresa' })
  empresa: Empresa;

  @OneToMany(() => Usuario, (usuario) => usuario.perfil)
  usuarios?: Usuario[];
}
