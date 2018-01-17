import React from 'react';

export default class Error extends React.Component {

  render() {
    const {code, children} = this.props;

    return (
      <div>
        <h1>{code}</h1>
        <h4>{children}</h4>
      </div>
    );
  }
}
