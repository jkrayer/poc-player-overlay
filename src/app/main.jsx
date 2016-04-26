'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <h1>{"Hello Wolrd!"}</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-mount-point'));
