import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export default class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: number;

  @Column()
  birthdateIso: string;

  @Column()
  gender: string

  @Column()
  address_street: string

  @Column()
  address_number: string

  @Column()
  address_complement: string

  @Column()
  address_neighborhood: string

  @Column()
  address_zipcode: string

  @Column()
  address_city: string

  @Column()
  address_state: string

  @Column()
  address_country: string

  @Column()
  documentType: string

  @Column()
  documentValue: number

  @Column()
  status: string

  @Column()
  created_at: string
}