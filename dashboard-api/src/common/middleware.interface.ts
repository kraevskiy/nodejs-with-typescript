import { NextFunction, Request, Response } from 'express';

export interface IMiddleware {
	execute: (req: Request, ews: Response, next: NextFunction) => void;
}
