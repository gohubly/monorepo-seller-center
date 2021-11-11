import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Users {
  @PrimaryGeneratedColumn()
  id?: number;

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
  documentType: string

  @Column()
  documentValue: number

  @Column()
  status: string

  @Column()
  organizationId: string

  @Column()
  createdAt?: string

  // Need address in User ? Only in organizations ?
  // @Column()
  // addressStreet: string

  // @Column()
  // addressNumber: string

  // @Column()
  // addressComplement: string

  // @Column()
  // addressNeighborhood: string

  // @Column()
  // addressZipcode: string

  // @Column()
  // addressCity: string

  // @Column()
  // addressState: string

  // @Column()
  // addressCountry: string
}