import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';
import { ValidationError } from 'joi';
import { HttpStatusCode } from '../../config/enums';
import { CommonHandler } from '../dtos/controllers.dto';

export interface SchemaValidator {
  body?: Joi.Schema;
  query?: Joi.Schema;
  params?: Joi.Schema;
}
interface ValidationResult {
  bodyError?: ValidationError;
  queryError?: ValidationError;
  parameterError?: ValidationError;
}
interface Result {
  body?: ValidationError;
  query?: ValidationError;
  parameter?: ValidationError;
}

export function validateSchema(schema: SchemaValidator) {
  return (req: Request, res: Response, next: NextFunction): Response | void => {
    const validateResult: ValidationResult = {};
    const result: Result = {};
    if (schema.body) {
      const { error, value } = schema.body.validate(req.body, { abortEarly: false });
      validateResult.bodyError = error;
      result.body = value;
    }
    if (schema.query) {
      const { error, value } = schema.query.validate(req.query, { abortEarly: false });
      validateResult.queryError = error;
      result.query = value;
    }
    if (schema.params) {
      const { error, value } = schema.params.validate(req.params, { abortEarly: false });
      validateResult.parameterError = error;
      result.parameter = value;
    }
    const valid = !validateResult.bodyError && !validateResult.parameterError && !validateResult.queryError;
    if (!valid) {
      const details = (validateResult.bodyError ? validateResult.bodyError.details : [])
        .concat(validateResult.parameterError ? validateResult.parameterError.details : [])
        .concat(validateResult.queryError ? validateResult.queryError.details : []);
      const mergedDetailsMessage = details.map(i => i.message).join(' ');
      
      const response = new CommonHandler({
        status: HttpStatusCode.INVALID_SCHEMA,
        error: mergedDetailsMessage
      });
      res.status(response.status).send({})
      // .send(response.content)

      next(response);
    }
    res.locals.validateResult = result;
    next();
  };
}