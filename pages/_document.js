/* eslint-disable react/no-danger */
import Document, {Head, Main, NextScript} from 'next/document';
import {extractCritical} from 'emotion-server';
import htmlescape from 'htmlescape';

import '../styles/global';

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

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return {...page, ...styles};
  }

  constructor(props) {
    super(props);
    const {__NEXT_DATA__, ids} = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <title>Next.js Boilerplate</title>
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
          <script
            dangerouslySetInnerHTML={{ __html: `__ENV__ = ${htmlescape(env)}` }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
