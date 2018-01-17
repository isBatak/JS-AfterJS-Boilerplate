import React from 'react';
import {Model} from '../enums/Model';
import page from '../components/page';

@page class TestPage extends React.Component {
  render() {
    const {store} = this.props;
    const posts = store.findAll(Model.POST);

    return (
      <div>
        <h1>Welcome to next.js!</h1>
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
      </div>
    );
  }
}

export default TestPage;
