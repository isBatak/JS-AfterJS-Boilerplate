import Bugsnag from 'bugsnag-js';
import env, {isDevelopment} from '../utils/env';
import pkg from '../package.json';

Bugsnag.apiKey = env.BUGSNAG_API_KEY;
Bugsnag.releaseStage = env.APP_ENV + ' - client';
Bugsnag.appVersion = pkg.version;
Bugsnag.metaData = {
  env: 'browser',
};

if (isDevelopment) {
  Bugsnag.beforeNotify = (payload) => false;
}
