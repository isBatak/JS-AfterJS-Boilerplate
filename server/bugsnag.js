const bugsnag = require('bugsnag');
const unhandledRejection = require('unhandled-rejection');
const pkg = require('../package.json');

const dev = process.env.APP_ENV === 'development';

// Here we register the Bugsnag client using our project's API key, and optionally pass our
// Bugsnag configuration. For example, we can enable `sendCode` so we're able to see the code
// within our app straight from the Bugsnag error report page.
bugsnag.register(process.env.BUGSNAG_API_KEY, {
  releaseStage: process.env.APP_ENV + ' - server',
  appVersion: pkg.version,
  autoNotify: !dev,
  metaData: {
    env: 'node',
  },
});

// When it comes to unhandled rejections (from Promises) within our app, we can use a library
// called "unhandled-rejection" to do all the heavy lifting. This library gives us the ability to
// catch rejections from within multiple types of Promise implementations.
let rejectionEmitter = unhandledRejection({
  timeout: 20,
});

rejectionEmitter.on('unhandledRejection', (error) => {
  if (!dev) {
    bugsnag.notify(error);
  }
});

module.exports = bugsnag;
