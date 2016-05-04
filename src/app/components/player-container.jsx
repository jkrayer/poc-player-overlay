'use strict';

import React from 'react';
import Player from './player.jsx'

export default class PlayerContainer extends React.Component {
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

PlayerContainer.defaultProps = {
  players: null
};
