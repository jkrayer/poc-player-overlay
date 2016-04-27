'use strict';

import React from 'react';

export default class HitPoints extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let {maxHitPoints, currentHitPoints} = this.props;
    return (
      <div>{currentHitPoints + "/" + maxHitPoints}</div>
    );
  }
}

HitPoints.propTypes = {
  maxHitPoints: React.PropTypes.number.isRequired,
  currentHitPoints: React.PropTypes.number.isRequired
};
