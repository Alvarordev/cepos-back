import { Empresa } from 'src/empresa/entities/empresa.entity';
import { Multa } from 'src/multa/entities/multa.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tipocepo {
  @PrimaryGeneratedColumn()
  iCodTipoCepo: number;

  @Column()
  iCodEmpresa: number;

  @Column()
  vDescripcionCepo: string;

  @Column({ type: 'numeric' })
  vCostoCepo: number;

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

  @OneToMany(() => Multa, (multa) => multa.tipocepo)
  multas?: Multa[];
}
