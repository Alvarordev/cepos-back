import { Perfil } from 'src/perfil/entities/perfil.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  iCodEmpresa: number;

  @Column()
  vNombreEmpresa: string;

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

  @OneToMany(() => Perfil, (perfil) => perfil.empresa)
  perfiles?: Perfil[];

  @OneToMany(() => Usuario, (usuario) => usuario.empresa)
  usuarios?: Usuario[];
}
