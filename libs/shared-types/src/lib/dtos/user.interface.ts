import { StringifyOptions } from "querystring";

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
  id?: number;
  name: string;
  email: string;
  password: string;
  phone: number;
  birthdateIso: string;
  gender: string
  documentType: string
  documentValue: number
  status: string
  organizationId: string
  createdAt?: string
  // addressStreet?: string
  // addressNumber?: string
  // addressComplement?: string
  // addressNeighborhood?: string
  // addressZipcode?: string
  // addressCity: string
  // addressState: string
  // addressCountry?: string
}