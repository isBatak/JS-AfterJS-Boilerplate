import {injectGlobal, fontFace} from 'emotion';

/* eslint-disable no-unused-expressions */
fontFace`
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-style: normal;
  src: url('static/fonts/SourceSansPro-Regular.ttf')
`;

fontFace`
  font-family: "Source Sans Pro";
  font-weight: 600;
  font-style: normal;
  src: url('static/fonts/SourceSansPro-Semibold.ttf')
`;

injectGlobal`
*, *::after, *::before{
  box-sizing: border-box;
}
html ,body {
    margin:0;
    font-size: 16px;
    font-family: 'Source Sans Pro';
    width: 100%;
    height: 100%;
    padding: 0;

    body > div:first-child {
    width: 100%;
    height: 100%;

  }
  #__next {
    width: 100%;
    height: 100%;
    > div {
      width: 100%;
      height: 100%;
      overflow: scroll;
    }
  }
}`;
/* eslint-enable */
