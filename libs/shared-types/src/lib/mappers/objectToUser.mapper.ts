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
  addressState,
  addressCity,
  organizationId,
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
    addressState,
    addressCity,
    organizationId,
  }
}