import { Document } from 'mongoose';
import { Entity, Column } from "typeorm";

import { iUser, UserGenderEnum, UserStatusEnum } from '@gohubly/shared';

export interface iUserModel extends Document, Omit<iUser, 'id'> {
  _id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

@Entity({ name: 'User' })
export class User {
  @Column()
  name: string;
  
  @Column()
  email: string;
  
  @Column()
  password: string;
  
  @Column()
  phone: string;
  
  @Column()
  birthdate: string;
  
  @Column()
  gender: UserGenderEnum;
  
  @Column()
  address_street: string;
  
  @Column()
  address_number: string;
  
  @Column()
  address_complement: string;
  
  @Column()
  address_neighborhood: string;
  
  @Column()
  address_zipcode: string;
  
  @Column()
  address_city: string;
  
  @Column()
  address_state: string;
  
  @Column()
  address_country: string;
  
  @Column()
  documentValue: string;
  
  @Column()
  documentType: string;
  
  @Column()
  status: UserStatusEnum;

  @Column({ name: "created_at" })
  createdAt?: Date;
}

export { User as UserModel }
