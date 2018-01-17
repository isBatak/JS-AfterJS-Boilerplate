import {Record} from 'mobx-jsonapi-store';

import {Model} from '../../enums/Model';

export class Post extends Record {
  static type = Model.POST;
  static refs = {
    author: Model.USER,
  };
}
