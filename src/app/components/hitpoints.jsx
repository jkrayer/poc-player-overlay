'use strict';

import React from 'react';

export default class HitPoints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
    let currentHP = this.props.currentHitPoints + parseInt(this.state.input, 10);
    let newCurrent = Math.min(currentHP, this.props.maxHitPoints);
    this.props.handleSubmit(newCurrent);
    this.setState({
      input: ''
    });
  }
  handleChange (event) {
    this.setState({
      input: event.target.value
    });
  }
  render () {
    let {maxHitPoints, currentHitPoints, className} = this.props;
    return (
      <form
          className={className}
          onSubmit={this.handleSubmit}
      >
        <span className="hpform-span">{currentHitPoints + "/" + maxHitPoints}</span>
        <input
            className="hpform-input"
            onChange={this.handleChange}
            type="text"
            value={this.state.input}
        />
      </form>
    );
  }
}

HitPoints.propTypes = {
  currentHitPoints: React.PropTypes.number.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  maxHitPoints: React.PropTypes.number.isRequired
};
