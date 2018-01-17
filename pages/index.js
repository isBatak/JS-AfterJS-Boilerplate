import React from 'react';
import {observer} from 'mobx-react';
import Link from 'next/link';

import page from '../components/page';
import {Model} from '../enums/Model';

@page
@observer
class IndexPage extends React.Component {
  constructor(...args) {
    super(...args);
    this.__addPost = this.__addPost.bind(this);
  }

  __addPost() {
    const {store} = this.props;
    store.add({
      author: 'nives',
      title: 'Hello world!',
    }, Model.POST);
  }

  render() {
    const {store} = this.props;

    const posts = store.findAll(Model.POST);

    return (
      <div>
        <h1>Welcome to next.js!</h1>
        <Link href="/form"><a>To form</a></Link>
        <div>Posts: {posts.length}</div>
        <ul>
          {
            posts.map((post) => (
              <li key={post.getRecordId()}>
                <b>{post.title}</b> by {post.author.name}
              </li>
            ))
          }
        </ul>
        <button onClick={this.__addPost}>Add post</button>
        <Link href="/test-page"><a>Test Page</a></Link>
      </div>
    );
  }
}

export default IndexPage;
