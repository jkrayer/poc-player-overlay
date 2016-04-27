'use strict';

import React from 'react';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { data } = this.props;
    return (
      <article className="player-card">
        <header>
          <h1 className="player-card-header">{data.characterName} <span>{data.playerName}</span></h1>
          <p className="player-card-tag">{data.tag}</p>
        </header>
        <dl className="player-card-dl">
          <dt>{"Initiative Modifier"}</dt>
          <dd>{data.initiativeModifier}</dd>
          <dt>{"Armor Class"}</dt>
          <dd>{data.armorClass}</dd>
          <dt>{"Hit Points"}</dt>
          <dd>{data.currentHitPoints + "/" + data.maxHitPoints}</dd>
        </dl>
        <dl className="player-card-dl">
          <dt>{"Passive Perception"}</dt>
          <dd>{data.passivePerception}</dd>
          <dt>{"Passive Investigation"}</dt>
          <dd>{data.passiveInvestigation}</dd>
          <dt>{"Passive Stealth"}</dt>
          <dd>{data.passiveStealth}</dd>
        </dl>
        <p className="player-card-p">{data.trainedSkills.join(', ')}</p>
        <p className="player-card-p">{data.additionalInfo}</p>
      </article>
    );
  }
}

Player.propTypes = {
  data: React.PropTypes.shape({
    _id: React.PropTypes.string.isRequired,
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