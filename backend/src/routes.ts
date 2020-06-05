import { Router } from 'express';

const routes = Router();

routes.get('/customers', (request, response) => {
  return response.json({ ok: true });
});

export default routes;