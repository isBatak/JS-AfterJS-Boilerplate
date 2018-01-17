import {config} from 'mobx-jsonapi-store';
import fetch from 'isomorphic-fetch';
import {apiEndpoint} from './env';
import {apify, deapify} from './apify';


config.fetchReference = fetch;

config.baseUrl = apiEndpoint;

config.defaultHeaders = {
  'Content-Type': 'application/vnd.api+json',
};

const {baseFetch} = config;

config.baseFetch = (method, url, body, requestHeaders) => (
  baseFetch.call(config, method, url, apify(body), requestHeaders)
    .then((res) => {
      res.data = deapify(res.data);
      return res;
    })
);
