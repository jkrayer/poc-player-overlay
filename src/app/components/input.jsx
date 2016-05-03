'use strict';

import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="input-wrapper">
        <label
            className="label"
            for={this.props.for}
        >
          {this.props.title}
        </label>
        <input
            className="input"
            defaultValue={this.props.defaultValue}
            id={this.props.for}
            onChange={this.props.changeHandler}
            type={this.props.type}
        />
      </div>
    );
  }
}
