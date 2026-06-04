import 'dotenv/config';
import express from 'express';
import { errors } from 'celebrate';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

import userRoutes from './routes/userRoutes.js';
import notesRoutes from './routes/notesRoutes.js';
import authRoutes from './routes/authRoutes.js';

const startServer = async () => {
  await connectMongoDB();

  const app = express();

  app.use(logger);
  app.use(express.json());
  app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL || '*' }));
  app.use(cookieParser());

  app.use(userRoutes);
  app.use(notesRoutes);
  app.use(authRoutes);

  app.use(notFoundHandler);
  app.use(errors());
  app.use(errorHandler);

  const PORT = process.env.PORT ?? 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
