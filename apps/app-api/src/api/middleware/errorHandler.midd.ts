import { NextFunction, Request, Response } from 'express';
import { CommonHandler } from '../dtos/controllers.dto';

export default (handler: CommonHandler, req: Request, res: Response, next: NextFunction): Response => {
  if (!handler.error) {
    next(handler);
    return;
  }

  return res.status(handler.status).json(handler);
}