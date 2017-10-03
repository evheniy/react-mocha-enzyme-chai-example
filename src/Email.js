import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Email extends Component {
  static propTypes = {
    handleEmailChange: PropTypes.func.isRequired,
    fetchGravatar: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="form-group">
        <input
          onChange={this.props.handleEmailChange}
          className="form-control"
          style={{ width: 200 }}
          type="text"
        />
        <button
          onClick={this.props.fetchGravatar}
          className="btn-success btn"
        >
          Fetch
        </button>
      </div>
    );
  }
}
