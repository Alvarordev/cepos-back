import { Empresa } from "src/empresa/entities/empresa.entity";
import { Tipocepo } from "src/tipocepo/entities/tipocepo.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Multa {
  @PrimaryGeneratedColumn()
  iCodMulta: number;

  @Column()
  iCodEmpresa: number;

  @Column()
  iCodTipoCepo: number;

  @Column({ type: "numeric" })
  gCoordenadasXMulta: number;

  @Column({ type: "numeric" })
  gCoordenadasYMulta: number;

  @Column()
  vDireccionMulta: string;

  @Column()
  vConceptoMulta: string;

  @Column()
  vTarjetaPropiedad: string;

  @Column()
  vLicenciaConducir: string;

  @Column()
  vPlacaAuto: string;

  @Column()
  vMarcaAuto: string;

  @Column()
  vModeloAuto: string;

  @Column()
  vColorAuto: string;

  @Column()
  iNumeroLlantas: number;

  @Column()
  vCodigoPreliquidacion: string;

  @Column({
    type: "timestamp without time zone",
    nullable: true,
  })
  dFechaPago: Date;

  @Column({
    nullable: true,
  })
  iCodUsuarioBloqueo: number;

  @Column({
    type: "timestamp without time zone",
    nullable: true,
  })
  dtFechaBloqueo: Date;

  @Column({
    nullable: true,
  })
  iCodUsuarioDesbloqueo: number;

  @Column({
    type: "timestamp without time zone",
    nullable: true,
  })
  dtFechaDesbloqueo: Date;

  @Column({
    default: true,
  })
  bEstadoRegistro: boolean;

  @Column()
  iCodigoUsuarioCreacion: number;

  @Column({
    type: "timestamp without time zone",
    default: () => "now()",
  })
  dtFechaCreacion: Date;

  @Column({
    nullable: true,
  })
  iCodigoUsuarioModificacion: number;

  @Column({
    type: "timestamp without time zone",
    nullable: true,
  })
  dtFechaModificacion: Date;

  @ManyToOne(() => Empresa, (empresa) => empresa.perfiles)
  @JoinColumn({ name: "iCodEmpresa" })
  empresa: Empresa;

  @ManyToOne(() => Tipocepo, (tipocepo) => tipocepo.multas)
  @JoinColumn({ name: "iCodTipoCepo" })
  tipocepo: Tipocepo;

  @ManyToOne(() => Usuario, (usuario) => usuario.multaUsuarioBloqueo)
  @JoinColumn({ name: "iCodUsuarioBloqueo" })
  usuariobloqueo: Tipocepo;

  @ManyToOne(() => Usuario, (usuario) => usuario.multaUsuarioDesbloqueo)
  @JoinColumn({ name: "iCodUsuarioDesbloqueo" })
  usuariodesbloqueo: Tipocepo;
}
