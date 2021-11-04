import { UserGenderEnum, UserStatusEnum } from "../enums/user.enum";

export interface iUserAddress {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  zipcode: string;
  city: string;
  state: string;
  country: string;
}

export interface iUserAddressModel extends Document, iUserAddress {}

export interface iUser {
  name: string;
  password: string;
  email: string;
  phone: string;
  birthdate: Date;
  gender: UserGenderEnum;
  address: iUserAddressModel;
  document: {
    value: string;
    type: string;
  };
  status: UserStatusEnum;
}