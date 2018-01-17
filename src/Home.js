import React from 'react';
import { NavLink } from 'react-router-dom';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class Home extends React.Component {
  static getInitialProps() {
    return sleep(300).then(() => ({ stuff: 'hello' }));
  }

  render() {
    const {prefetch, stuff } = this.props;
    return (
      <div className="page">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <h1>Home</h1>
        <p>Click the button to prefetch data for the About page</p>
        <button onClick={() => prefetch('/about')}>
          Prefetch Data!
        </button>

        <pre>data: {stuff || 'Loading...'}</pre>
      </div>
    );
  }
}

export default Home;
