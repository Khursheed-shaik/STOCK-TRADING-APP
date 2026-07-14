import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import stockRoutes from './routes/stockRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import watchlistRoutes from './routes/watchlistRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';
const clientDistPath = path.resolve(__dirname, '../client/dist');
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sbstocks';

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(mongoSanitize());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/auth', authRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/watchlist', watchlistRoutes);

if (isProduction && fs.existsSync(clientDistPath)) {
  app.use(express.static(clientDistPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

async function connectDatabase() {
  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
      connectTimeoutMS: 10000
    });
    console.log(`MongoDB connected (${mongoose.connection.host})`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    console.error('Check MONGO_URI, database-user credentials, and (for MongoDB Atlas) add your current IP address to Network Access.');
    process.exit(1);
  }
}

function tryListen(startPort, maxTries = 20) {
  let port = startPort;
  let tries = 0;

  const attempt = () => {
    tries += 1;
    const server = app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

    server.on('error', (err) => {
      if (err && err.code === 'EADDRINUSE' && tries < maxTries) {
        console.warn(`Port ${port} is in use. Trying ${port + 1}...`);
        port += 1;
        // Ensure we stop the failed server instance.
        try {
          server.close();
        } catch {
          // ignore
        }
        setTimeout(attempt, 100);
        return;
      }

      console.error('Failed to start server:', err);
      process.exit(1);
    });
  };

  attempt();
}

async function startServer() {
  await connectDatabase();
  tryListen(Number(PORT) || 5000);
}

startServer();
