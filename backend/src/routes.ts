import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointsController = new PointsController();
const itemsController = new ItemsController();

const routes = Router();
const upload = multer(multerConfig);

routes.get('/items', itemsController.index);

routes.post(
  '/points',
  upload.single('image'), 
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      whatsapp: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().max(2).required(),
      items: Joi.string().required(),
    })
  }, {
    abortEarly: false,
  }), 
  pointsController.create
);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;