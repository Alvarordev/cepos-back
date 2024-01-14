import { Perfil } from 'src/perfil/entities/perfil.entity';
import { Empresa } from 'src/empresa/entities/empresa.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Multa } from 'src/multa/entities/multa.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  iCodUsuario: number;

  @Column()
  iCodPerfil: number;

  @Column()
  iCodEmpresa: number;

  @Column()
  vAliasUsuario: string;

  @Column()
  vClaveUsuario: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  dtFechaVencimiento: Date;

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

  @ManyToOne(() => Empresa, (empresa) => empresa.usuarios)
  @JoinColumn({ name: 'iCodEmpresa' })
  empresa: Empresa;

  @ManyToOne(() => Perfil, (perfil) => perfil.usuarios)
  @JoinColumn({ name: 'iCodPerfil' })
  perfil: Perfil;

  @OneToMany(() => Multa, (multa) => multa.usuariobloqueo)
  multaUsuarioBloqueo?: Multa[];

  @OneToMany(() => Multa, (multa) => multa.usuariodesbloqueo)
  multaUsuarioDesbloqueo?: Multa[];
}
