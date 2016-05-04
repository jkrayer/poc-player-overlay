'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PlayerContainer from './components/player-container.jsx'
import ajax from './helpers/ajax'

const PlayerStore = require('./../stores/player-store.jsx');
let initial = PlayerStore.getPlayers();

function render () {
  ReactDOM.render(<PlayerContainer players={initial} />, document.getElementById('app-mount-point'));
}

PlayerStore.onChange(function (players) {
  initial = players;
  render();
});
