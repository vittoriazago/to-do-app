import { Router } from 'express';
import { itemsRouter } from '../item/item.router';

const routes = Router();

routes.use('/items', itemsRouter);

export default routes;