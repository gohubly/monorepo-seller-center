import { iUser } from "../dtos";
import { formatOnlyNumbers } from "../utils";

export const objectToUserMapper = ({
  id,
  name,
  email,
  password,
  gender,
  phone,
  birthdate,
  documentType,
  documentValue,
  status,
  address_country,
  address_state,
  address_city,
  address_neighborhood,
  address_street,
  address_number,
  address_complement,
  organization_id,
}: Record<string, any>): iUser => {
  const phoneOnlyNumbers = formatOnlyNumbers(phone)
  const documenteOnlyNumbers = formatOnlyNumbers(documentValue)

  return {
    id,
    name,
    email,
    password,
    gender,
    birthdate,
    documentType,
    documentValue: documenteOnlyNumbers,
    phone: phoneOnlyNumbers,
    status,
    address_city,
    address_country,
    address_neighborhood,
    address_number,
    address_state,
    address_street,
    address_complement,
    organization_id
  }
}