'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Components/player.jsx'
import ajax from './helpers/ajax'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  componentDidMount () {
    let self = this;
    ajax.get('api/players').then(function(data){
      self.setState({players: data});
    });
  }
  render () {
    //better way to stop render before data is present? Probably
    if (this.state === null) {
      return null;
    }
    return (
      <div className="players-wrapper">
      {
        this.state.players.map( player => <Player data={player} key={player._id} /> )
      }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-mount-point'));
