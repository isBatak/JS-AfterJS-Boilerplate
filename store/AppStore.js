import {Store} from 'mobx-jsonapi-store';

import {Model} from '../enums/Model';
import {Post} from './models/Post';
import {User} from './models/User';

export class AppStore extends Store {
  static types = [Post, User];

  constructor(initialData) {
    super(initialData);

    // DEMO DATA
    if (!initialData) {
      const user = this.add({
        username: 'nives',
        name: 'Nives',
        email: 'nives.vulic@infinum.hr',
      }, Model.USER);

      this.add({
        author: user,
        title: 'Welcome to next.js!',
      }, Model.POST);

      this.add({
        author: {
          username: 'TODO',
          name: 'TODO!!',
          email: 'todo@infinum.hr',
        },
        title: 'Remove this mock data from AppStore!',
      }, Model.POST);
    }
  }
}
