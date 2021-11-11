import { NextFunction, Request, Response } from 'express';
import { CommonHandler } from '../dtos/controllers.dto';

export default (handler: CommonHandler, req: Request, res: Response, next: NextFunction): Response => {
  if (handler.error) {
    res.status(500)
    res.render('error', { handler })
    return
  }

  if (handler.status) {
    return res.status(handler.status).json(handler.data)
  }

  next(handler)
}