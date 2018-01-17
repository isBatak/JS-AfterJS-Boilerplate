import React from 'react';
import PropTypes from 'prop-types';

import {initStore} from '../../store';

function page(Child) {
  return class WrappedComponent extends React.Component {

    static propTypes = {
      snapshot: PropTypes.arrayOf(Object).isRequired,
    };

    static getInitialProps(context) {
      const store = initStore();

      if (Child.getInitialProps) {
        return {
          ...Child.getInitialProps({
            ...context,
            snapshot: store.toJS(),
          }),
        };
      }

      return {
        snapshot: store.toJS(),
      };
    }

    constructor(props) {
      super(props);
      this.store = initStore(props.snapshot); // Data hydration
    }

    render() {
      return (
        <Child
          {...this.props}
          store={this.store}
        />
      );
    }
  };
}

export default page;
