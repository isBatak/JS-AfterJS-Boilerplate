/* eslint-disable react/no-danger */
import React from 'react';
import {extractCritical} from 'emotion-server';
import htmlescape from 'htmlescape';

import './styles/global';

const {
  APP_ENV,
  API_URL,
  BUGSNAG_API_KEY,
} = process.env;
const env = {
  APP_ENV,
  API_URL,
  BUGSNAG_API_KEY,
};

class Document extends React.Component {
  static getInitialProps({ assets, data, renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return {
      assets,
      data,
      ...page,
      ...styles,
    };
  }

  render() {
    const {
      helmet,
      assets,
      data,
      css,
    } = this.props;

    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html lang="en-US" {...htmlAttrs}>
        <head>
          <meta
            content="IE=edge"
            httpEquiv="X-UA-Compatible"
          />
          <meta charSet="utf-8" />
          <title>Welcome to the Afterparty</title>
          <meta
            content="width=device-width, initial-scale=1"
            name="viewport"
          />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {assets.client.css && (
            <link
              href={assets.client.css}
              rel="stylesheet"
            />
          )}
          <style dangerouslySetInnerHTML={{__html: css}} />
          <script
            dangerouslySetInnerHTML={{ __html: `__ENV__ = ${htmlescape(env)}` }}
          />
        </head>
        <body {...bodyAttrs}>
          <div id="root" />
          <script
            dangerouslySetInnerHTML={{
              __html: ` window.__AFTER__ = ${JSON.stringify(data)}; `,
            }}
            type="text/javascript"
          />
          <script
            crossOrigin="anonymous"
            defer
            src={assets.client.js}
            type="text/javascript"
          />
        </body>
      </html>
    );
  }
}

export default Document;
