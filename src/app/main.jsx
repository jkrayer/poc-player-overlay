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
  render () {
    //better way to stop render before data is present? Probably
    if (this.props.players === null) {
      return null;
    }
    return (
      <div className="player-card-wrapper">
      {
        this.props.players.map( player => <Player data={player} key={player._id} /> )
      }
      </div>
    );
  }
}

App.defaultProps = {
  players: null
};

var PlayerStore = require('./../stores/player-store.jsx');

var initial = PlayerStore.getPlayers();

function render () {
  ReactDOM.render(<App players={initial} />, document.getElementById('app-mount-point'));
}

PlayerStore.onChange(function (players) {
  initial = players;
  render();
});
