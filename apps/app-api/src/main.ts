import * as express from 'express';
import * as cors from 'cors'

import { API_PORT } from '@gohubly/shared'

import routes from './api/routes';
import routerHandler from './api/middleware/routerHandler.midd';

import './app/database/connect'

const app = express();
app.use(cors())
  .use(express.json())
  .use(routerHandler)
  .use('/api', routes)

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to app-api!' });
});

const server = app.listen(API_PORT, () => {
  console.log(`🔥 Server started at http://localhost:${API_PORT}/api`);
});

server.on('error', console.error);
