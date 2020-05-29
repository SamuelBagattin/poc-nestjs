import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("client")
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column("created_on")
  createdOn: Date;

  @Column("last_login")
  lastLogin: Date;
}
