'use strict';

import React from 'react';
import Input from './input.jsx';

export default class PlayerEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
    //let newVals = Object.assign({}, this.props, this.state);
    //send newVals
  }
  handleChange (event) {
    this.setState({
      event.target.id: event.target.value
    });
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
            changeHandler={this.handleChange}
            for="characterName"
            title="Character Name"
            type="text"
            value={this.state.characterName}
        />
        <Input
            changeHandler={this.handleChange}
            for="tag"
            title="Tag"
            type="text"
            value={this.state.tag}
        />
        <Input
            changeHandler={this.handleChange}
            for="initiativeModifier"
            title="Initiative Modifier"
            type="text"
            value={this.state.initiativeModifier}
        />
        <Input
            changeHandler={this.handleChange}
            for="armorClass"
            title="Armor Class"
            type="text"
            value={this.state.armorClass}
        />
        <Input
            changeHandler={this.handleChange}
            for="maxHitPoints"
            title="Max Hit Points"
            type="text"
            value={this.state.maxHitPoints}
        />
        <Input
            changeHandler={this.handleChange}
            for="passivePerception"
            title="Passive Perception"
            type="text"
            value={this.state.passivePerception}
        />
        <Input
            changeHandler={this.handleChange}
            for="passiveInvestigation"
            title="Passive Investigation"
            type="text"
            value={this.state.passiveInvestigation}
        />
        <Input
            changeHandler={this.handleChange}
            for="passiveStealth"
            title="Passive Stealth"
            type="text"
            value={this.state.passiveStealth}
        />
        <Input
            changeHandler={this.handleChange}
            for="trainedSkills"
            title="Trained Skills"
            type="text"
            value={this.state.trainedSkills}
        />
        <Input
            changeHandler={this.handleChange}
            for="additionalInfo"
            title="Additional Info"
            type="text"
            value={this.state.additionalInfo}
        />
        <button type="submit">{'Submit'}</button>
      </form>
    );
  }
}
