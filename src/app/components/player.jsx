'use strict';

import React from 'react';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    <h1>this.props.data.characterName</h1>
  }
}

Player.propTypes = {
  data: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    characterName: React.PropTypes.string.isRequired,
    playerName: React.PropTypes.string.isRequired,
    tag: React.PropTypes.string.isRequired,
    initiativeModifier: React.PropTypes.number.isRequired,
    armorClass: React.PropTypes.string.isRequired,
    maxHitPoints: React.PropTypes.number.isRequired,
    currentHitPoints: React.PropTypes.number.isRequired,
    passivePerception: React.PropTypes.number.isRequired,
    passiveInvestigation: React.PropTypes.number.isRequired,
    passiveStealth: React.PropTypes.number.isRequired,
    trainedSkills: React.PropTypes.arrayOf(React.PropTypes.string),
    additionalInfo: React.PropTypes.string
  })
};
