import * as Joi from 'joi'
import { SchemaValidator } from '../middleware/schemaValidator.midd';

export const loginUserSchema: SchemaValidator = {
  body: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  })
};