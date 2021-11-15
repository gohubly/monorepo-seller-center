import * as Joi from 'joi'
import { SchemaValidator } from '../middleware/schemaValidator.midd'

export const createUserSchema: SchemaValidator = {
  body: Joi.object({
    id: Joi.number(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    phone: Joi.number().required(),
    birthdateIso: Joi.string().required(),
    gender: Joi.string().required(),
    documentType: Joi.string().required(),
    documentValue: Joi.number().required(),
    status: Joi.string().required(),
    organizationId: Joi.string().required(),
    createdAt: Joi.string(),
  })
};