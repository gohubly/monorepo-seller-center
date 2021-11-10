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
  address_street: string
  address_number: string
  address_complement: string
  address_neighborhood: string
  address_zipcode: string
  address_city: string
  address_state: string
  address_country: string
  documentType: string
  documentValue: number
  status: string
  created_at?: string
}