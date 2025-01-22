import { Request, Response, NextFunction } from 'express';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(401).send({ error: 'Unauthorized!' });
  res.status(404).send({ error: 'Not found!' });
  res.status(408).send({ error: 'Request Time Out!' });
  res.status(500).send({ error: 'Internal Server Error!' });
}
