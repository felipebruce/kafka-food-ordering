import { Request, Response, NextFunction } from 'express';

export interface OrderControllerInterface {
    postOrder(req: Request, res: Response, next: NextFunction): Promise<void>;
}
