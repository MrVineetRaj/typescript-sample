import type { Request, Response } from 'express';

import express from 'express';
import type { Router } from 'express';
import { Controller } from './controller';
export function register(): Router {
  const router: Router = express.Router();
  const controller = new Controller();

  router.get('/', controller.handleHealthCheck.bind(controller));

  return router;
}
