import * as express from 'express';
import * as cors from 'cors'

import { API_PORT } from '@gohubly/shared-types'

import routes from './api/routes';
import errorHandler from './api/middleware/errorHandler.midd';

const app = express();
app.use(cors())
  .use(express.json())
  .use(errorHandler)

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send({ message: 'Welcome to app-api!' });
});

const server = app.listen(API_PORT, () => {
  console.log(`Listening at http://localhost:${API_PORT}/api`);
});

server.on('error', console.error);
