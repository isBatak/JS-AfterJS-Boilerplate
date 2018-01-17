import {init} from 'mobx-store-devtools';
import {AppStore} from './AppStore';
import {isBrowser, isServer, isDevelopment} from '../utils/env';

let store = null;

export function initStore(snapshot) {
  if (snapshot instanceof AppStore) {
    return snapshot;
  }

  // Always create new store on server
  if (isServer) {
    store = new AppStore(snapshot);
  }

  // This will be true when page constructor is called on client
  if (store === null) {
    store = new AppStore(snapshot);

    if (isBrowser && isDevelopment) {
      init(store);
    }
  }

  return store;
}
