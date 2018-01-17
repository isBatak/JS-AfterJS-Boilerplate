import React, { Component } from 'react';
import {isBrowser, isDevelopment} from '../../utils/env';

let Bugsnag;

if (isBrowser) {
  Bugsnag = require('bugsnag-js'); // eslint-disable-line
}

class ErrorBoundary extends Component {

  componentDidCatch(error, info) {
    if (Bugsnag && !isDevelopment) {
      Bugsnag.notifyException(error, { react: info });
    }
  }

  render() {
    const {children} = this.props;
    return children;
  }
}

export default ErrorBoundary;
