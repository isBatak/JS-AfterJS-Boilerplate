import {Record} from 'mobx-jsonapi-store';

import {Model} from '../../enums/Model';

export class User extends Record {
  static type = Model.USER;
  static idAttribute = 'username';
}
