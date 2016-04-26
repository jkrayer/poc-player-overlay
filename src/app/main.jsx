'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import ajax from './helpers/ajax'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount () {
    let self = this;
    ajax.get('api/players').then(function(data){
      self.setState({players: data});
    });
  }
  render () {
    return (
      <h1>{"Hello Wolrd!"}</h1>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-mount-point'));
