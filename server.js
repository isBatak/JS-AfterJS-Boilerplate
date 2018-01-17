require('dotenv').config();
const express = require('express');
const next = require('next');
const bugsnag = require('./server/bugsnag');
const mobxReact = require('mobx-react');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.APP_ENV === 'development';
const app = next({dev});
const handle = app.getRequestHandler();

mobxReact.useStaticRendering(true);

app.prepare().then(() => {
  const server = express();

  server.use(bugsnag.requestHandler);

  server.get('/', (req, res) => app.render(req, res, '/index', req.query));
  server.get('/test', (req, res) => app.render(req, res, '/test', req.query));
  server.get('*', (req, res) => handle(req, res));

  server.use(bugsnag.errorHandler);

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
