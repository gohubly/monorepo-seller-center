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
  id?: string
  name: string
  email: string
  password: string
  gender: string
  phone: string
  birthdate: string
  documentType: string
  documentValue: string
  status: string
  addressState: string
  addressCity: string
}