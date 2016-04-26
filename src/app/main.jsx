'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Components/player.jsx'
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
      <div className="players-wrapper">
      {
        this.state.players.map( player => <Player data={player} /> )
      }
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-mount-point'));
