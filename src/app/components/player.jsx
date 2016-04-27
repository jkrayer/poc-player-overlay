'use strict';

import React from 'react';
import HitPoints from './components/hitpoints.jsx'

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render () {
    let { data } = this.props;
    let { collapsed } = this.state;
    return (
      <article className={collapsed ? 'player-card collapsed' : 'player-card expanded'}>
        <header>
          <h1
              className="player-card-header"
              onClick={this.handleClick}
          >
            <span>{data.playerName}</span> {data.characterName}
          </h1>
          <p className="player-card-tag">{data.tag}</p>
        </header>
        <dl className="player-card-dl">
          <dt>{"Initiative Modifier"}</dt>
          <dd>{data.initiativeModifier}</dd>
          <dt>{"Armor Class"}</dt>
          <dd>{data.armorClass}</dd>
          <dt>{"Hit Points"}</dt>
          <dd>
            <HitPoints
                currentHitPoints={data.currentHitPoints}
                maxHitPoints={data.maxHitPoints}
            />
          </dd>
        </dl>
        <dl className="player-card-dl player-card-dl-pasive">
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
