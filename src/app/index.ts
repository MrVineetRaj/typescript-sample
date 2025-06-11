import express from 'express';
import type { Application } from 'express';
import { register as registerHealthRoutes } from './routes/health';
export function createApp(): Application {
  const app: Application = express();

  app.use('/api/v1/health', registerHealthRoutes());
  return app;
}
